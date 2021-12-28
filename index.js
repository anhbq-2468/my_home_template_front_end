function handleMenu() {
  var menu = document.getElementById("menu-mobile");
  console.log(menu);
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  }
}
