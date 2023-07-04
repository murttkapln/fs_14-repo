import HeaderStyle from "./Header.module.scss"

const Header = () => {
  return (
    <div className={HeaderStyle["header"]}>
        <span className={HeaderStyle["heading"]}>WHO ARE YOU?</span>
    </div>
  )
}

export default Header