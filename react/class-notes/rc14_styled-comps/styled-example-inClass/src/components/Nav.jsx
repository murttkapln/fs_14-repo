import Button from "./styled/Button"
import NavStyled from "./styled/NavStyled"


const Nav = () => {
  return (
    <NavStyled>
        <div>
            <img src="./images/logo.png" style={{width:"250px"}} alt="logo" />
        </div>
        <div>
            <Button>Apply Course</Button>
            <Button primary>Talk To Adviser</Button>
        </div>

    </NavStyled>
  )
}

export default Nav