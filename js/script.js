$(document).ready(function(){

    $(".wrap_fullpage").fullpage({

        navigation:true,

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
        console.log(indexNum);

        $(".view_pc > .box_project > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).addClass("active_slide");
        $(".view_pc > .box_project > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).siblings().removeClass("active_slide");
    });

    // .box_project end


});