

$(document).ready(function(){
    $("#loading").fadeOut(1000);
 
})




$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    
    if(scrollTop > 1200){
        $("#btnUp").fadeIn(500);
    }
    else{
        $("#btnUp").fadeOut(500);

    }
    
    /*if(scrollTop >= $("nav").offset().top){
        $("nav").addClass("fixed-top");
    }
    else{
        $("nav").removeClass("fixed-top");
        
    }*/
    

})
$("#btnUp").click(function(){
    
    $("body,html").animate({scrollTop:0},1000);
})

$("a").click(function(){
    let aHref = $(this).attr("href");
    let itemOffset = $(aHref).offset().top;
    
    $("body,html").animate({scrollTop:itemOffset},1000);
    
})


