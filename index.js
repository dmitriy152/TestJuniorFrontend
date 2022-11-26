let header = document.querySelector("header")
window.onscroll = function ()
{
var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

if(scrollTop >= 680)
{
    header.classList.add("active")
}
else{
    header.classList.remove("active")
}
}
Fancybox.bind("[data-fancybox]", {
    Image: {
      zoom: true,
    },
  });