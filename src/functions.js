import $ from "jquery";

function cardDelete() {
  $(".delete").on("click", function () {
    $(this).parent().fadeOut(300);
  });
}
function addChild() {
  alert("addChild");
}

function addParent() {
  alert("addParent");
}

export { cardDelete, addParent, addChild };
