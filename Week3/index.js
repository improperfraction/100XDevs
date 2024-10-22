
const btn= document.getElementById("subbtn");
btn.addEventListener('click', changecolour)


document.getElementById("sum").addEventListener("click", mycal);
document.getElementById("reset").addEventListener("click", reset);

function debouncing()
{
    let timeout;
    clearTimeout(timeout);

    timeout= setTimeout(()=>{
        calsum();
    }, 1000);
}

function calsum()
{
    let num1, num2;
    const n1= document.getElementById("n1").value;
    const n2= document.getElementById("n2").value;
    if(n1!= "")
    {
         num1= parseInt(n1);
    }
    else
    {
        num1=0;
    }
    if(n2!= "")
    {
         num2= parseInt(n2);
    }
    else
    {
        num2=0;
    }
    console.log(num1);
    console.log(num2);

    const sum= num1+num2;
    document.getElementById("demo").innerHTML= sum
}

function mycal()
{
    const n1= parseInt(document.getElementById("n1").value, 10)
    const n2= parseInt(document.getElementById("n2").value, 10)
    const url= "https://sum-server.100xdevs.com/sum?a="+n1+"&b="+n2;
    console.log(url);

    fetch("http://localhost:3000/sum?a=2&b=3").then((response)=>{
        response.text().then((ans)=>{
            document.getElementById("demo").innerHTML= ans;
        })
    })

    
       
    // fetch(url).then((response)=>{
    //     console.log(response);
    //     document.getElementById("demo").innerHTML=response;
    // })
}

function reset()
{
    document.getElementById("demo").innerHTML= "";
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}
function myfunc()
{
    const formel= document.getElementById("f1");
    document.getElementById("demo").innerHTML= "found" + formel.length + "first name entered is: "+ formel.elements[0].value

}

function changecolour()
{
    document.getElementById("head").setAttribute("class", "demo");
}

function mdown(obj)
{
    const d= document.getElementById("box");
    d.style.backgroundColor="brown";
    d.style.color="white";
    d.innerHTML="release me";

}

function mout(obj)
{
    const d= document.getElementById("box");
    d.style.backgroundColor="grey";
    d.style.color="white" ;
    d.innerHTML=" click me";
}

function logCallerFunction(message) {
    try {
        // Create an error to get the stack trace
        const stack = new Error().stack;

        // Extract the calling function's information from the stack trace
        const callerLine = stack.split("\n")[2]; // The second line is the caller
        const functionNameMatch = callerLine.match(/at\s([^\s]+)/);
        const functionName = functionNameMatch ? functionNameMatch[1] : "unknown";

        // Log the calling function name and the message
        console.log(`Function: ${functionName}, Message: ${message}`);
    } catch (err) {
        console.error("Unable to retrieve function name", err);
    }
}

// Example usage
function exampleFunction() {
    logCallerFunction("This is a test message.");
}

exampleFunction();
