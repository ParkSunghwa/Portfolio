$(document).ready(function(){

    $(".wrap_fullpage").fullpage({

        navigation:true,
        
        afterLoad:function(origin, destination, direction){
            if(destination.index == 1){
                const graphActive = document.querySelector(".animation_graph");
                graphActive.beginElement();
            }
        },
        onLeave:function(origin, destination, direction){
            if(origin.index == 1){
                const graphInactive = document.querySelector(".animation_graph_back");
                graphInactive.beginElement();
            }
        },

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

    // .box_ability start

    $(".view_pc > .box_ability > .box_layout_content > .box_content.right > .box_cover > .box_text").click(function(){

        const graphActive = document.querySelector(".animation_graph");
        graphActive.beginElement();

    });

    // .box_ability end

    
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
        console.log(indexNum);

        $(".view_pc > .box_project > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).addClass("active_slide");
        $(".view_pc > .box_project > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).siblings().removeClass("active_slide");
    });

    // .box_project end


});