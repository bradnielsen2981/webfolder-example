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
