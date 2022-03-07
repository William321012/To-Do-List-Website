//Checks to see if item as been clicked and toggles between checked and unchecked
var list = document.querySelector('ul');
list.addEventListener('click', function(selected) {
  if (selected.target.tagName === 'LI') {
    selected.target.classList.toggle('checked');
    //Plays audio when item is clicked
    var audio = new Audio('click.mp3');
    audio.play();
  }
}, false);

function newElement() {
  var item = document.createElement("li");
  var inputValue = document.getElementById("inputField").value;
  var text = document.createTextNode(inputValue);
  var space = " | ";

  // Checks empty and inserts item if not.
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    //Adds date to item
    var date = document.getElementById('dueDate').value;
    var dueDate = document.createTextNode(date);
    item.appendChild(dueDate);

    //Spaces out date from note
    var space = " | ";
    var spacer = document.createTextNode(space);
    item.appendChild(spacer);

    //Adds Note
    item.appendChild(text);
    document.getElementById("toDoContainer").appendChild(item);
  }
  document.getElementById("inputField").value = "";

  // Adds Color to indicate priority
  var color = document.getElementById('itemColor');
  var txtColor = color.options[color.selectedIndex].value;
  item.style.color = txtColor;

  // Adds the delete button
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  item.appendChild(span);

  //Hides list items that've been deleted
  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
