import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Head>
        <title>Baruch Real Estate - Nationwide Foreclosure Help</title>
      </Head>
      <Header />
      <main className="hero">
        <div className="container hero-inner">
          <h1>Nationwide Foreclosure Help — Real Options When You Need Them Most</h1>
          <p>We provide solutions for homeowners across the U.S. facing foreclosure, pre-auction deadlines, or financial hardship.</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="/contact">Get a Nationwide Cash Offer</a>
            <a className="btn btn-ghost" href="/options">Explore Your Options</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
