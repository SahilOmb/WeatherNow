$(document).ready(function()  {
        $(".pricingCard").hover(function() {
            $(this).addClass("centers");
            $(".orta").removeClass("centers");
    
        },function() {
            $(this).removeClass("centers");
            $(".orta").addClass("centers");
    
        });
    
    
        $(".plan").click(function() {
            var i = this.childNodes[1];
            $(".plan i").removeClass("onay");
            $(".plan").css("border-color" , "lightgrey");
    
            $(i).addClass("onay");
            $(this).css("border-color" , "#673de6");
        })
    
        $(".payment").click(function() {
            var i = this.childNodes[1];
            $(".payment i").removeClass("onay");
            $(".payment").css("border-color" , "lightgrey");
    
            $(i).addClass("onay");
            $(this).css("border-color" , "#673de6");
    
        })
    })