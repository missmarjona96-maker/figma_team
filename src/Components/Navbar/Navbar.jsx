import   './Navbar.css'

function Navbar() {
  return (
    <div>
      <h1>Durdona</h1>
      <div className='navbar'>
        <h1 className='navbar--title' >Weeb</h1>
        <div className='navbar_links'>
        <a className='navbar_links_link' href="#">About Us</a>
        <a className='navbar_links_link' href="#">Solutions</a>
        <a className='navbar_links_link' href="#">Pricing</a>
        <a className='navbar_links_link' href="#">Resources</a>
        </div>
        <div className='navbar_btn'>
          <button className='btn-login'>Log in</button>
          <button className='btn-join'>Join now</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
