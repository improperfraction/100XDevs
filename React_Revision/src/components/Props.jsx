

function Props() {
    return (
        <>
            <Greetings uname={"Mayur"}></Greetings>
            <Greet uname={"Mayur"} ></Greet>
        </>
    )
}

function Greetings(prop) {
    // console.log(props.name);
    return (
        <div>Good morning, {prop.uname} </div>
    )
}

function Greet({uname}) {
    return (
        <>
            <div>Good afternoon, {uname} </div>
        </>
    )
}

export default Props