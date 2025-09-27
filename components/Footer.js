export default function Footer(){ 
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} Baruch Real Estate. All rights reserved.</p>
        <div className="socials">
          <a href="#">Facebook</a> · <a href="#">Instagram</a> · <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
