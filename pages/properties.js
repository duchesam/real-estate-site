import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Properties(){ return (
  <div>
    <Header />
    <main className='container'>
      <h1>Nationwide Case Studies</h1>
      <ul>
        <li>California: Family avoided foreclosure with a 70% cash offer and walked away with $15,000.</li>
        <li>Texas: Homeowner used buyback to remain in their home while regaining stability.</li>
      </ul>
    </main>
    <Footer />
  </div>
) }
