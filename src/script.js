let progressBar = document.getElementById("progress-bar");
let height = document.documentElement.scrollHeight - window.innerHeight

document.addEventListener("scroll", event => {
  progressBar.style.width = (window.scrollY / height) * 100 + "%"
});
