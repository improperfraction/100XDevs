

function Props()
{
    return(
        <Greetings uname={"Mayur"}></Greetings>
    )
}

function Greetings(prop)
{
   // console.log(props.name);
    return(
        <div>Good morning, {prop.uname} </div>
    )
}

export default Props