var selectedDiv = document.getElementById("text");
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
    }
});
selectedDiv.appendChild(myname);
selectedDiv.appendChild(mytopic);
selectedDiv.appendChild(question);
selectedDiv.appendChild(myemail);