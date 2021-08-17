document.addEventListener("mousemove", function (event) {

  const x = event.pageX
  const y = event.pageY

  const target = document.querySelector(".card")
  const targetCoords = target.getBoundingClientRect()

  const targetX = targetCoords.left + (target.offsetWidth / 2)
  const targetY = targetCoords.top + (target.offsetHeight / 2)

  const angleX = (targetY - y) / 15
  const angleY = (targetX - x) / -15

  target.style.transform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)"
})


$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
  
  $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(97,114,169,0.2), rgba(170,151,26,0.2), rgba(213,93,22,0.2))');
});
