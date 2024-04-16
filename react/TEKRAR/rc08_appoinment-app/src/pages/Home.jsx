import Doctors from "../components/Doctors"
import AppoinmentList from "../components/AppoinmentList"


const Home = () => {
    return (
        <main className="text-center mt-2">
            <h1 className="display-5 text-danger">GHOST HOSPITAL</h1>
            <Doctors />
            <AppoinmentList />
        </main>
    )
}

export default Home