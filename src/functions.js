import $ from "jquery";

function cardDelete() {
  $(".delete").on("click", function () {
    $(this).parent().hide();
  });
}
function addChild() {
  document.getElementById("cards").innerHTML += "<Person />";
}

function addParent() {
  alert("addParent");
}

export { cardDelete, addParent, addChild };
