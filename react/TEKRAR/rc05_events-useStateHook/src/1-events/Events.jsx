const Events = () => {
    let message = "EVENTS"
    const handleClick = (e) => {
        alert("Hi")
        console.log(e);
        console.log(e.target);
    }

    const handleChange = (e) => {
        message = "STATE"
        console.log(e.target);
        console.log(message);
    }
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={handleClick}>Click</button>
            <button onClick={() => alert("Deneme")}>Save</button>
            <button onClick={handleChange}>Change</button>
        </div>
    )
}

export default Events