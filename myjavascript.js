console.log("Hello world");

var age = 15; //global variable
//for loop to count from one to ten

//JAVASCRIPT can access parts of the page using Document Object Model
function showRollover(rolloverid)
{
    var block = document.getElementById(rolloverid);
    block.style.backgroundColor = "purple";
    block.style.color = "black";
    block.style.visibility = 'visible';
}

function hideRollover(rolloverid)
{
    var block = document.getElementById(rolloverid);
    block.style.backgroundColor = "gray";
    block.style.color = "white";
    block.style.visibility = 'hidden';
}

function getAge()
{
   alert(age); 
   age = age + 1;
}

function checkAge()
{
    a = document.getElementById('age').value;
    a = parseInt(a);
    if ((a > 0) && (a < 100))
    {
        age = a;
    } else {
        alert("Value incorrect");
    }
    for (count=0; count<age; count++)
    {
        console.log(count);
    }
}

function encrypt()
{
    message = document.getElementById("message").value;
    alpha = 'abcdefghijklmnopqrstuvwxyz';
    /*

    */
    shift = 5;
    for (index=0; index<message.length; index++)
    {
        alert(message[index]);
        for (a = 0; a <26; a++)
        {
            
        } 
    }
}


