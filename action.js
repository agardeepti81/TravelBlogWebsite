function passvalues(){
        window.localStorage.clear();
        let name = document.getElementById("Name").value;
        localStorage.setItem("name",name);
        let email = document.getElementById("Email").value;
        localStorage.setItem("email",email);
        let topic = document.getElementById("topics").value;
        localStorage.setItem("topic",topic);
        let question = document.getElementById("question").value;
        localStorage.setItem("question",question);
        if(topic == "choose" )
        {
            alert("Please choose a topic");
            window.location.assign("thingstodo.html");
        }
        return false;
}

