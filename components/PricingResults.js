import { useState, useEffect } from 'react'

export default function PricingResults({ analysisResults = null }) {
  // If analysisResults is provided, use those values, otherwise use default values
  const totalNodes = analysisResults ? analysisResults.totalNodes : 0;
  const simpleNodes = analysisResults ? analysisResults.simpleNodes : [];
  const moderateNodes = analysisResults ? analysisResults.moderateNodes : [];
  const complexNodes = analysisResults ? analysisResults.complexNodes : [];
  const totalPrice = analysisResults ? analysisResults.totalPrice : 0;

  const simpleNodesLength = simpleNodes.length || 0;
  const moderateNodesLength = moderateNodes.length || 0;
  const complexNodesLength = complexNodes.length || 0;
  
  const simpleNodesPercent = Math.round((simpleNodesLength / totalNodes) * 100) || 0;
  const moderateNodesPercent = Math.round((moderateNodesLength / totalNodes) * 100) || 0;
  const complexNodesPercent = Math.round((complexNodesLength / totalNodes) * 100) || 0;

  const [operationsPerMonth, setOperationsPerMonth] = useState('80000')
  const [activeScenariosCount, setActiveScenariosCount] = useState('5')
  const [makePlan, setMakePlan] = useState('pro')
  const [makeMonthlyCost, setMakeMonthlyCost] = useState(0)
  const [breakEvenMonths, setBreakEvenMonths] = useState(0)
  const [oneYearSavings, setOneYearSavings] = useState(0)

  // Calculate Make.com monthly cost based on plan and usage
  const getMakeMonthlyCost = () => {
    const operations = parseInt(operationsPerMonth)
    const scenarios = parseInt(activeScenariosCount)
    
    let baseCost = 0
    let opsIncluded = 0
    let additionalOpsCost = 0
    let scenariosIncluded = 0
    let additionalScenariosCost = 0
    
    // Set plan parameters
    switch(makePlan) {
      case 'core':
        baseCost = 9
        opsIncluded = 10000
        additionalOpsCost = 9  // per 10k additional ops
        scenariosIncluded = 2
        additionalScenariosCost = 5  // per additional scenario
        break
      case 'pro':
        baseCost = 16
        opsIncluded = 25000
        // Sliding scale - cost decreases as volume increases
        // For 80k ops (Pro plan), the cost is approximately $91
        if (operations <= 25000) {
          additionalOpsCost = 8  // per 10k additional ops for first tier
        } else if (operations <= 50000) {
          additionalOpsCost = 7.5  // slightly less per 10k for second tier
        } else if (operations <= 100000) {
          additionalOpsCost = 7  // even less per 10k for third tier
        } else {
          additionalOpsCost = 6.5  // lowest rate for highest volume
        }
        scenariosIncluded = 5
        additionalScenariosCost = 4  // per additional scenario
        break
      case 'team':
        baseCost = 29
        opsIncluded = 50000
        // Sliding scale - cost decreases as volume increases
        // For 80k ops (Team plan), the cost is approximately $172
        if (operations <= 50000) {
          additionalOpsCost = 7  // per 10k additional ops for first tier
        } else if (operations <= 100000) {
          additionalOpsCost = 6.5  // slightly less per 10k for second tier
        } else if (operations <= 200000) {
          additionalOpsCost = 6  // even less per 10k for third tier
        } else {
          additionalOpsCost = 5.5  // lowest rate for highest volume
        }
        scenariosIncluded = 15
        additionalScenariosCost = 3  // per additional scenario
        break
      case 'enterprise':
        // Updated Enterprise pricing with base cost of $199/month
        baseCost = 199
        opsIncluded = 200000
        additionalOpsCost = 6  // per 10k additional ops
        scenariosIncluded = 50
        additionalScenariosCost = 2  // per additional scenario
        break
      case 'enterprise-plus':
        // Adding Enterprise Plus tier at $499/month
        baseCost = 499
        opsIncluded = 600000
        additionalOpsCost = 5  // per 10k additional ops
        scenariosIncluded = 150
        additionalScenariosCost = 1.5  // per additional scenario
        break
      default:
        baseCost = 16
        opsIncluded = 25000
        additionalOpsCost = 8
        scenariosIncluded = 5
        additionalScenariosCost = 4
    }
    
    // Calculate additional operations cost
    const additionalOps = Math.max(0, operations - opsIncluded)
    const additionalOpsBlocks = Math.ceil(additionalOps / 10000)
    const totalAdditionalOpsCost = additionalOpsBlocks * additionalOpsCost
    
    // Calculate additional scenarios cost
    const additionalScenarios = Math.max(0, scenarios - scenariosIncluded)
    const totalAdditionalScenariosCost = additionalScenarios * additionalScenariosCost
    
    // Calculate total monthly cost
    return baseCost + totalAdditionalOpsCost + totalAdditionalScenariosCost
  }

  // Calculate breakeven point and savings
  const calculateBreakeven = () => {
    const monthlyMakeCost = getMakeMonthlyCost()
    setMakeMonthlyCost(monthlyMakeCost)
    
    const breakEven = Math.ceil(totalPrice / monthlyMakeCost)
    setBreakEvenMonths(breakEven)
    
    const savings = (monthlyMakeCost * 12) - totalPrice
    setOneYearSavings(savings)
  }

  // Set default values based on workflow size
  useEffect(() => {
    // Set default plan based on complexity
    if (totalNodes > 50) {
      setMakePlan('team')
    } else if (totalNodes > 20) {
      setMakePlan('pro') 
    } else {
      setMakePlan('core')
    }
    
    // Set default scenarios based on size
    if (totalNodes > 40) {
      setActiveScenariosCount('15')
    } else if (totalNodes > 20) {
      setActiveScenariosCount('5')
    } else {
      setActiveScenariosCount('2')
    }
    
    // Calculate initial values
    calculateBreakeven()
  }, [totalNodes])

  // Recalculate whenever inputs change
  useEffect(() => {
    calculateBreakeven()
  }, [operationsPerMonth, activeScenariosCount, makePlan])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Workflow Analysis Results</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="text-center">
          <div className="stats-circle bg-gray-100 mx-auto">
            {totalNodes}
          </div>
          <p className="mt-2 font-medium">Total Nodes</p>
        </div>
        
        <div className="text-center">
          <div className="stats-circle bg-green-100 mx-auto text-green-800">
            {simpleNodes.length}
          </div>
          <p className="mt-2 font-medium">Simple Nodes</p>
          <p className="text-sm text-gray-500">{simpleNodesPercent}%</p>
        </div>
        
        <div className="text-center">
          <div className="stats-circle bg-yellow-100 mx-auto text-yellow-800">
            {moderateNodes.length}
          </div>
          <p className="mt-2 font-medium">Moderate Nodes</p>
          <p className="text-sm text-gray-500">{moderateNodesPercent}%</p>
        </div>
        
        <div className="text-center">
          <div className="stats-circle bg-red-100 mx-auto text-red-800">
            {complexNodes.length}
          </div>
          <p className="mt-2 font-medium">Complex Nodes</p>
          <p className="text-sm text-gray-500">{complexNodesPercent}%</p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-xl font-bold mb-4">Node Breakdown</h3>
        
        {simpleNodes.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium flex items-center">
              <span className="price-badge price-badge-simple mr-2">$20 each</span>
              Simple Nodes
            </h4>
            <ul className="mt-2 pl-5 text-sm text-gray-700">
              {simpleNodes.map((node, index) => (
                <li key={`simple-${index}`} className="mb-1">
                  {node.name || `Node ${index + 1}`} ({node.type})
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {moderateNodes.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium flex items-center">
              <span className="price-badge price-badge-moderate mr-2">$25 each</span>
              Moderate Nodes
            </h4>
            <ul className="mt-2 pl-5 text-sm text-gray-700">
              {moderateNodes.map((node, index) => (
                <li key={`moderate-${index}`} className="mb-1">
                  {node.name || `Node ${index + 1}`} ({node.type})
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {complexNodes.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium flex items-center">
              <span className="price-badge price-badge-complex mr-2">$30 each</span>
              Complex Nodes
            </h4>
            <ul className="mt-2 pl-5 text-sm text-gray-700">
              {complexNodes.map((node, index) => (
                <li key={`complex-${index}`} className="mb-1">
                  {node.name || `Node ${index + 1}`} ({node.type})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-200 pt-6 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Total Estimated Cost</h3>
          <div className="text-3xl font-bold text-primary">${totalPrice}</div>
        </div>
        
        <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
          <h4 className="font-medium text-green-800 mb-2">Break-Even Analysis</h4>
          
          {/* Make.com pricing calculator */}
          <div className="mb-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Make.com Plan with 80k Operations/Month</h4>
              <p className="text-sm text-gray-600 mb-2">Pro Plan: $91/month</p>
              <p className="text-sm text-gray-600 mb-2">Teams Plan: $172/month</p>
              <input 
                type="hidden" 
                id="operationsPerMonth" 
                value={operationsPerMonth}
              />
            </div>
            
            <input type="hidden" id="activeScenariosCount" value={activeScenariosCount} />
            
            <input type="hidden" id="makePlan" value={makePlan} />
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Estimated Make.com monthly cost:</span>
              <span className="font-bold">
                ${makeMonthlyCost}
              </span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="font-medium">n8n self-hosted monthly cost:</span>
              <span className="font-bold">$0</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-700 mt-4">
            Based on your Make.com plan and usage, you'll break even in approximately:
            <span className="font-bold block mt-1">
              {breakEvenMonths} months
            </span>
            After that, you save <span className="font-bold">${oneYearSavings}</span> in the first year alone!
          </p>
        </div>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-2">Ready to convert your workflow?</h4>
          <p className="text-sm text-gray-700 mb-4">
            To proceed with the conversion, please email your Make.com JSON file to:
          </p>
          <a 
            href={`mailto:info@spotcircuit.com?subject=Make%20to%20n8n%20Conversion%20Request%20-%20${totalNodes}%20Nodes&body=Hello,%0A%0AI'd%20like%20to%20convert%20my%20Make.com%20workflow%20to%20n8n.%0A%0AWorkflow%20details:%0A-%20Total%20nodes:%20${totalNodes}%0A-%20Simple%20nodes:%20${simpleNodes.length}%0A-%20Moderate%20nodes:%20${moderateNodes.length}%0A-%20Complex%20nodes:%20${complexNodes.length}%0A-%20Estimated%20cost:%20$${totalPrice}%0A%0APlease%20let%20me%20know%20what%20other%20information%20you%20need%20to%20proceed%20with%20the%20conversion.%0A%0AThank%20you!`}
            className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-md transition-colors duration-200 font-medium"
          >
            info@spotcircuit.com
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Attached workflow file and contact details in your email
          </p>
        </div>
      </div>
    </div>
  )
}
