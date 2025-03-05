export default function PricingResults({ analysisResults }) {
  const { totalNodes, simpleNodes, moderateNodes, complexNodes, totalPrice } = analysisResults

  const simpleNodesPercent = Math.round((simpleNodes.length / totalNodes) * 100) || 0
  const moderateNodesPercent = Math.round((moderateNodes.length / totalNodes) * 100) || 0
  const complexNodesPercent = Math.round((complexNodes.length / totalNodes) * 100) || 0

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
              <span className="price-badge price-badge-simple mr-2">$25 each</span>
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
              <span className="price-badge price-badge-moderate mr-2">$50 each</span>
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
              <span className="price-badge price-badge-complex mr-2">$100 each</span>
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
        
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-2">Ready to convert your workflow?</h4>
          <p className="text-sm text-gray-700 mb-4">
            To proceed with the conversion, please email your Make.com JSON file to:
          </p>
          <a 
            href="mailto:info@spotcircuit.com" 
            className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-md transition-colors duration-200 font-medium"
          >
            info@spotcircuit.com
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Please include your contact information and any special requirements
          </p>
        </div>
      </div>
    </div>
  )
}
