import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <div>
      <Header />
      <main className='container'>
        <h1>Contact Us</h1>
        <form action="https://formspree.io/f/{your_form_id}" method="POST">
          <input name="name" placeholder="Full name" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phone" placeholder="Phone number" />
          <input name="citystate" placeholder="City, State" />
          <textarea name="message" placeholder="Tell us about your situation"></textarea>
          <button type="submit">Send Message</button>
        </form>
        <p>We serve homeowners nationwide. Prefer a call? <strong>(555) 555-5555</strong></p>
      </main>
      <Footer />
    </div>
  )
}
