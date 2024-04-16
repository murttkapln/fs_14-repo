import Doctors from "../components/Doctors"
import AppointmentsList from "../components/AppointmentsList"
import { useState } from "react"
import { appointmentData } from "../helper/data"


const Home = () => {

    const [appointments, setAppointments] = useState(appointmentData)
    console.log(appointments);

    
    return (
        <main className="text-center mt-2">
            <h1 className="display-5 text-danger">GHOST HOSPITAL</h1>
            <Doctors  apps={appointments} setApps={setAppointments}/>
            <AppointmentsList apps = {appointments} />
        </main>
    )
}

export default Home