function todo()
{
    const titl= document.getElementById("title").value;
   const desc= document.getElementById("desc").value;
   let par=  document.getElementById("todos");
   par.appendChild(createtask(titl, desc))
}
function createtask(titl, desc)
{
    const task=  document.createElement("div");
    const tit=  document.createElement("div");
    tit.innerHTML= titl;
    const des=  document.createElement("div");
    des.innerHTML= desc;
    const bt= document.createElement("button");
    bt.innerHTML= "Mark as done";

    task.appendChild(tit);
    task.appendChild(des);
    task.appendChild(bt);

    return task;
}
const state=[

    {
        title: "Gym",
        desc: " Go to gym from 7 to 9pm"
    },
    {
        title: "cook",
        desc: " Cook from 8pm to 9pm"
    }
]

function updatetask(state)
{
    let par=  document.getElementById("todos");
    for(i=0; i<state.length; i++)
    {
        const newchild= createtask(state[i].title, state[i].desc);
        par.appendChild(newchild);
    }
}

updatetask(state);