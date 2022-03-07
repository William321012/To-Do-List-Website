var list = document.querySelector('ul');
list.addEventListener('click', function(selected) {
  if (selected.target.tagName === 'LI') {
    selected.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var item = document.createElement("li");
  var inputValue = document.getElementById("inputField").value;
  var text = document.createTextNode(inputValue);
  item.appendChild(text);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("toDoContainer").appendChild(item);
  }
  document.getElementById("inputField").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  item.appendChild(span);

  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
