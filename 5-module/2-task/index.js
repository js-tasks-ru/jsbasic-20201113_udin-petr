function toggleText() {
 let btn = document.querySelector('.toggle-text-button');
 let textHidden = document.getElementById('text');
 btn.addEventListener("click", function() {
  textHidden.hidden = !textHidden.hidden;
 })
}
