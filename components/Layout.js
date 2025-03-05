import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title = 'Make to n8n Converter', description = 'Convert your Make.com workflows to n8n format with our professional service' }) {
  return (
    <>
      <Head>
        <title>{`${title} | SpotCircuit`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}
