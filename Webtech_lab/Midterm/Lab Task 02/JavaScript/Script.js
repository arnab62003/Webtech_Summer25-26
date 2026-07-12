console.log("JS Connected");


let attempts = 0;
let lockTime = null;
let Username;
let Password;

function collect_data(){
    let IsvalidName=collect_name();
    let IsvalidPassword=collect_password();
    if(IsvalidName && IsvalidPassword){
        return login();
    }
    return false;
}

function collect_name(){

    let Username=document.getElementById("name").value;

    if(Username==""){
        document.getElementById("NameError").innerHTML="Name Can not be Empty";
        return false;
    }

    document.getElementById("NameError").innerHTML="";
    return true;
}


function collect_password(){

    let Password=document.getElementById("password").value;

    if(Password==""){
        document.getElementById("PasswordError").innerHTML="Password Can not be Empty";
        return false;
    }

    document.getElementById("PasswordError").innerHTML="";
    return true;
}

function login()
{

    let Username=document.getElementById("name").value;
    let Password=document.getElementById("password").value;

    console.log("Username:", Username);
    console.log("Password:", Password);
    console.log(Username == "AIUB", Password == "$_student");

    
    if(lockTime!=null)
    {
        let currentTime=Date.now();

        if(currentTime<lockTime)
        {
            document.getElementById("Message").innerHTML="Account Locked. Try after 5 minutes.";
            return false;
        }
        else
        {
            attempts=0;
            lockTime=null;
        }
    }

    
    if(Username=="AIUB" && Password=="$_student")
    {
        document.getElementById("Message").innerHTML="Successfully Logged In";

        attempts=0;

        return false;
    }

    
    attempts++;

    if(attempts==1)
    {
        document.getElementById("Message").innerHTML="You have 3 attempts left.";
    }
    else if(attempts==2)
    {
        document.getElementById("Message").innerHTML="You have 2 attempts left.";
    }
    else if(attempts>=3)
    {
        document.getElementById("Message").innerHTML="You have 1 attempt left. You are locked for 5 minutes.";

        lockTime=Date.now()+5*60*1000;
    }


    return false;
}

