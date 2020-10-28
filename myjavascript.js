alert("Hello world");
console.log("Hello world");

var age = 15; //global variable

//JAVASCRIPT can access parts of the page using Document Object Model
function changeAlbert()
{
    var block = document.getElementById("albert");
    block.innerHTML = "<b>ALBERT HAS CHANGED!</b>";
    block.style.backgroundColor = "purple";
    block.style.color = "black";
    block.style.visibility = 'visible';
}

function changeAlbertBack()
{
    var block = document.getElementById("albert");
    block.innerHTML = "Show this section";
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
