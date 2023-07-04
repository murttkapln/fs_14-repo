import logo from "../../img/logo.png"

const Navbar = () => {
  return (
    <div>
        <img src={logo} alt="sun_logo" />
        <ul>
            <li>horoscope</li>
            <li>daily</li>
            <li>tarot</li>
            <li>article</li>
            <li>contact</li>
        </ul>
    </div>
  )
}

export default Navbar