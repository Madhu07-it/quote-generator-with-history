async function getQuote(){

const response=await fetch("http://localhost:5000/quotes/random");

const data=await response.json();

document.getElementById("quote").innerHTML=data.content;

document.getElementById("author").innerHTML="- "+data.author;

loadHistory();

}

async function loadHistory(){

const response=await fetch("http://localhost:5000/quotes/history");

const data=await response.json();

const history=document.getElementById("history");

history.innerHTML="";

data.forEach(q=>{

history.innerHTML+=`

<li>

"${q.content}"

<br>

<b>${q.author}</b>

</li>

`;

});

}

loadHistory();