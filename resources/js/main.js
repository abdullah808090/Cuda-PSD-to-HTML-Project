$(document).ready(function(){
    
    //STICKY MANU
    
    $(".js-services").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
           }  else{
            $("nav").removeClass("sticky"); 
           }
    });
    
    //active
    
    $('.active-btn').scrollWatchMapTo('nav ul li');
    
    
    //MIXITUP (PORTFOLIO SECTION)
    var mixer = mixitup('.container');
});


    //SMOOTH SCROLL IE/EDGE

    $('a').on('click',function(event){
        
        if(this.hash !=="") {
                event.preventDefault();
            
                var hash = this.hash;
            
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash =hash;
            });
           }
    });

//MOBILE MANU

function openNav(){
    document.getElementById("myNav").style.width="100%";
}
function closeNav(){
    document.getElementById("myNav").style.width="0%";
}