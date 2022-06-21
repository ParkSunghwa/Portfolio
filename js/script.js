$(document).ready(function(){

    $(".wrap_fullpage").fullpage({

        navigation:true,
        
        // .box_ability start
        afterLoad:function(origin, destination, direction){
            if(destination.index == 1){
                const graphActive = document.querySelector(".animation_spread");
                graphActive.beginElement();
            }
        },
        onLeave:function(origin, destination, direction){
            if(origin.index == 1){
                const graphInactive = document.querySelector(".animation_shrink");
                graphInactive.beginElement();
            }
        },
        // .box_ability end

    });


    // .wrap_background start


    // .wrap_background end



    // .wrap_layout_background start

    $(".wrap_layout_background > .box_layout_background > .box_language > .language").click(function(){
        
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        let korean = $(".korean").hasClass("active");
        let english = $(".english").hasClass("active");


        if(korean == true){
        $(".kor").addClass("active");
        $(".eng").removeClass("active");
        } else if(english == true){
        $(".eng").addClass("active");
        $(".kor").removeClass("active");
        };
    });

    // .wrap_layout_background end

    // .box_introduction start

    

    // .box_introduction end

    
    // .box_project start

    const swiper = new Swiper(".swiper", {

        loop:true,
        navigation: {
            nextEl: ".view_pc > .box_project > .box_layout_content > .box_content.left > .box_cover_slide > .box_navigation > .box_arrow.arrow_right",
            prevEl: ".view_pc > .box_project > .box_layout_content > .box_content.left > .box_cover_slide > .box_navigation > .box_arrow.arrow_left",
          },
        pagination:{
            el: ".view_pc > .box_project > .box_layout_content > .box_content.left > .box_cover_slide > .box_pagination",
            type:"fraction",
        },
    });

    
    swiper.on("slideChangeTransitionStart", function(){
        let indexLength = 0;
        let indexNum = swiper.realIndex;
        // console.log(indexNum);

        $(".view_pc > .box_project > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).addClass("active_slide");
        $(".view_pc > .box_project > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).siblings().removeClass("active_slide");
    });

    // .box_project end


    // .view_hidden start


    $(window).resize(function(){
        
    let width = $(window).outerWidth(true),
    height = $(window).outerHeight(true),
    ratio = width/height;

    console.log(width);
    console.log(height);
    console.log(ratio);

    if(ratio >= 7/2){
        console.log("true");
        $(".view_hidden").css({
            "display" : "block",
        });
        $(".view_hidden > .box_button").click(function(){
            $(".view_hidden").css({
                "display" : "none",
            });
        });
    } else{
        $(".view_hidden").css({
            "display" : "none",
        });
    }

    });

    // .view_hidden end


});