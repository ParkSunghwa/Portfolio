$(document).ready(function(){

    $(".wrap_fullpage").fullpage({

        navigation:true,

    });


    // .wrap_background start

    // var bgRight = $(".svg_ground").drawsvg({
    //     stagger:1500,
    //     duration:2000,
    // });

    // bgRight.drawsvg('animate');

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




});