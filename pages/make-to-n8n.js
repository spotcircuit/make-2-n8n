import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import FaqAccordion from '../components/FaqAccordion'
import { useState } from 'react'

export default function MakeToN8n() {
  const faqItems = [
    {
      question: "How much does it cost to convert from Make.com to n8n?",
      answer: "Our professional conversion service starts at $20 per node with volume discounts for larger workflows. Most customers achieve a complete return on investment within 2-6 months through subscription savings alone."
    },
    {
      question: "Can all Make.com workflows be converted to n8n?",
      answer: "Yes, nearly all Make.com workflows can be converted to n8n. Some specialized nodes may require custom implementation, but our service handles these complexities for you."
    },
    {
      question: "How long does the conversion process take?",
      answer: "Most workflow conversions are completed within 3-5 business days, depending on complexity. We offer expedited services for time-sensitive migrations."
    },
    {
      question: "Will my workflows function exactly the same after conversion?",
      answer: "Yes, our service guarantees functional equivalence. We thoroughly test all converted workflows to ensure they perform identically to your original Make.com implementation."
    },
    {
      question: "What Make.com node types can be converted to n8n?",
      answer: "Most Make.com node types have direct equivalents in n8n. Common conversions include HTTP to HTTP Request, Router to IF/Switch, JSON to JSON/Code nodes, Text Parser to Text nodes, and more. Our team handles specialized nodes that may require custom implementation."
    },
    {
      question: "Do I need technical skills to use your conversion service?",
      answer: "No technical skills are required. Our service handles the entire conversion process, delivers ready-to-use n8n workflows, and provides documentation for your team."
    },
    {
      question: "Can I run n8n on my own server?",
      answer: "Yes, n8n can be self-hosted on your own infrastructure. This gives you complete control over your data and workflows while eliminating subscription costs based on operation volume."
    },
    {
      question: "What happens if I need help after the conversion?",
      answer: "We provide 30 days of post-conversion support to ensure your workflows operate smoothly. Additional support packages are available for ongoing assistance."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>How to Convert Make.com to n8n | Step-by-Step Migration Guide</title>
        <meta name="description" content="Learn how to convert your Make.com (Integromat) workflows to n8n. Our comprehensive guide and professional conversion service make the transition easy and cost-effective." />
        
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqItems.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      </Head>

      <main>
        <div className="bg-gradient-to-b from-secondary-light/10 to-light py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary-light text-primary-dark text-sm font-semibold px-4 py-1 rounded-full mb-4">
                #1 MAKE.COM TO N8N MIGRATION SERVICE
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl md:text-6xl">
                <span className="block">How to Convert <span className="text-primary">Make.com</span> to <span className="text-secondary">n8n</span></span>
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                The complete guide to migrating your workflows and saving 60-90% on your automation costs
              </p>
            </div>
          </div>
        </div>

        <div className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-indigo mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <svg className="w-6 h-6 text-secondary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Why Convert from Make.com to n8n?
              </h2>
              <div className="bg-secondary-light/10 p-6 rounded-lg border-l-4 border-secondary mb-8">
                <p className="text-gray-700 mb-4">
                  Many businesses and automation professionals are switching from Make.com (formerly Integromat) to n8n 
                  for several compelling reasons:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-light p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 m-0">Cost Savings</h3>
                        <p className="m-0 text-sm">n8n's pricing model can save you 60-90% compared to Make.com's operation-based pricing.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-light p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 m-0">No Operation Limits</h3>
                        <p className="m-0 text-sm">Run unlimited operations without worrying about exceeding quotas or unexpected bills.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-light p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0117.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 m-0">Data Privacy</h3>
                        <p className="m-0 text-sm">Host n8n yourself and keep sensitive data within your infrastructure.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-primary-light p-2 rounded-full mr-3">
                        <svg className="h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0l4 4z" clipRule="evenodd" />
                      </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 m-0">Open Source</h3>
                        <p className="m-0 text-sm">Benefit from community-driven development and customization options.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 flex items-center">
                <svg className="w-6 h-6 text-secondary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Make.com to n8n Migration Options
              </h2>
              
              <div className="mb-8">
                <h3 className="relative pl-10 text-xl font-bold text-primary-dark mb-4">
                  <span className="absolute left-0 top-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
                    1
                  </span>
                  Option 1: Professional Conversion Service (Recommended)
                </h3>
                
                <div className="bg-gradient-to-r from-white to-primary-light/5 p-6 rounded-lg border-l-4 border-primary mb-6">
                  <p className="text-gray-700 mb-4">
                    Our professional conversion service handles the entire migration process for you:
                  </p>
                  
                  <div className="space-y-4 pl-2">
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                        <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Upload your Make.com workflow JSON file for a free analysis</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                        <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                      </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Receive a detailed conversion plan and quote</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                        <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Our experts convert your workflow to n8n format with guaranteed functionality</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 rounded-full p-1 mr-3 mt-0.5">
                        <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Receive comprehensive documentation and support for your new n8n workflow</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-white/80 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      </div>
                      <p className="ml-3 text-sm font-medium text-gray-900">
                        Over 500 workflows successfully converted with 100% satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link href="/#upload-section" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150">
                  Request Migration Analysis
                </Link>
              </div>
              
              <div className="my-12"></div>
              
              <h3 className="relative pl-10 text-xl font-bold text-primary-dark mb-4">
                <span className="absolute left-0 top-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
                  2
                </span>
                Option 2: DIY Conversion (Advanced Users)
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <p className="text-gray-700 mb-4">
                  For technical users who prefer to handle the conversion themselves:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-secondary-light text-secondary-dark font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 m-0">Export Make.com Workflow</h4>
                      <p className="text-sm text-gray-700 m-0">Download your workflow as a JSON file from Make.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-secondary-light text-secondary-dark font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 m-0">Study Node Equivalents</h4>
                      <p className="text-sm text-gray-700 m-0">Identify the n8n equivalents for each Make.com node</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-secondary-light text-secondary-dark font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 m-0">Recreate in n8n</h4>
                      <p className="text-sm text-gray-700 m-0">Manually recreate your workflow in n8n's workflow editor</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-secondary-light text-secondary-dark font-semibold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 m-0">Test and Refine</h4>
                      <p className="text-sm text-gray-700 m-0">Test your workflow thoroughly and make necessary adjustments</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center bg-yellow-50 p-3 rounded-md">
                    <svg className="h-5 w-5 text-yellow-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-gray-800 m-0">
                      <strong>Pro Tip:</strong> For complex workflows, our professional conversion service can save you significant time and ensure accurate results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-lg mt-12 mb-8 border-l-4 border-secondary shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-secondary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Make.com to n8n Node Mapping Reference
                </h3>
                <p className="text-gray-700 mb-4">Common node type equivalents between platforms:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="flex items-center bg-white p-2 rounded border border-gray-200">
                    <span className="font-medium text-gray-900 mr-2">Make.com HTTP:</span>
                    <span className="text-primary-dark">n8n HTTP Request</span>
                  </div>
                  <div className="flex items-center bg-white p-2 rounded border border-gray-200">
                    <span className="font-medium text-gray-900 mr-2">Make.com Router:</span>
                    <span className="text-primary-dark">n8n IF, Switch</span>
                  </div>
                  <div className="flex items-center bg-white p-2 rounded border border-gray-200">
                    <span className="font-medium text-gray-900 mr-2">Make.com JSON:</span>
                    <span className="text-primary-dark">n8n JSON, Code</span>
                  </div>
                  <div className="flex items-center bg-white p-2 rounded border border-gray-200">
                    <span className="font-medium text-gray-900 mr-2">Make.com Text Parser:</span>
                    <span className="text-primary-dark">n8n Text</span>
                  </div>
                  <div className="flex items-center bg-white p-2 rounded border border-gray-200">
                    <span className="font-medium text-gray-900 mr-2">Make.com Filter:</span>
                    <span className="text-primary-dark">n8n IF</span>
                  </div>
                  <div className="flex items-center bg-white p-2 rounded border border-gray-200">
                    <span className="font-medium text-gray-900 mr-2">Make.com Set Variable:</span>
                    <span className="text-primary-dark">n8n Set</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg my-10 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Real-World Conversion Example: AI Avatar Video Bot
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-gray-700">
                    We recently analyzed the conversion of a complex "Ultimate AI Avatar Video Bot" workflow that generates 
                    AI videos using multiple APIs. Our converter successfully mapped these Make.com nodes to n8n:
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                  <div className="flex items-start bg-primary-light/10 p-3 rounded">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-1 mr-2">
                      <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">placeholder:Placeholder</span>
                      <div className="flex items-center mt-1">
                        <svg className="h-3 w-3 text-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-primary-dark">n8n-nodes-base.manualTrigger</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start bg-primary-light/10 p-3 rounded">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-1 mr-2">
                      <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">util:SetVariable2</span>
                      <div className="flex items-center mt-1">
                        <svg className="h-3 w-3 text-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-primary-dark">n8n-nodes-base.code</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start bg-primary-light/10 p-3 rounded">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-1 mr-2">
                      <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">http:ActionSendData</span>
                      <div className="flex items-center mt-1">
                        <svg className="h-3 w-3 text-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-primary-dark">n8n-nodes-base.httpRequest</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start bg-primary-light/10 p-3 rounded">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-1 mr-2">
                      <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">json:TransformToJSON</span>
                      <div className="flex items-center mt-1">
                        <svg className="h-3 w-3 text-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-primary-dark">n8n JSON node</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start bg-primary-light/10 p-3 rounded">
                    <div className="flex-shrink-0 bg-primary/10 rounded-full p-1 mr-2">
                      <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">builtin:BasicRouter</span>
                      <div className="flex items-center mt-1">
                        <svg className="h-3 w-3 text-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-primary-dark">n8n workflow control nodes</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      For specialized nodes like CloudConvert, Cloudinary, and social media integrations, our team implemented 
                      custom node converters to ensure complete functionality in the n8n environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-lg mt-16 mb-10 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className="bg-secondary/10 p-2 rounded-full mr-3">
                    <svg className="w-6 h-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <FaqAccordion faqs={faqItems} />
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-light/30 to-white p-8 rounded-lg mt-16 mb-6 border border-primary-light/40 shadow-sm text-center">
                <h2 className="text-2xl font-bold text-primary-dark mb-4">Ready to Convert Your Make.com Workflows to n8n?</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                  Start saving on your automation costs today by migrating from Make.com to n8n. 
                  Our professional conversion service makes the transition seamless and provides 
                  long-term cost benefits for your business.
                </p>

                <div className="not-prose">
                  <Link href="/#upload-section" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:scale-105">
                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Convert My Make.com Workflows
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
