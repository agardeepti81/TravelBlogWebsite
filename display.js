var selectedDiv = document.getElementById("text");
let table = document.createElement("table");
table.setAttribute("class","table");
let tr = document.createElement("tr");
let td1 = document.createElement("td");
td1.setAttribute("class","row table-success");
let td2 = document.createElement("td");
td2.setAttribute("class","row table-primary");
let td3 = document.createElement("td");
td3.setAttribute("class","row table-warning");
let td4 = document.createElement("td");
td4.setAttribute("class","row table-success");

let x = Object.keys(localStorage);
let myname = document.createElement("h4");
let myemail = document.createElement("h5");
let mytopic = document.createElement("h5");
let question = document.createElement("p");

x.forEach((key) => {
    switch(key){
        case "name":  myname.innerText = `Dear ${localStorage.getItem(key)},`;
        break;

        case "email": myemail.innerText = `on ${localStorage.getItem(key)}`;
        break;

        case "topic": mytopic.innerText = `Thank you for asking the question about ${localStorage.getItem(key)}`;
        break;

        case "question": question.innerText = `We will soon respond about your question, ${localStorage.getItem(key)}`;
        break;
    }
});

td1.appendChild(myname);
td2.appendChild(mytopic);
td3.appendChild(question);
td4.appendChild(myemail);
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
table.appendChild(tr);
selectedDiv.appendChild(table);