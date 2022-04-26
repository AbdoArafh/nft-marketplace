import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search-icon.svg";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="blur"></div>
      <nav className="container navbar">
        <img src={Logo} alt="logo" />
        <div class="search">
          <img src={SearchIcon} alt="search-icon" />
          <input type="text" placeholder="Search items, collections and accounts" />
        </div>
        <ul className="links">
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Activity</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a className="btn-secondary" href="#">Account</a>
          </li>
          <li>
            <a className="btn-primary" href="#">Connect Wallet</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
