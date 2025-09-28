import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Options(){
  return (
    <div>
      <Head><title>Options — Baruch Real Estate</title></Head>
      <Header />
      <main className="container narrow">
        <h1>Foreclosure & Auction Options</h1>
        <p>Every homeowner’s situation is unique. We provide two primary paths nationwide:</p>
        <div className="grid-2">
          <div className="card">
            <h3>2-Year Buyback</h3>
            <ul>
              <li>Stay in your home and work toward repurchasing.</li>
              <li>Requires consistent, documented income.</li>
              <li>Often not realistic if interest rate &gt; 5% or loan-to-value &gt; 70%.</li>
            </ul>
          </div>
          <div className="card">
            <h3>70% Cash Offer</h3>
            <ul>
              <li>A fair offer (≈70% of market value) with quick closing.</li>
              <li>No commissions or hidden fees.</li>
              <li>Best when auction is close and time is limited.</li>
            </ul>
          </div>
        </div>

        <div className="card info">
          <h4>Documents we’ll ask for</h4>
          <p>To see your true equity and options, please request these from your lender:</p>
          <ul>
            <li><strong>Payoff letter</strong> — total balance required to pay off the loan.</li>
            <li><strong>Reinstatement letter</strong> — amount required to bring the loan current.</li>
          </ul>
        </div>

        <p>More questions? Read our <Link href="/faq">FAQ</Link>.</p>
      </main>
      <Footer />
    </div>
  )
}
