console.log("Hello World");


function greet(firstane, lastname)
{
    console.log("Hello ", firstane, lastname);
}

greet("Mayur", "Shete")

function greetings(name, gender)
{
    if(gender=="male")
    {
        console.log("Hello ", name, "Sir");
    }
    else if(gender=="female")
    {
        console.log("Hello "+ name + "Madam");
    }

}

greetings("Rahul", "male");
greetings("Rohini", "female");

for(i=1; i<=10; i++)
{
    console.log(i);
}


const ages=[21, 22, 23, 24, 25];

for(let k of ages)
{
    if(k%2==0)
    {
        console.log(k);
    }
}

const users=[
    { name: "Mayur",
    gender: "male"
    },
    { name: "Abhi",
    gender: "male"
    },
    { name: "Nanda",
    gender: "female"
    },

];

for(let i in users)
{
    if(users[i]["gender"]=="male")
    {
        console.log(users[i]["name"]);
    }
}



let n=123;
let rem=0, rev=0;
while(n>0)
{
    rem=n%10;
    rev= rev*10 + rem;
    n=Math.floor(n/10);
}
console.log(rev);

function sum(num1, num2, callback)
{
    let result= num1+num2;
    display(result);
}

function display(data)
{
    console.log("result is ", data)
}

sum(1,2,display);

function displayresult(data)
{
    console.log("result is ", data)
}

function print1(num, callback)
{
    console.log(num);
    setTimeout(function(){
        callback();
    }, 1000);
}

function print()
{
    console.log(2);
}

print1(1, print);


