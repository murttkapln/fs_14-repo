import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"


const Home = () => {

  const BASE_URL = "http://tutorial-api.fullstack.clarusway.com/tutorials/";

  const getTutorials = async ()=> {
    try {
    } catch (err) {
      
    }
  }
  return (
    <>
      <AddTutorial/>
      <TutorialList/>
    </>
  )
}

export default Home