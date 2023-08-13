var typed = new Typed(".text", {
strings:  ["Brand new cars", "Sports cars", "Classic cars", "Customer's design cars"],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
})
function change_text() {
  document.getElementById("but").innerHTML = "Booked Successfully!";
}