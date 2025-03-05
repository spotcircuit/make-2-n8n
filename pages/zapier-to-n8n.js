import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function ZapierToN8n() {
  return (
    <Layout>
      <Head>
        <title>How to Convert Zapier to n8n | Coming Soon</title>
        <meta name="description" content="Our Zapier to n8n conversion service is coming soon. Get notified when our automated migration tool for converting Zapier zaps to n8n workflows is available." />
      </Head>

      <main>
        <div className="bg-gradient-to-b from-secondary-light/10 to-light py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary-light text-primary-dark text-sm font-semibold px-4 py-1 rounded-full mb-4">
                COMING SOON
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl md:text-6xl">
                <span className="block">Zapier to <span className="text-secondary">n8n</span> Conversion</span>
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
                We're currently developing our Zapier to n8n migration service and automated conversion tools
              </p>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-12">
              <svg className="w-24 h-24 mx-auto text-primary opacity-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Coming Soon</h2>
              <p className="mt-4 text-lg text-gray-600">
                We're working hard to bring you our Zapier to n8n conversion service. Sign up to be notified when it's ready!
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Why convert from Zapier to n8n?</h3>
              <ul className="text-left text-gray-600 space-y-2 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Save up to 80% on your automation costs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Run unlimited tasks without quota limits</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enhanced privacy with self-hosting options</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>More powerful workflow capabilities</span>
                </li>
              </ul>
              
              <div className="mb-6">
                <Link href="/#upload-section" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150">
                  Try Make.com Conversion Now
                </Link>
              </div>
              
              <p className="text-sm text-gray-500">
                In the meantime, you can try our Make.com to n8n conversion service, which is already available.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
