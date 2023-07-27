let value = false;

function changeName(){
    

    if(value)
    {
        document.getElementsByClassName("container").innerHTML = "Hello, I'm Sanyam";
        value = !value;
    }else{
        document.getElementsByClassName("container").innerHTML = "Hello, I'm Nishant";
        value = !value;
    }
}
