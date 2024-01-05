gsap.to("#nav", {
    backgroundColor:"#183153",
    duration: 0.5,
    delay: 1,
    height: "100px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      //markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  // code for goto top button 
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
   
  