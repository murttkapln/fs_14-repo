const Footer = () => {
  return (
    <div style={{ marginTop: "10rem" }}>
      <nav className="justify-content-center align-items-center bg-dark p-5 fixed-bottom">
        <h1 className="text-center text-info">Murat Kaplan</h1>
        <p className="text-light text-center fs-4">
          Copyright {new Date().getFullYear()}
        </p>
      </nav>
    </div>
  );
};

export default Footer;
