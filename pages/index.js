import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import FileUploader from '../components/FileUploader'
import PricingResults from '../components/PricingResults'
import TrustedBy from '../components/TrustedBy'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [analysisResults, setAnalysisResults] = useState(null)

  const handleFileSelect = async (file) => {
    setIsLoading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/analyze-workflow', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Error analyzing workflow')
      }

      const results = await response.json()
      setAnalysisResults(results)
    } catch (err) {
      console.error('Error:', err)
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <Head>
        <title>Convert Make.com to n8n | #1 Migration Service (Save 70%+)</title>
      </Head>
      <div className="bg-gradient-to-b from-secondary-light/10 to-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block bg-primary-light text-primary-dark text-sm font-semibold px-4 py-1 rounded-full mb-4">
              OFFICIALLY RECOGNIZED n8n MIGRATION PARTNER
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl md:text-6xl">
              <span className="block">Convert <span className="text-primary">Make.com</span> to <span className="text-secondary">n8n</span></span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 font-bold">Save 60-90% on Your Automation Costs</span>
            </h1>
            <p className="mt-5 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-6 md:text-xl md:max-w-3xl">
              Professional workflow migration service - upload your Make.com JSON file 
              for a free analysis and price estimate. 500+ workflows successfully converted.
            </p>
            <div className="mt-5 flex justify-center space-x-4">
              <a href="#upload-section" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150">
                Convert My Workflow
              </a>
              <a href="/pricing" className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150">
                View Pricing
              </a>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <TrustedBy />

          {/* Platform Conversion Options */}
          <div className="bg-white shadow rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-center mb-6">Convert Your Workflow From Any Platform</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 border rounded-lg hover:border-primary transition-colors duration-200">
                <h3 className="font-semibold">Make.com to n8n</h3>
                <p className="text-sm text-gray-600">Full workflow migration</p>
              </div>
              <div className="p-4 border rounded-lg hover:border-primary transition-colors duration-200">
                <h3 className="font-semibold">Integromat to n8n</h3>
                <p className="text-sm text-gray-600">Legacy format supported</p>
              </div>
              <div className="p-4 border rounded-lg hover:border-primary transition-colors duration-200">
                <h3 className="font-semibold">Zapier to n8n</h3>
                <p className="text-sm text-gray-600">Custom conversion</p>
              </div>
              <div className="p-4 border rounded-lg hover:border-primary transition-colors duration-200">
                <h3 className="font-semibold">Automate.io to n8n</h3>
                <p className="text-sm text-gray-600">Full API support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="upload-section" className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Get Your Free Conversion Analysis</h2>
            <p className="mt-2 text-lg text-gray-500">
              Upload your Make.com workflow JSON file to see exactly how much it would cost to convert
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Upload Your Make.com Workflow</h2>
            <FileUploader onFileSelect={handleFileSelect} />
            
            {isLoading && (
              <div className="text-center mt-6">
                <div className="inline-block animate-spin h-8 w-8 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <p className="mt-2 text-sm text-gray-500">Analyzing your workflow...</p>
              </div>
            )}
            
            {error && (
              <div className="mt-6 bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <p className="text-sm text-red-700 mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {analysisResults && (
            <PricingResults analysisResults={analysisResults} />
          )}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-primary text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Holistic Approach</h3>
          <p className="text-gray-600">
            Our pricing is based on the actual complexity of implementing each node, considering multiple factors beyond just connection patterns.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-primary text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Fast Estimates</h3>
          <p className="text-gray-600">
            Get an instant price estimate for your workflow conversion without waiting. Know exactly what to expect before committing.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-primary text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Professional Conversion</h3>
          <p className="text-gray-600">
            We handle the complex process of converting Make.com workflows to n8n format, ensuring efficient and reliable automation.
          </p>
        </div>
      </div>
    </Layout>
  )
}
