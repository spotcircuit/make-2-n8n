import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About" description="Learn about our Make.com to n8n conversion service">
      <div className="bg-gradient-to-b from-secondary-light/10 to-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl">
              About Our Service
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Professional Make.com to n8n workflow conversion to help you migrate your automations.
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img className="h-full w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=600&q=80" alt="Automation" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Our Conversion Service?</h2>
                <p className="text-gray-600 mb-4">
                  As automation platforms evolve, many businesses are looking to migrate from Make.com to n8n to take advantage 
                  of its open-source nature, self-hosted options, and growing community.
                </p>
                <p className="text-gray-600 mb-4">
                  However, manually recreating complex workflows can be time-consuming and error-prone. Our conversion service 
                  saves you valuable time and ensures your workflows function correctly in the new environment.
                </p>
                <p className="text-gray-600">
                  With our expertise in both platforms, we can handle the technical aspects of the conversion, allowing you 
                  to focus on what matters most - growing your business.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Our Process</h2>
              <ol className="space-y-4 text-gray-600">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-white font-bold mr-3">1</div>
                  <div>
                    <p className="font-medium">Upload Your Make.com Workflow</p>
                    <p className="text-sm mt-1">Export your workflow from Make.com and upload it to our platform.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-white font-bold mr-3">2</div>
                  <div>
                    <p className="font-medium">Receive Your Price Estimate</p>
                    <p className="text-sm mt-1">Our system analyzes your workflow and provides a transparent price breakdown.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-white font-bold mr-3">3</div>
                  <div>
                    <p className="font-medium">Conversion Process</p>
                    <p className="text-sm mt-1">Our experts convert your workflow, preserving all functionality and connections.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary-light text-white font-bold mr-3">4</div>
                  <div>
                    <p className="font-medium">Delivery & Support</p>
                    <p className="text-sm mt-1">Receive your n8n workflow with documentation and post-conversion support.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-primary mb-4">Our Expertise</h2>
              
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Advanced Node Conversion</p>
                    <p className="text-sm mt-1">We handle complex nodes including HTTP requests, JSON transforms, routing, and custom functions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Media Processing Workflows</p>
                    <p className="text-sm mt-1">Specialized in converting media processing workflows including video creation, image manipulation, and audio processing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">AI Integration</p>
                    <p className="text-sm mt-1">Experience with AI service integrations including GPT models, Dante AI, D-ID, and other AI-driven services.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Custom Node Development</p>
                    <p className="text-sm mt-1">Ability to create custom n8n nodes when direct equivalents aren't available in the standard n8n library.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Upload Your Workflow Now
            </a>
            <p className="mt-3 text-sm text-gray-500">
              Or <a href="mailto:info@spotcircuit.com" className="text-primary font-medium">contact us</a> for more information
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
