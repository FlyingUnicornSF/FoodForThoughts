$(document).ready(function() {
  //navigation control

  var navisOpen = 0;
  function openNav() {
    document.getElementById("slideSidenav").style.width = "250px";
    document.getElementById("html-body").style.marginLeft = "250px";
  }

  function closeNav() {
    console.log("inclosed")
    document.getElementById("slideSidenav").style.width = "50px";
    document.getElementById("html-body").style.marginLeft= "50px";
  }
  
  $(document).on("click", "i.openNav", opencloseNav);
  
  function opencloseNav(){
    if (navisOpen === 0) {
      openNav();
      navisOpen = 1;
    } else {
      closeNav();
      navisOpen = 0;
    }
  }
//navigation from index html
  $(document).on("click", "input.go-btn", function(){
    var rout =  $(this).attr("rout") 
    var data = {redirectTo: rout}
    console.log(data)   
    window.location.href = data.redirectTo
  });

//navigation from nav bar 
  $(document).on("click", "i.a", function(){
    var rout =  $(this).attr("href") 
    var data = {redirectTo: href}
    console.log(data)   
    window.location.href = data.redirectTo
  });
  

}); // closing document ready