let form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent! (demo only)");
  });
}