function newElementCB(){
var inputValue = document.getElementById("myInput").value;
//Create a new <li> dynamically
var li = document.createElement('li');
//Create checkbox dynamically       
var cb = document.createElement( "input" );
cb.type = "checkbox";
cb.onchange = changeStatus;
cb.value = inputValue;
cb.checked = false;
//Append the checkbox to the li
li.appendChild(cb);
//Create the text node after the the checkbox
var text = document.createElement("span");
    text.innerText = inputValue;
//Append the text node to the <li>
    li.appendChild(text);
    li.className = "c1";
//Append the <li> to the <ul>
var ul = document.getElementById("myList");
if (inputValue === '') {
    alert("You must write something!");
  } else {    
	ul.appendChild(li);
  }
document.getElementById("myInput").value = "";

}



function changeStatus(event) {
    var cb = event.target;
    if (cb.checked == true) {
        var line = cb.parentElement;
        console.log(line);
        var ul = document.getElementById("myList");
        ul.removeChild(line);

        //Creat a new li at the end of list
        line.className = "c2";
        ul.appendChild(line);
              
    } else {
        var line = cb.parentElement;
        console.log(line);
        var ul = document.getElementById("myList");
        ul.removeChild(line);

        //Creat a new li at the bigining of the list
        line.className = "c1";
        ul.insertBefore(line, ul.firstChild);        
  }
}



