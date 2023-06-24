import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css"

const Footer = () => {
  return (
    <div id="footer" className="bg-dark text-light rounded-pill">
        <pre>Copyright&copy; by Murat Kaplan {new Date().getFullYear()}</pre>
    </div>
  )
}

export default Footer