import { useState } from "react"
import UseStateCounter from "./UseStateCounter"


const UseStateOject = () => {
    // const [name, setName] = useState("Ahmet Can")
    // const [age, setAge] = useState(38)
    // const [salary, setSalary] = useState(50000)


    const [kisi, setKisi] = useState({
        name: "Ahmet Kan",
        age: 30,
        salary: 50000
    })

    const [toggle, setToggle] = useState(true)
    const handleToggle = () => {
        // toggle = !toggle
        setToggle(!toggle)
        if (toggle) {
            setKisi({
                name: "Canan Can",
                age: 40,
                salary: 60000
            })
        } else {
            setKisi({
                name: "Ahmet Can",
                age: 30,
                salary: 50000
            })
        }
    }
    return (
        <div>
            <h1>USE STATE OBJECT</h1>
            <h2>NAME:{kisi.name}</h2>
            <h2>AGE:{kisi.age}</h2>
            <h2>SALARY:{kisi.salary}</h2>

            <button onClick={() => setKisi({ ...kisi, name: "Mehmet Kan" })}>CHANGE NAME</button>
            <button onClick={() => setKisi({ ...kisi, age: kisi.age + 1 })}>INC AGE</button>
            <button onClick={() => setKisi({ ...kisi, salary: kisi.salary + 10000 })}>INC SALARY</button>
            <button onClick={() => setKisi({
                name: "Canan Can",
                age: 40,
                salary: 60000
            })}>FULL CHANGE</button>
            <button onClick={handleToggle}>TOGGLE</button>
            {/* {toggle && <textarea name="" id="" cols="30" rows="10"></textarea>} */}
            {toggle && <UseStateCounter />}

            {/* <h1>USE STATE OBJECT</h1>
            <h2>NAME:{name}</h2>
            <h2>AGE:{age}</h2>
            <h2>SALARY:{salary}</h2>

            <button onClick={() => setName("HAkko")}>CHANGE NAME</button>
            <button onClick={() => setAge(age + 1)}>INC AGE</button>
            <button onClick={() => setSalary(salary + 10000)}>INC SALARY</button> */}
        </div>
    )
}

export default UseStateOject