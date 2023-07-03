import Card from "./components/Card";
import data from "./data";

function App() {
  console.log(data);
  return (
    <div>
      {data.map(({id, language, img, btnName}) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}
    </div>
  );
}

export default App;
