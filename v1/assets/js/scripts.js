
window.onscroll = () => {
  var el = document.getElementById("navbar");

  if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
  {
    el.classList.add("opacity-none");
  }
  else
  {
    el.classList.remove("opacity-none");
  }
}