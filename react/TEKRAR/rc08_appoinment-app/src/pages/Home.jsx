import Doctors from "../components/Doctors"
import AppoinmentList from "../components/AppoinmentList"
import { useState } from "react"
import { appointmentData } from "../helper/data"


const Home = () => {

    const [appoinmets, setAppoinments] = useState(appointmentData)
    console.log(appoinmets);

    
    return (
        <main className="text-center mt-2">
            <h1 className="display-5 text-danger">GHOST HOSPITAL</h1>
            <Doctors />
            <AppoinmentList apps = {appoinmets} />
        </main>
    )
}

export default Home