import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services(){ return (
  <div>
    <Header />
    <main className='container'>
      <h1>Nationwide Services</h1>
      <ul>
        <li>Stopping foreclosure auctions across all U.S. states</li>
        <li>Providing cash offers with no commissions or hidden fees</li>
        <li>Reviewing payoff and reinstatement letters from any lender</li>
        <li>Guidance through buyback, modification, or exit strategies</li>
      </ul>
    </main>
    <Footer />
  </div>
) }
