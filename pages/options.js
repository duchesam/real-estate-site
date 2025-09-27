import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Options(){
  return (
    <div>
      <Head><title>Options - Baruch Real Estate</title></Head>
      <Header />
      <main className="container options-page">
        <h1>Foreclosure & Auction Options Nationwide</h1>
        <ul>
          <li>2-Year Buyback – stay in your home with consistent income proof.</li>
          <li>70% Cash Offer – fair cash to walk away with funds immediately.</li>
          <li>Loan Review – analyze payoff & reinstatement letters to clarify equity.</li>
          <li>Auction Rescue – fast cash if your auction is days away.</li>
        </ul>
        <p>Have more questions? Visit our <Link href='/faq'><a>FAQ page</a></Link>.</p>
      </main>
      <Footer />
    </div>
  )
}
