
import FooterStyle from "../scss/footer.module.scss"
const Footer = () => {
    return (
        <div className={FooterStyle["footer"]}>
            <p>Copyright by Murat Kaplan {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer