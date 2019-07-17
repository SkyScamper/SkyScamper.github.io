var ListItems = document.getElementsByClassName("Header");
for(var i = 0; i < ListItems.length; i++){
  function TheFunction(){
    var Header = document.getElementById("Header");
    if (ListItems[i].style.display === "none") {
      ListItems[i].style.display = "block";
    } else {
      ListItems[i].style.display = "none";
    }
  }
Header.addEventListener("click", TheFunction);
