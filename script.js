        
function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
      
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function checkdata()
{
    var principal = document.getElementById("principal").value;
    if (principal.value == 0)
    {
        alert("Enter a positive number");
        username.focus();
        return false;

    }
    if(principal.value < 0 )
    {
        alert("Enter a positive number");
        username.focus();
        return false;
    }
    return true;
}
