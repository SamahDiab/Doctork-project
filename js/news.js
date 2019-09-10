

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
//News

let btns = document.querySelectorAll(".btns");
let newsContainer = document.querySelector(".news-container");
let Wclose = document.getElementById("wClose")
let popupContainer = document.querySelector(".popup-container");
let imgsArray = [];


for(let i = 0; i<btns.length ; i++)
    {
        imgsArray.push(btns[i]);
        btns[i].addEventListener("click" , function(e){
            newsContainer.classList.add("show");
            //let imgsrc = e.target.src;
            //popupContainer.style.backgroundImage = "url("+imgsrc+")";
            
        })
    }

wClose.addEventListener("click" , function(e){
    newsContainer.classList.remove("show");
})
newsContainer.addEventListener("click" , function(e){
    if(e.target == newsContainer)
        {
          newsContainer.classList.remove("show");    
        }
})
//News



















