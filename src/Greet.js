function handleClick(e) {
    console.log("click event ")
}


function Greet({ name }) {
    return <p onClick={handleClick}>Hi, {name}, welcome to this practice sessio</p>;
}

export default Greet;