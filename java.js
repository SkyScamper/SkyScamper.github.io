function TheFunction(){
  var Header = document.getElementById("Header");
  if (Header.style.display === "none") {
    Header.style.display = "block";
  } else {
    Header.style.display = "none";
  }
}
ListItems.addEventListener("click", TheFunction);
