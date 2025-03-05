import { IncomingForm } from 'formidable'
import fs from 'fs'
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'

// Disable default body parser to handle file upload
export const config = {
  api: {
    bodyParser: false,
  },
};

type NodeData = {
  id: string;
  name: string;
  type: string;
};

type ConnectionData = {
  inputs: number;
  outputs: number;
};

type AnalysisResult = {
  totalNodes: number;
  simpleNodes: NodeData[];
  moderateNodes: NodeData[];
  complexNodes: NodeData[];
  simplePrice: number;
  moderatePrice: number;
  complexPrice: number;
  totalPrice: number;
};

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Parse form with formidable
    const form = new IncomingForm()
    
    const { fields, files } = await new Promise<{ fields: any, files: any }>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err)
        resolve({ fields, files })
      })
    })

    const file = files.file
    
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' })
    }

    // Read file content
    const fileContent = fs.readFileSync(file.filepath, 'utf8')
    
    // Parse JSON
    const workflowData = JSON.parse(fileContent)
    
    // Analyze the workflow
    const analysisResults = analyzeWorkflow(workflowData)
    
    // Clean up temporary file
    fs.unlinkSync(file.filepath)
    
    // Return analysis results
    return res.status(200).json(analysisResults)
  } catch (error: any) {
    console.error('Error processing file:', error)
    return res.status(500).json({ message: 'Error processing file', error: error.message })
  }
}

function analyzeWorkflow(workflowData: any): AnalysisResult {
  // Extract nodes from Make.com or n8n format
  const nodes = extractNodes(workflowData)
  
  // Analyze connections
  const connections = analyzeConnections(workflowData)
  
  // Categorize nodes
  const simpleNodes: NodeData[] = []
  const moderateNodes: NodeData[] = []
  const complexNodes: NodeData[] = []
  
  nodes.forEach(node => {
    const category = categorizeNode(node, connections)
    
    if (category === 'Simple') {
      simpleNodes.push(node)
    } else if (category === 'Moderate') {
      moderateNodes.push(node)
    } else {
      complexNodes.push(node)
    }
  })
  
  // Calculate price
  const simplePrice = simpleNodes.length * 25
  const moderatePrice = moderateNodes.length * 50
  const complexPrice = complexNodes.length * 100
  const totalPrice = simplePrice + moderatePrice + complexPrice
  
  return {
    totalNodes: nodes.length,
    simpleNodes,
    moderateNodes,
    complexNodes,
    simplePrice,
    moderatePrice,
    complexPrice,
    totalPrice
  }
}

function extractNodes(workflowData: any): NodeData[] {
  // Handle either Make.com or n8n format
  if (workflowData.flow) {
    // Make.com format
    return workflowData.flow.map((node: any) => ({
      id: node.id,
      name: node.name || node.module,
      type: node.module,
    }))
  } else if (workflowData.nodes) {
    // n8n format
    return workflowData.nodes.map((node: any) => ({
      id: node.id,
      name: node.name,
      type: node.type,
    }))
  }
  
  return []
}

function analyzeConnections(workflowData: any): Record<string, ConnectionData> {
  const connections: Record<string, ConnectionData> = {}
  
  // Handle either Make.com or n8n format
  if (workflowData.flow) {
    // Make.com format - simplified for demo
    workflowData.flow.forEach((node: any) => {
      connections[node.id] = { inputs: 0, outputs: 0 }
    })
    
    // Count connections based on sequence in flow
    for (let i = 0; i < workflowData.flow.length; i++) {
      const currentNode = workflowData.flow[i]
      
      if (i > 0) {
        connections[currentNode.id].inputs++
      }
      
      if (i < workflowData.flow.length - 1) {
        connections[currentNode.id].outputs++
      }
    }
  } else if (workflowData.nodes && workflowData.connections) {
    // n8n format
    workflowData.nodes.forEach((node: any) => {
      connections[node.id] = { inputs: 0, outputs: 0 }
    })
    
    // Count connections based on connection map
    Object.keys(workflowData.connections).forEach(sourceNodeId => {
      const outputs = workflowData.connections[sourceNodeId].main || []
      
      outputs.forEach((outputConnections: any[]) => {
        outputConnections.forEach((connection: any) => {
          const targetNodeId = connection.node
          
          // Increment output count for source node
          connections[sourceNodeId].outputs++
          
          // Increment input count for target node
          if (connections[targetNodeId]) {
            connections[targetNodeId].inputs++
          }
        })
      })
    })
  }
  
  return connections
}

function categorizeNode(node: NodeData, connections: Record<string, ConnectionData>): 'Simple' | 'Moderate' | 'Complex' {
  const nodeType = node.type
  const nodeName = node.name || ''
  const nodeConnections = connections[node.id] || { inputs: 0, outputs: 0 }
  
  // Lists of node types for each category
  const complexNodeTypes = [
    'code', 'function', 'executeWorkflow', 'if', 'switch', 'cloudConvert', 'http:ActionSendData'
  ]
  
  const moderateNodeTypes = [
    'set', 'spreadsheetFile', 'googleSheets', 'merge', 'itemLists', 'webhook',
    'wait', 'splitInBatches', 'filter', 'executeDecision', 'util:FunctionSleep'
  ]
  
  // Complex name patterns
  const complexNamePatterns = [
    'ai', 'machine learning', 'transform video', 'generate video', 'convert', 'create'
  ]
  
  // Moderate name patterns
  const moderateNamePatterns = [
    'upload', 'download', 'fetch', 'process'
  ]
  
  // Check for complex node types
  if (complexNodeTypes.some(type => nodeType.toLowerCase().includes(type.toLowerCase()))) {
    return 'Complex'
  }
  
  // Check for complex name patterns
  if (complexNamePatterns.some(pattern => nodeName.toLowerCase().includes(pattern.toLowerCase()))) {
    return 'Complex'
  }
  
  // Many-to-many connections are complex
  if (nodeConnections.inputs >= 2 && nodeConnections.outputs >= 2) {
    return 'Complex'
  }
  
  // Check for moderate node types
  if (moderateNodeTypes.some(type => nodeType.toLowerCase().includes(type.toLowerCase()))) {
    return 'Moderate'
  }
  
  // Check for moderate name patterns
  if (moderateNamePatterns.some(pattern => nodeName.toLowerCase().includes(pattern.toLowerCase()))) {
    return 'Moderate'
  }
  
  // One-to-many or many-to-one connections
  if ((nodeConnections.inputs >= 2 && nodeConnections.outputs === 1) || 
      (nodeConnections.inputs === 1 && nodeConnections.outputs >= 2)) {
    return 'Moderate'
  }
  
  // Default to Simple
  return 'Simple'
}
