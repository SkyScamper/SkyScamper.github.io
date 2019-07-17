var ListItems = document.getElementsByClassName("Header");
var Header = document.getElementById("Header");
for(var i = 0; i < ListItems.length; i++){
  function TheFunction(){
    if (ListItems[i].style.display === "none") {
      ListItems[i].style.display = "block";
    } else {
      ListItems[i].style.display = "none";
    }
  }
Header.addEventListener("click", TheFunction);
