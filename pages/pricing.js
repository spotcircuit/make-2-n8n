import Layout from '../components/Layout'
import StandalonePricingCalculator from '../components/StandalonePricingCalculator'

export default function Pricing() {
  return (
    <Layout title="Pricing" description="Our pricing for converting Make.com workflows to n8n format">
      <div className="bg-gradient-to-b from-secondary-light/10 to-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              Transparent Pricing
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Our pricing is based on the complexity of each node in your Make.com workflow.
              <span className="block mt-2 text-primary font-semibold">Most customers break even in just 2-3 months!</span>
            </p>
          </div>

          {/* Pricing Calculator */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-6">Calculate Your Savings</h2>
            <p className="text-center mb-8">Use our interactive calculator to estimate your conversion cost and potential savings</p>
            <StandalonePricingCalculator />
          </div>

          {/* Why Convert */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mb-16">
            <h2 className="text-xl font-bold mb-4">Why Convert to n8n?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-lg text-primary mb-2">Financial Benefits</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Quick Break-Even: Stop paying monthly subscription fees</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Long-Term Savings: One-time payment vs. forever fees</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Predictable Costs: No surprise billing or price increases</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg text-primary mb-2">Technical Advantages</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Self-Hosted Control: Complete control over your data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No Execution Limits: Run unlimited operations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Open Source Future-Proofing: Never lose access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">Convert Make.com to n8n Pricing</h1>
            
            <div className="bg-white shadow-md rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-semibold mb-4">Why Convert to n8n?</h2>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Lower operating costs - no per-operation pricing</li>
                <li>Full control over your automation infrastructure</li>
                <li>Self-hosted option for enhanced security and compliance</li>
                <li>Robust open-source platform with active development</li>
                <li>Seamless migration without disrupting your workflows</li>
              </ul>
            </div>
            
            <h2 className="text-3xl font-semibold text-center mb-8">Pricing Model</h2>
            
            <div className="bg-white shadow-md rounded-lg p-6 mb-10">
              <h3 className="text-xl font-semibold mb-4">Our Volume Discount Pricing</h3>
              <p className="mb-4">We use a node-based pricing model with built-in volume discounts for larger workflows:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b">Node Count</th>
                      <th className="py-2 px-4 border-b">Discount Level</th>
                      <th className="py-2 px-4 border-b">Simple Node</th>
                      <th className="py-2 px-4 border-b">Moderate Node</th>
                      <th className="py-2 px-4 border-b">Complex Node</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">First 10 nodes</td>
                      <td className="py-2 px-4 border-b">Standard price</td>
                      <td className="py-2 px-4 border-b">$20</td>
                      <td className="py-2 px-4 border-b">$25</td>
                      <td className="py-2 px-4 border-b">$30</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Nodes 11-30</td>
                      <td className="py-2 px-4 border-b">25% discount</td>
                      <td className="py-2 px-4 border-b">$15</td>
                      <td className="py-2 px-4 border-b">$18.75</td>
                      <td className="py-2 px-4 border-b">$22.50</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Nodes 31-50</td>
                      <td className="py-2 px-4 border-b">50% discount</td>
                      <td className="py-2 px-4 border-b">$10</td>
                      <td className="py-2 px-4 border-b">$12.50</td>
                      <td className="py-2 px-4 border-b">$15</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Nodes 51+</td>
                      <td className="py-2 px-4 border-b">70% discount</td>
                      <td className="py-2 px-4 border-b">$6</td>
                      <td className="py-2 px-4 border-b">$7.50</td>
                      <td className="py-2 px-4 border-b">$9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <div className="bg-white shadow-md rounded-lg p-6 flex-1">
                <h3 className="text-xl font-semibold text-center mb-4">Simple</h3>
                <p className="text-4xl font-bold text-center mb-4">$20<span className="text-lg font-normal">/node</span></p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Basic HTTP requests</li>
                  <li>Simple data transformations</li>
                  <li>Low-complexity integrations</li>
                  <li>Standard triggers</li>
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 flex-1 border-2 border-blue-500">
                <div className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs inline-block mb-2">MOST POPULAR</div>
                <h3 className="text-xl font-semibold text-center mb-4">Moderate</h3>
                <p className="text-4xl font-bold text-center mb-4">$25<span className="text-lg font-normal">/node</span></p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>API integrations</li>
                  <li>Moderate data processing</li>
                  <li>File handling operations</li>
                  <li>Custom webhooks</li>
                </ul>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 flex-1">
                <h3 className="text-xl font-semibold text-center mb-4">Complex</h3>
                <p className="text-4xl font-bold text-center mb-4">$30<span className="text-lg font-normal">/node</span></p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Advanced API integrations</li>
                  <li>Complex data transformations</li>
                  <li>Custom business logic</li>
                  <li>OAuth and authentication</li>
                </ul>
              </div>
            </div>
            

            
            <div className="mb-12 mt-16 bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-center mb-6">Need a Custom Quote?</h2>
              <p className="text-center mb-4">Upload your Make.com workflow JSON to get a precise quote based on your specific workflow</p>
              <a href="/analyze" className="block w-full max-w-xs mx-auto text-center bg-primary hover:bg-primary-dark text-white py-3 px-4 rounded-md transition-colors duration-200 font-medium">
                Analyze My Workflow
              </a>
            </div>
            
            <div className="text-center text-gray-600 text-sm">
              <p>Pricing is based on the complexity and number of nodes in your Make.com workflow.</p>
              <p className="mt-2">For enterprise conversions or custom requirements, please contact us directly.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
