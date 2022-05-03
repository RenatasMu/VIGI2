
let btn = document.getElementById(btn_element);
function myFunction() {
    btn.addEventListener("click", myFunction);
  btn += 1;
  document.getElementById("btn_element").innerHTML = btn;
  return document.getElementById("btn-state").innerHTML = btn;
}
