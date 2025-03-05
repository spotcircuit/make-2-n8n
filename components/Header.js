import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-2xl font-bold text-primary">SpotCircuit</span>
              </Link>
            </div>
            <nav className="ml-6 flex space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-primary text-sm font-medium">
                Make to n8n Converter
              </Link>
              <Link href="/pricing" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Pricing
              </Link>
              <Link href="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <a 
              href="mailto:info@spotcircuit.com" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
