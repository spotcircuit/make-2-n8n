import Layout from '../components/Layout'

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
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="pricing-card">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Simple Nodes</h3>
              <div className="text-4xl font-extrabold text-primary mb-4">$25</div>
              <p className="text-gray-500 mb-6">per node</p>
              
              <h4 className="font-medium text-gray-800 mb-2">Includes:</h4>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Basic trigger nodes
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Simple one-to-one connections
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Basic operations
                </li>
              </ul>
              
              <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
              <ul className="text-sm text-gray-600">
                <li>- Manual Triggers</li>
                <li>- Simple HTTP Requests</li>
                <li>- Basic Data Operations</li>
              </ul>
            </div>
            
            <div className="pricing-card border-secondary">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Moderate Nodes</h3>
              <div className="text-4xl font-extrabold text-secondary mb-4">$50</div>
              <p className="text-gray-500 mb-6">per node</p>
              
              <h4 className="font-medium text-gray-800 mb-2">Includes:</h4>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  External API integrations
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  One-to-many or many-to-one connections
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Data transformation tasks
                </li>
              </ul>
              
              <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
              <ul className="text-sm text-gray-600">
                <li>- File Upload/Download Operations</li>
                <li>- Transformations & Filters</li>
                <li>- Wait & Webhook Operations</li>
              </ul>
            </div>
            
            <div className="pricing-card border-dark">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Complex Nodes</h3>
              <div className="text-4xl font-extrabold text-dark mb-4">$100</div>
              <p className="text-gray-500 mb-6">per node</p>
              
              <h4 className="font-medium text-gray-800 mb-2">Includes:</h4>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom code implementation
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Many-to-many connections
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Advanced media processing
                </li>
              </ul>
              
              <h4 className="font-medium text-gray-800 mb-2">Examples:</h4>
              <ul className="text-sm text-gray-600">
                <li>- Custom Code & Functions</li>
                <li>- Complex Routing Logic</li>
                <li>- Media Conversion & AI Processing</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">How is the pricing calculated?</h3>
                    <p className="mt-2 text-gray-600">
                      We analyze your Make.com workflow and categorize each node based on its type, connection patterns, and implementation complexity. 
                      The total price is the sum of all node prices based on their category.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Do you offer discounts for larger workflows?</h3>
                    <p className="mt-2 text-gray-600">
                      Yes, for workflows with more than 20 nodes, we offer volume discounts. Please contact us for a custom quote.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">What if my workflow has node types you've never seen before?</h3>
                    <p className="mt-2 text-gray-600">
                      We can convert virtually any Make.com node to n8n. New node types may require custom development, 
                      which will be assessed and priced based on complexity.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">How long does the conversion process take?</h3>
                    <p className="mt-2 text-gray-600">
                      Most conversions are completed within 3-5 business days, depending on the complexity and size of your workflow.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">What if I'm not satisfied with the conversion?</h3>
                    <p className="mt-2 text-gray-600">
                      We offer a satisfaction guarantee. If your converted workflow doesn't function as expected, 
                      we'll fix the issues at no additional cost.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-center text-gray-600">
                  Have more questions? <a href="mailto:info@spotcircuit.com" className="text-primary font-medium">Contact us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
