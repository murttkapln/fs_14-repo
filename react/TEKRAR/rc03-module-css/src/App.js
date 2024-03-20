

import Card from "./components/card/Card";
import data from "./data"

function App() {
  console.log(data);
  return (
    <>
      <h1>Languages</h1>

      {/* iterasyon */}

      {data.map(({ id, language, img, btnName }) => (

        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}

      {/*//? Birdem fazla statement kullanilacaksa o zaman  fonksiyonnun suslu ve return keyweodu kullanilanmasi gerekir.  */}
      {/* {data.map((item) => {
        const { id, language, img, btnName } = item
        return <Card key={id} lang={language} img={img} btn={btnName} />
      })} */}
    </>
  );
}

export default App;
