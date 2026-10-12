import { Link } from "react-router-dom";
import './Header.css'
function Header(){
    return(
      <div className="header">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/service">Service</Link>
      </div>
    )

}

export default Header;