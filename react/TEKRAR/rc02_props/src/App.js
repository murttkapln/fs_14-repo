import Cat from "./components/Cat";


function App() {
  return (
    <div>
      <Cat
        name="Gollik"
        img="https://cdn.pixabay.com/photo/2024/02/16/19/22/green-parrot-8578205_640.jpg"
        color="grey"
      />
      <Cat
        name="Gudik"
        img="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
        color="black"
      />
      <Cat
        name="Tekir"
        img="https://cdn.pixabay.com/photo/2018/07/08/14/16/cat-3523992_640.jpg"
      />

    </div>
  );
}

export default App;
