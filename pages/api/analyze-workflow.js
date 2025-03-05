import { IncomingForm } from 'formidable'
import fs from 'fs'
import path from 'path'

// Disable default body parser to handle file upload
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Parse form with formidable
    const form = new IncomingForm()
    
    const { fields, files } = await new Promise((resolve, reject) => {
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
  } catch (error) {
    console.error('Error processing file:', error)
    return res.status(500).json({ message: 'Error processing file', error: error.message })
  }
}

function analyzeWorkflow(workflowData) {
  // Extract nodes from Make.com or n8n format
  const nodes = extractNodes(workflowData)
  
  // Analyze connections
  const connections = analyzeConnections(workflowData)
  
  // Categorize nodes
  const simpleNodes = []
  const moderateNodes = []
  const complexNodes = []
  
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
  const simpleBasePrice = 20;
  const moderateBasePrice = 25;
  const complexBasePrice = 30;
  
  let simplePrice = 0;
  let moderatePrice = 0;
  let complexPrice = 0;
  
  // Apply volume discounts based on node count
  simpleNodes.forEach((node, index) => {
    if (index < 10) {
      simplePrice += simpleBasePrice;
    } else if (index < 30) {
      simplePrice += simpleBasePrice * 0.75;
    } else if (index < 50) {
      simplePrice += simpleBasePrice * 0.5;
    } else {
      simplePrice += simpleBasePrice * 0.3;
    }
  });
  
  moderateNodes.forEach((node, index) => {
    if (index < 10) {
      moderatePrice += moderateBasePrice;
    } else if (index < 30) {
      moderatePrice += moderateBasePrice * 0.75;
    } else if (index < 50) {
      moderatePrice += moderateBasePrice * 0.5;
    } else {
      moderatePrice += moderateBasePrice * 0.3;
    }
  });
  
  complexNodes.forEach((node, index) => {
    if (index < 10) {
      complexPrice += complexBasePrice;
    } else if (index < 30) {
      complexPrice += complexBasePrice * 0.75;
    } else if (index < 50) {
      complexPrice += complexBasePrice * 0.5;
    } else {
      complexPrice += complexBasePrice * 0.3;
    }
  });
  
  simplePrice = Math.round(simplePrice);
  moderatePrice = Math.round(moderatePrice);
  complexPrice = Math.round(complexPrice);
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

function extractNodes(workflowData) {
  // Handle either Make.com or n8n format
  if (workflowData.flow) {
    // Make.com format
    const allNodes = [];
    const seenIds = new Set();
    
    // Recursive function to collect all nodes from any structure
    function collectNodesRecursive(item) {
      // Skip if not an object or no id (not a node)
      if (!item || typeof item !== 'object' || !item.id) {
        return;
      }
      
      // Skip if we've seen this node already
      if (seenIds.has(item.id)) {
        return;
      }
      
      // Mark as seen and add to our list
      seenIds.add(item.id);
      allNodes.push({
        id: item.id,
        name: item.name || (item.metadata && item.metadata.designer && item.metadata.designer.name) || item.module,
        type: item.module,
      });
      
      // Check for routes
      if (item.routes && Array.isArray(item.routes)) {
        item.routes.forEach(route => {
          if (route.flow && Array.isArray(route.flow)) {
            route.flow.forEach(node => collectNodesRecursive(node));
          }
        });
      }
      
      // Check for error handlers
      if (item.onerror && Array.isArray(item.onerror)) {
        item.onerror.forEach(node => collectNodesRecursive(node));
      }
      
      // Check for iterate structures
      if (item.iterate && item.iterate.flow && Array.isArray(item.iterate.flow)) {
        item.iterate.flow.forEach(node => collectNodesRecursive(node));
      }
      
      // Check for exec structures
      if (item.exec && Array.isArray(item.exec)) {
        item.exec.forEach(node => collectNodesRecursive(node));
      }
    }
    
    // Process main flow
    const mainFlow = workflowData.flow || [];
    mainFlow.forEach(node => collectNodesRecursive(node));
    
    // Process top-level routes if any
    if (workflowData.routes && Array.isArray(workflowData.routes)) {
      workflowData.routes.forEach(route => {
        if (route.flow && Array.isArray(route.flow)) {
          route.flow.forEach(node => collectNodesRecursive(node));
        }
      });
    }
    
    console.log(`Total nodes found: ${allNodes.length}`);
    return allNodes;
  } else if (workflowData.nodes) {
    // n8n format
    return workflowData.nodes.map(node => ({
      id: node.id,
      name: node.name,
      type: node.type,
    }));
  }
  
  return [];
}

function analyzeConnections(workflowData) {
  const connections = {}
  
  // Handle either Make.com or n8n format
  if (workflowData.flow) {
    // Make.com format - initialize all node connections
    // First get all nodes using the same logic as extractNodes
    const allNodes = extractNodes(workflowData);
    
    // Initialize connection counts for all nodes
    allNodes.forEach(node => {
      connections[node.id] = { inputs: 0, outputs: 0 }
    });
    
    // For Make.com, we'll use a simplified approximation based on the main flow sequence
    // Note: This is a simplification and doesn't accurately reflect all connections
    if (workflowData.flow && workflowData.flow.length > 0) {
      // Count connections in the main flow
      for (let i = 0; i < workflowData.flow.length; i++) {
        const currentNode = workflowData.flow[i];
        
        if (i > 0) {
          connections[currentNode.id].inputs++;
        }
        
        if (i < workflowData.flow.length - 1) {
          connections[currentNode.id].outputs++;
        }
        
        // Handle router nodes specially
        if (currentNode.module === 'builtin:BasicRouter' && currentNode.routes && Array.isArray(currentNode.routes)) {
          // Each route is an output from the router
          connections[currentNode.id].outputs += currentNode.routes.length;
          
          // Each first node in a route receives an input from the router
          currentNode.routes.forEach(route => {
            if (route.flow && Array.isArray(route.flow) && route.flow.length > 0) {
              connections[route.flow[0].id].inputs++;
              
              // Count sequential connections within the route
              for (let j = 0; j < route.flow.length; j++) {
                if (j < route.flow.length - 1) {
                  connections[route.flow[j].id].outputs++;
                  connections[route.flow[j+1].id].inputs++;
                }
              }
            }
          });
        }
      }
    }
    
    // Handle top-level routes
    if (workflowData.routes && Array.isArray(workflowData.routes)) {
      workflowData.routes.forEach(route => {
        if (route.flow && Array.isArray(route.flow)) {
          // Count sequential connections within the route
          for (let j = 0; j < route.flow.length; j++) {
            if (j < route.flow.length - 1) {
              connections[route.flow[j].id].outputs++;
              connections[route.flow[j+1].id].inputs++;
            }
          }
        }
      });
    }
  } else if (workflowData.nodes && workflowData.connections) {
    // n8n format
    workflowData.nodes.forEach(node => {
      connections[node.id] = { inputs: 0, outputs: 0 }
    });
    
    // Count connections based on connection map
    Object.keys(workflowData.connections).forEach(sourceNodeId => {
      if (!workflowData.connections[sourceNodeId] || !workflowData.connections[sourceNodeId].main) {
        return; // Skip if no main outputs defined
      }
      
      const outputs = workflowData.connections[sourceNodeId].main || [];
      
      outputs.forEach(outputGroup => {
        if (Array.isArray(outputGroup)) {
          outputGroup.forEach(connection => {
            if (connection && connection.node) {
              // Increment output count for source node
              connections[sourceNodeId].outputs++;
              
              // Increment input count for target node
              if (connections[connection.node]) {
                connections[connection.node].inputs++;
              }
            }
          });
        }
      });
    });
  }
  
  return connections;
}

function categorizeNode(node, connections) {
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
