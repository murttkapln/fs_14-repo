import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData } from "../helper/data"

const Home = () => {
  const [appoinments , setAppoinments ] = useState(appointmentData)
  // console.log(appoinments);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger fw-bold">CLARUS HOSPITAL</h1>
      <Doctors appoinments={appoinments} setAppoinments={setAppoinments} />
      <AppointmentList appoinments={appoinments}/>
    </main>
  )
}

export default Home
