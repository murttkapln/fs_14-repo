import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";

const Content = () => {
    const photo = "https://cdn.pixabay.com/photo/2023/06/14/06/22/cat-8062388_640.jpg"
    const photo2 = "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_640.jpg"
  const parStyle = {
    fontFamily: "tahome",
    fontSize: "1.2rem",
    textAlign: "center",
    color: "crimson",
    fontWeight: "bolder",
  };
  const imgStyle = {
    borderRadious : "20px",
    width : "400px",
    cursor: "pointer",
    margin: "auto",
  }
  return (
    <main id="heading"
      style={{ backgroundColor: "black" }}
      className="text-success rounded-2"
    >
      <h2 style={{ color: "bisque", fontWeight: "bolder" }}>REACT JS</h2>
      <p style={parStyle}>React is JS Library</p>
      <img style={imgStyle} src={photo} alt="" />

      <img style={imgStyle} src={photo2} alt="" />

      <p className="cat" style={{ color: "yellowgreen" }}>
        React ile birlikte component yapı sayesinde HTML Js ve CSs üçü bir arada
        olan JSX yapısı sayesinde babel derlemesinin katkılarıyla verimlilik
        artmakta olup dinamizm artmıştır.
      </p>
      <h3 className="description">React ile herşey güzel olacak</h3>
    </main>
  );
};

export default Content;
