import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const BASE_URL = "http://tutorial-api.fullstack.clarusway.com/tutorials/";
  const getTutorials = async () => {
    try {
      //   const res = await axios(BASE_URL)
      // setTutorials(res.data)
      const { data } = await axios(BASE_URL);
      setTutorials(data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(tutorials);

  useEffect(() => {
    getTutorials();
  }, []);
  return (
    <>
      <AddTutorial  getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
