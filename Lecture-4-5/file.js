let value = false;

function changeName(){
    

    if(value)
    {
        document.getElementById("container").innerHTML = "Hello, I'm Sanyam";
        value = !value;
    }else{
        document.getElementById("container").innerHTML = "Hello, I'm Nishant";
        value = !value;
    }
}
