document.getElementById('btn').addEventListener('click', anim);

function ani()
{
    //calling promisified function
    fetch("https://fakerapi.it/api/v1/persons").then((response)=>{
        response.json().then((data)=>{
            console.log(data);
        })
    })
}

async function anim()
{
    const response= await fetch("https://fakerapi.it/api/v1/persons");
    const data= await response.json();
    console.log(data);
}


async function ani() {
    try {
      const response = await ("https://fakerapi.it/api/v1/persons") // response needs to awaited as its a promise
      const json = await response.json(); // need to convert to it json as original data is in json
      console.log(json.todo); // for given api, data is stored in data object hence json.data
    }
    catch (error) {
      console.error('Error:', error);
    }

  }

  async function aniaxios() {
    try {
      const response = await axios.get("https://fakerapi.it/api/v1/persons"); //In axios, you dont need to convert the response into json
      console.log(response.data.todo); // request details are present in response.data
    }
    catch (error) {
      console.error('Error:', error);
    }
  }

  async function postani() {
    try {
      const response = await fetch("https://fakerapi.it/api/v1/persons",
        {
          method: "POST", // Specify the request type like post, put, delete
          body: JSON.stringify({ // Convert JavaScript object to JSON string
            title: 'foo',
            body: 'bar',
            userId: 1
          }),
          headers: {
            'Content-Type': 'application/json' // We are sending JSON data
          }
        }
      )
      const result = await response.json();
    }
    catch (error) {
      console.error('Error:', error);
    }
  }

async function axipost()
{
  try {
    const response= await axios.post("https://fakerapi.it/api/v1/persons",
        {
          body: 'bar',
          userId: 1
        },
        {
          headers: {
              'Content-Type': 'application/json' // We are sending JSON data
          } 
        }
    );
    console.log(response.data);
  }
  catch(error)
  {
    console.log("Error:", error);
  }
}


  if(form.attr('data-onsubmit'))
  {
    var custom= new Function("onSuccess", "onError", "onComplete", "return"+ form.attr('data-onsubmit')+".call(this, onSuccess, onError, onComplete);");
    custom.call(form, onSuccess, onError, onComplete);
  }

  var afterhide= form.attr('data-afterhide');
  if(afterhide)
    {
        form.on("afterhide", function(){(new Function(afterhide)).apply(this, arguments)});
    }