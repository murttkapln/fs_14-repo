import logo from "../../img/logo.png"
import NavbarStyle from "./Navbar.module.scss"

const Navbar = () => {
  return (
    <div className={NavbarStyle["nav"]}>
        <img className={NavbarStyle["img"]} src={logo} alt="sun_logo" />
        <ul className={NavbarStyle["links"]}>
            <li><a href="#">horoscope</a></li>
            <li><a href="#">daily</a></li>
            <li><a href="#">tarot</a></li>
            <li><a href="#">article</a></li>
            <li><a href="#">contact</a></li>
            
        </ul>
    </div>
  )
}

export default Navbar