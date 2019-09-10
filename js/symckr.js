/* start input next*/

$(".btn_next").click(function(){
    $(".sympo_inputs").hide(1000 , function(){
        
    });
})
/* start الامراض*/
$("#fristItem").click(function(){
     $(".sympo_input_drugs").hide(500 , function(){
         $(".sympo_inputs").slideDown(1000)
    }); 
})
/* start input letter*/
$("#inputLatter").click(function(){
    $(".lists_diss").show(2000);
})

$(".items_diss").click(function(){
    $(".info").slideDown(1000);
})
/* sympchkr body */
/* start input letter*/
$("#inputBody").click(function(){
    $(".symckr_body").slideDown(1000 , function(){
      $(".lists_diss").hide(1000);  
    });
})
$(".list_body").click(function(){
    $(".sym_body_info").slideDown(1000 ,function(){
       $(".symckr_letters") .hide(1000);
    });
})

/* start symckr of drugs*/

$("#secondItem").click(function(){
    $(".sympo_inputs").hide(500 ,function(){
     $(".sympo_input_drugs").show(1000 );    
});
});

$("#inputFamous").click(function(){
  $(".drugs_kind").slideDown(1000);  
})

$("#inputDiss").click(function(){
    $(".drugs_diss").slideDown(1000);
})
