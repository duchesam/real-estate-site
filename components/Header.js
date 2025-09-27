import Link from 'next/link'
export default function Header(){ 
  return (
    <header className="site-header">
      <div className="container nav-row">
        <div className="brand"><Link href='/'><a>Baruch Real Estate</a></Link></div>
        <nav className="nav">
          <Link href='/'><a>Home</a></Link>
          <Link href='/options'><a>Options</a></Link>
          <Link href='/services'><a>Services</a></Link>
          <Link href='/properties'><a>Properties</a></Link>
          <Link href='/faq'><a>FAQ</a></Link>
          <Link href='/contact'><a>Contact</a></Link>
        </nav>
        <a className="cta" href="/contact">Get Free Offer</a>
      </div>
    </header>
  )
}
