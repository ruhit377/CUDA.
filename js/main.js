/* ==================================================
 * Toggle hamburger menu
 * ==================================================
 */

function myFunction(x) {
    x.classList.toggle("change");
}



/* ==================================================
 * Cuda main js
 * ==================================================
 */

$(document).ready(function(){ // Make DOM and other elements ready
    
/* ==================================================
 * Preloader
 * ==================================================
 */
var ssPreloader = function () {
    $("html").addClass('ss-preload');
    $(window).on('load', function () {
        // force page scroll position to top at page refresh
        // $('html, body').animate({ scrollTop: 0 }, 'normal');
        // will first fade out the loading animation 
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });
        // for hero content animations 
        $("html").removeClass('ss-preload');
        $("html").addClass('ss-loaded');
    });
};
ssPreloader();
    
 /* ==================================================
  * Smooth Scroll
  * ==================================================
  */
 // Add smooth scrolling to all links
 $("a").on('click', function (event) {
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();
         // Store hash
         var hash = this.hash;
         // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
         $('html, body').animate({
             scrollTop: $(hash).offset().top
         }, 800, function () {
             // Add hash (#) to URL when done scrolling (default click behavior)
             window.location.hash = hash;
         });
     } // End if
 });
    
/* ==================================================
 * More Button
 * ==================================================
 */
$("#loadMore").on("click", function(event) {
  event.preventDefault();
  var category = $("button.active")[0].id;
  var $hiddenProjects = $(".project.hidden");
  if (category !== "all") {
    $hiddenProjects = $hiddenProjects.filter(function() {
    return $(this).data("cat") === category ;
  });
  }
  $hiddenProjects.slice(0,2).each(function() {
    $(this).hide().removeClass('hidden not-filter').show(500);
  });
});    
    
 /* ==================================================
  * Filtering Buttons
  * ==================================================
  */
 function filterPortfolio(event) {
     $("button.active").removeClass("active");
     $(this).addClass("active");
     var targetId = event.target.id;
     $(".work .project").not(".not-filter").each(function () {
         var $this = $(this);
         $this.addClass("hidden");
         if (targetId === $this.data("cat") || targetId === "all") {
             $this.removeClass("hidden");
         }
     });
 }
 $(".filter-buttons").on("click", "button", filterPortfolio);
    
 /* ==================================================
  * Pie Charts
  * ==================================================
  */
 $(".pie-chart").each(function () {
     var $pieChart = $(this);
     var percent = $pieChart.attr('data-percent');
     var $path = $pieChart.find('path');
     var pathLength = $path[0].getTotalLength();
     var offsetTo = pathLength * (percent / 100);

     $pieChart.attr('data-percent', 0);
     $path[0].style.strokeDashoffset = 0;

     $pieChart.one("inview", function (event) {
         $path.animate({
             'strokeDashoffset': offsetTo
         }, {
             duration: 2500,
             step: function (now) {
                 $pieChart.attr('data-percent', Math.round(now / pathLength * 100));
             }
         });
     });
 });  
    

    
/* ==================================================
 * Wow Animation
 * ==================================================
 */
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
  

    
    
});  //ready function bracket 











