function newElementCB(){
//var name = "Test"; //or whatever you want, from another textbox for instance
var inputValue = document.getElementById("myInput").value;
//Create a new <li> dynamically
var li = document.createElement('li');
//Create checkbox dynamically       
var cb = document.createElement( "input" );
cb.type = "checkbox";
//cb.id = "c1";
cb.value = inputValue;
cb.checked = false;
//Append the checkbox to the li
li.appendChild(cb);
//Create the text node after the the checkbox
var text = document.createTextNode(inputValue);
//Append the text node to the <li>
li.appendChild(text);
//Append the <li> to the <ul>
var ul = document.getElementById("myList");
if (inputValue === '') {
    alert("You must write something!");
  } else {    
	ul.appendChild(li);
  }
document.getElementById("myInput").value = "";

}





