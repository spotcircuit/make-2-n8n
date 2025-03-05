import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function MakeVsN8nComparison() {
  return (
    <Layout>
      <Head>
        <title>Make.com vs n8n: Complete 2025 Comparison (Cost, Features, Usability)</title>
        <meta name="description" content="Comprehensive comparison of Make.com vs n8n. Analyze pricing structures, features, usability, and integration options to find the best automation platform for your business." />
        
        {/* Article Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Make.com vs n8n: Complete 2025 Comparison (Cost, Features, Usability)",
              "description": "Comprehensive comparison of Make.com vs n8n. Analyze pricing structures, features, usability, and integration options to find the best automation platform for your business.",
              "image": "https://make-to-n8n.spotcircuit.com/images/make-vs-n8n-comparison.jpg",
              "author": {
                "@type": "Organization",
                "name": "SpotCircuit"
              },
              "publisher": {
                "@type": "Organization",
                "name": "SpotCircuit",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://make-to-n8n.spotcircuit.com/images/logo.png"
                }
              },
              "datePublished": "2025-03-05",
              "dateModified": "2025-03-05"
            })
          }}
        />
      </Head>

      <main>
        <div className="bg-gradient-to-b from-secondary-light/10 to-light py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary-light text-primary-dark text-sm font-semibold px-4 py-1 rounded-full mb-4">
                AUTOMATION PLATFORM COMPARISON
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl md:text-6xl">
                <span className="block">Make.com vs n8n</span>
                <span className="block text-2xl sm:text-3xl mt-2 font-bold">Complete 2025 Comparison</span>
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                Finding the right automation platform for your business needs
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-indigo mx-auto">
              <p className="lead">
                Choosing between Make.com (formerly Integromat) and n8n for your workflow automation needs? 
                This in-depth comparison examines pricing, features, usability, and integration capabilities 
                to help you make an informed decision for your business.
              </p>
              
              <div className="not-prose bg-gradient-to-r from-secondary-light/10 to-light p-6 rounded-lg my-8 border border-secondary/20">
                <h3 className="text-xl font-bold mb-4 text-center">n8n Advantages at a Glance</h3>
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Key Factor</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-primary">Make.com</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-secondary-dark">n8n <span className="text-xs font-normal text-green-600">(Recommended)</span></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Cost Efficiency</td>
                        <td className="px-4 py-3 text-sm text-gray-500">Costs increase with operation volume</td>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium bg-green-50">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Fixed pricing regardless of operation volume (60-90% savings)
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Self-Hosting</td>
                        <td className="px-4 py-3 text-sm text-gray-500">Cloud-only</td>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium bg-green-50">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Full self-hosting capability with complete data sovereignty
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Data Privacy</td>
                        <td className="px-4 py-3 text-sm text-gray-500">Data passes through third-party servers</td>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium bg-green-50">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Keep sensitive data within your infrastructure (GDPR/HIPAA compliant)
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Scalability</td>
                        <td className="px-4 py-3 text-sm text-gray-500">Limited by pricing tiers and operation limits</td>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium bg-green-50">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Unlimited operations with horizontal scaling options
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Vendor Lock-in</td>
                        <td className="px-4 py-3 text-sm text-gray-500">Proprietary platform with limited export options</td>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium bg-green-50">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Open-source with full workflow portability and ownership
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Customization</td>
                        <td className="px-4 py-3 text-sm text-gray-500">Limited to available nodes and configurations</td>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium bg-green-50">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1.5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Create custom nodes with JavaScript/TypeScript
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-gray-600 bg-yellow-50 p-3 rounded-md border-l-4 border-yellow-400">
                  <strong>Key Takeaway:</strong> For businesses with growing automation needs, n8n offers substantial cost advantages, greater control over data, and more flexibility than Make.com.
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Pricing Structure: Make.com vs n8n</h2>
              
              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-primary/10 p-4 border-b border-primary/20">
                    <h3 className="text-xl font-bold text-primary-dark flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.5a.5.5 0 01-.5.5.5.5 0 01-.5-.5V5a1 1 0 10-2 0v.5A2.5 2.5 0 018.5 8H12a1 1 0 100-2h-1.5a.5.5 0 01-.5-.5.5.5 0 01.5-.5H12a1 1 0 100-2h-2zm-2 4a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H6zm5 0a1 1 0 100 2h.01a1 1 0 100-2H11zm-1 3a1 1 0 011-1h.01a1 1 0 110 2H11a1 1 0 01-1-1zm3-1a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
                      </svg>
                      Make.com Pricing Model
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-4 text-gray-700">
                      Make.com uses an operation-based pricing model where costs scale based on:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Number of operations executed per month</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Number of active scenarios</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Data transfer volumes</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Additional features and team size</span>
                      </li>
                    </ul>
                    <div className="bg-gray-50 p-3 rounded-md border-l-4 border-primary/30 text-sm">
                      Make.com plans range from <span className="font-semibold">$9/month</span> for 10,000 operations and 2 active scenarios to <span className="font-semibold">$297+/month</span> for enterprise needs. As your automation usage grows, costs can increase significantly.
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-secondary overflow-hidden">
                  <div className="bg-secondary/10 p-4 border-b border-secondary/20">
                    <h3 className="text-xl font-bold text-secondary-dark flex items-center">
                      <svg className="w-5 h-5 mr-2 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      n8n Pricing Model
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="mb-4 text-gray-700">
                      n8n offers two distinct pricing approaches:
                    </p>
                    <ul className="space-y-3 mb-4">
                      <li className="flex items-start bg-green-50 p-3 rounded-md">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-bold text-gray-900 block">Self-Hosted (Open Source)</span>
                          <span className="text-green-700">Free to use with unlimited operations, scenarios, and users</span>
                        </div>
                      </li>
                      <li className="flex items-start bg-blue-50 p-3 rounded-md">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-bold text-gray-900 block">n8n Cloud</span>
                          <span className="text-blue-700">User-based pricing starting at $20/user/month with unlimited operations</span>
                        </div>
                      </li>
                    </ul>
                    <div className="bg-secondary-light/10 p-3 rounded-md border-l-4 border-secondary text-sm">
                      With n8n, your costs remain predictable regardless of how many operations you run. For businesses with high automation volumes, this can result in <span className="font-semibold text-secondary-dark">savings of 60-90%</span> compared to Make.com.
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Feature Comparison</h2>
              
              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {/* Make.com Features Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-primary/5 p-4 border-b border-primary/10">
                    <h3 className="text-xl font-bold text-primary-dark">
                      Make.com Features
                    </h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold">User-Friendly Interface:</span>
                          <span className="text-gray-600 block">Highly intuitive visual builder with excellent UX</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold">Template Library:</span>
                          <span className="text-gray-600 block">Extensive collection of pre-built workflow templates</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold">App Integrations:</span>
                          <span className="text-gray-600 block">1,000+ pre-built app integrations</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold">Error Handling:</span>
                          <span className="text-gray-600 block">Robust error management and retry options</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold">Data Storage:</span>
                          <span className="text-gray-600 block">Built-in data stores for simple database needs</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* n8n Features Card */}
                <div className="bg-white rounded-lg shadow-md border-2 border-secondary overflow-hidden relative">
                  <div className="absolute top-0 right-0">
                    <div className="bg-secondary text-white text-xs px-2 py-1 rounded-bl-md font-semibold">
                      RECOMMENDED
                    </div>
                  </div>
                  <div className="bg-secondary/10 p-4 border-b border-secondary/20">
                    <h3 className="text-xl font-bold text-secondary-dark">
                      n8n Standout Features
                    </h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold text-gray-800">Self-Hosting:</span>
                          <span className="text-gray-700 block">Complete control over your automation infrastructure</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold text-gray-800">Unlimited Operations:</span>
                          <span className="text-gray-700 block">No operation limits, even on free tier</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold text-gray-800">Advanced Customization:</span>
                          <span className="text-gray-700 block">Create custom nodes with JavaScript/TypeScript</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold text-gray-800">Webhook Debugging:</span>
                          <span className="text-gray-700 block">Built-in tools to test and debug webhook triggers</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold text-gray-800">Community Development:</span>
                          <span className="text-gray-700 block">Open-source with active community contributions</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <span className="font-semibold text-gray-800">Enterprise Scalability:</span>
                          <span className="text-gray-700 block">Horizontal scaling options for high-volume needs</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Usability and Learning Curve</h2>
              
              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-primary/5 p-4">
                    <h3 className="text-xl font-bold text-primary-dark">Make.com Usability</h3>
                  </div>
                  <div className="p-5">
                    <div className="prose-sm text-gray-700">
                      <p>
                        Make.com excels in user experience with its visually intuitive flow builder. New users can typically 
                        create basic workflows within minutes, and the platform provides excellent documentation and tutorials.
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        The visual approach makes it easy to understand workflow logic at a glance, though complex scenarios 
                        can become visually cluttered.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-secondary/10 p-4">
                    <h3 className="text-xl font-bold text-secondary-dark">n8n Usability</h3>
                  </div>
                  <div className="p-5">
                    <div className="prose-sm text-gray-700">
                      <p>
                        n8n features a node-based visual interface that's powerful but requires a slightly steeper learning curve 
                        than Make.com. The platform offers more flexibility and advanced capabilities, which naturally comes with 
                        increased complexity.
                      </p>
                      <div className="bg-green-50 p-3 rounded-md border-l-4 border-green-400 mt-3">
                        <span className="font-semibold text-green-800">Pro Tip:</span> 
                        <span className="text-green-700"> For technically-inclined users, n8n's approach allows for more precise control and customization. The learning investment pays off with significantly more powerful automation capabilities.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Integration Capabilities</h2>
              
              <div className="not-prose bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden my-8">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  {/* Make.com Integrations */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-primary-dark mb-4">Make.com Integrations</h3>
                    <div className="prose-sm text-gray-700">
                      <p>
                        With over 1,000 pre-built app integrations, Make.com offers one of the most extensive connector libraries 
                        in the industry. Most common business applications have dedicated integrations with field mapping and 
                        operation selection built in.
                      </p>
                      <p className="text-sm text-gray-500 mt-3">
                        For unsupported applications, Make.com provides HTTP modules to interact with any REST API.
                      </p>
                    </div>
                  </div>
                  
                  {/* n8n Integrations */}
                  <div className="p-5 bg-secondary/5">
                    <h3 className="text-xl font-bold text-secondary-dark mb-4">n8n Integrations</h3>
                    <div className="prose-sm text-gray-700">
                      <p>
                        n8n provides 700+ native integrations and is rapidly expanding its library. Where n8n truly shines is 
                        in its flexibility with custom integrations:
                      </p>
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Comprehensive HTTP nodes for connecting to any REST API</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Ability to create custom nodes for specialized integrations</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Community-contributed nodes for niche applications</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-secondary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Advanced webhook handling for complex trigger scenarios</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Data Privacy and Control</h2>
              
              <div className="not-prose bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6 my-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Make.com Column */}
                  <div className="flex-1 bg-white rounded-lg shadow-sm p-5">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-primary-dark">Make.com Data Handling</h3>
                    </div>
                    
                    <div className="prose-sm text-gray-700">
                      <p>
                        Make.com operates as a <span className="font-semibold">cloud-only SaaS platform</span>, meaning your workflow data and the data processed through 
                        your workflows must pass through their infrastructure.
                      </p>
                      <div className="flex items-start mt-4 text-amber-700 bg-amber-50 p-3 rounded-md border border-amber-200">
                        <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm m-0">Organizations with strict data sovereignty requirements may find this limiting, despite Make.com's security practices.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* n8n Column */}
                  <div className="flex-1 bg-white rounded-lg shadow-md border-2 border-secondary p-5 relative">
                    <div className="absolute top-0 right-0">
                      <div className="bg-secondary text-white text-xs px-3 py-1 rounded-bl-md font-semibold">
                        RECOMMENDED
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-secondary-dark">n8n Data Handling</h3>
                    </div>
                    
                    <div className="prose-sm text-gray-700">
                      <p>
                        n8n offers <span className="font-bold text-secondary-dark">complete data sovereignty</span> through its self-hosting option. For organizations with strict 
                        compliance requirements (like healthcare, finance, or government), self-hosted n8n allows you to keep 
                        all data within your own infrastructure boundaries.
                      </p>
                      
                      <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-400 mt-4">
                        <h4 className="text-green-800 font-semibold text-sm mb-1">Key Compliance Benefits:</h4>
                        <ul className="mt-2 space-y-1 text-green-700 text-sm">
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-600 mr-1 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>GDPR compliance for European operations</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-600 mr-1 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>HIPAA requirements for healthcare industry</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-600 mr-1 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Industry-specific regulatory requirements</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-600 mr-1 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Complete control over data storage and processing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Migration from Make.com to n8n</h2>
              
              <div className="not-prose bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden my-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                  {/* Challenges Column */}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Migration Challenges</h3>
                    </div>
                    
                    <div className="text-sm text-gray-700">
                      <p>
                        While Make.com and n8n have conceptual similarities, direct file conversion isn't natively supported. 
                        Common challenges include:
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span>Different node structures and naming conventions</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span>Mapping custom integration specifics</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span>Data transformation function differences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Our Solution Column */}
                  <div className="p-6 lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                        <svg className="w-6 h-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-secondary-dark">Our Professional Conversion Service</h3>
                    </div>
                    
                    <div className="text-sm text-gray-700 mb-6">
                      <p>
                        Our specialized <Link href="/make-to-n8n" className="text-secondary font-semibold hover:text-secondary-dark">Make.com to n8n conversion service</Link> handles the entire migration process, 
                        ensuring your workflows function identically after conversion. We handle everything from simple to complex workflows with a proven process:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                            <span className="font-bold text-gray-700">1</span>
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-1">Workflow Analysis</h4>
                          <p className="text-xs text-gray-600">We analyze your Make.com workflows and identify all conversion requirements</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                            <span className="font-bold text-gray-700">2</span>
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-1">Conversion & Testing</h4>
                          <p className="text-xs text-gray-600">Our experts convert your workflows and perform thorough testing</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                            <span className="font-bold text-gray-700">3</span>
                          </div>
                          <h4 className="font-semibold text-gray-800 mb-1">Deployment & Support</h4>
                          <p className="text-xs text-gray-600">We deploy your workflows and provide post-migration support</p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-md border border-green-100 mt-6">
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <span className="font-semibold text-green-800">Rapid ROI:</span>
                            <span className="text-green-700"> Most customers achieve return on investment within 2-6 months through subscription savings alone.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="not-prose bg-gradient-to-r from-secondary/20 to-primary/20 p-8 rounded-xl shadow-sm my-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Convert Your Make.com Workflows to n8n?</h3>
                    <p className="text-gray-700 mb-0 max-w-2xl">Get a free analysis and price estimate for your Make.com workflow conversion. No commitment required.</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="/#upload-section" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all duration-150 transform hover:-translate-y-1">
                      <span>Start Free Workflow Analysis</span>
                      <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion: Which Platform Is Right For You?</h2>
              
              <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {/* Make.com Column */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-primary/5 p-4 border-b border-primary/10">
                    <h3 className="text-xl font-bold text-primary-dark">Choose Make.com if:</h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">You prioritize ease of use over cost savings</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">You need access to their extensive template library</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Your automation needs are relatively simple and low-volume</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Your team strongly prefers a zero-learning-curve solution</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* n8n Column */}
                <div className="bg-white rounded-lg shadow-md border-2 border-secondary overflow-hidden relative">
                  <div className="absolute top-0 right-0">
                    <div className="bg-secondary text-white text-xs px-2 py-1 rounded-bl-md font-semibold">
                      RECOMMENDED
                    </div>
                  </div>
                  <div className="bg-secondary/10 p-4 border-b border-secondary/20">
                    <h3 className="text-xl font-bold text-secondary-dark">Choose n8n if:</h3>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-gray-800">You want to significantly reduce automation costs <span className="text-green-600 font-semibold">(60-90% savings)</span></span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-gray-800">You require self-hosting for data privacy or compliance reasons</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-gray-800">You need unlimited operations without cost concerns</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-gray-800">Your team values customization and advanced workflow capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-gray-800">You want to avoid vendor lock-in with an open-source solution</span>
                      </li>
                    </ul>
                    
                    <div className="mt-5 bg-green-50 p-3 rounded-md border border-green-100">
                      <div className="flex items-center text-green-800">
                        <svg className="w-5 h-5 text-green-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">n8n is the better choice for most businesses</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">Especially for those looking for cost-effective, scalable, and flexible automation solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-6 rounded-lg border border-secondary/20 my-8 shadow-sm">
                <div className="flex flex-col md:flex-row items-start gap-5">
                  <div className="flex-shrink-0 p-2 bg-secondary/10 rounded-full">
                    <svg className="w-8 h-8 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">The Bottom Line</h3>
                    <p className="text-gray-700 mb-4 text-lg">
                      For most businesses, especially those with growing automation needs, <span className="font-semibold text-secondary">n8n offers the better long-term 
                      value proposition</span> through cost savings, flexibility, and control.
                    </p>
                    
                    <div className="bg-white rounded-md p-4 border border-gray-200">
                      <p className="text-gray-700 mb-3">
                        If you're currently using Make.com and considering a switch, our <Link href="/#upload-section" className="text-primary hover:text-primary-dark font-medium underline">workflow conversion service</Link> can 
                        make the transition smooth and cost-effective.
                      </p>
                      <div className="flex justify-end">
                        <Link href="/#upload-section" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all duration-150 transform hover:-translate-y-0.5">
                          Get Started
                          <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
