import projectList from './projectList.js';

$(document).ready(function(){
    $(".wrap_fullpage").fullpage({

        navigation:true,
        touchSensitivity:10,
        
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

    projectList.forEach(function(a,i){
        var templateConceptPCKor = '', templateConceptPCEng = '', templateConceptKor = '', templateConceptEng = '';
        a.concept.korean.forEach(function(b,i){
            templateConceptPCKor = templateConceptPCKor+b+'<br/>';
        });
        a.concept.english.forEach(function(b,i){
            templateConceptPCEng = templateConceptPCEng+b+'<br/>';
        });
        a.concept.korean.forEach(function(b,i){
            templateConceptKor = templateConceptKor+b+'&#32;';
        });
        a.concept.english.forEach(function(b,i){
            templateConceptEng = templateConceptEng+b+'&#32;';
        });
        
        $(`.view_pc>.box_project>.box_layout_content>.box_content.left>.box_cover_slide>.box_slide .content_slide.slide0${i+1}>.box_image`).css({"background-image" : `url(./image/03project/${a.image})`});
        $(`.view_tab>.box_project_tab>.box_layout_content>.box_content.left>.box_cover_slide>.box_slide .content_slide.slide0${i+1}`).css({"background-image" : `url(./image/03project/${a.image})`});
        $(`.view_mo>.box_project_mo>.box_layout_content>.box_content.left>.box_cover_slide>.box_slide .content_slide.slide0${i+1}`).css({"background-image" : `url(./image/03project/${a.image})`});

        $(`.view_pc>.box_project>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.kor>.box_text.text01>.box_explanation_2depth>.text_explanation_2depth`).text(a.title.korean);
        $(`.view_pc>.box_project>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.kor>.box_text.text02>.box_explanation_2depth>.text_explanation_2depth`).text(a.goal.korean);
        $(`.view_pc>.box_project>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.kor>.box_text.text03>.box_explanation_2depth>.text_explanation_2depth`).html(templateConceptPCKor);
        $(`.view_pc>.box_project>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.eng>.box_text.text01>.box_explanation_2depth>.text_explanation_2depth`).text(a.title.english);
        $(`.view_pc>.box_project>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.eng>.box_text.text02>.box_explanation_2depth>.text_explanation_2depth`).text(a.goal.english);
        $(`.view_pc>.box_project>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.eng>.box_text.text03>.box_explanation_2depth>.text_explanation_2depth`).html(templateConceptPCEng);

        $(`.view_tab>.box_project_tab>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.kor>.box_text.text01>.box_explanation_2depth>.text_explanation_2depth`).text(a.title.korean);
        $(`.view_tab>.box_project_tab>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.kor>.box_text.text02>.box_explanation_2depth>.text_explanation_2depth`).text(a.goal.korean);
        $(`.view_tab>.box_project_tab>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.kor>.box_text.text03>.box_explanation_2depth>.text_explanation_2depth`).html(templateConceptKor);
        $(`.view_tab>.box_project_tab>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.eng>.box_text.text01>.box_explanation_2depth>.text_explanation_2depth`).text(a.title.english);
        $(`.view_tab>.box_project_tab>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.eng>.box_text.text02>.box_explanation_2depth>.text_explanation_2depth`).text(a.goal.english);
        $(`.view_tab>.box_project_tab>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.eng>.box_text.text03>.box_explanation_2depth>.text_explanation_2depth`).html(templateConceptEng);
        
        $(`.view_mo>.box_project_mo>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.kor>.box_text.text01>.box_explanation_2depth>.text_explanation_2depth`).text(a.title.korean);
        $(`.view_mo>.box_project_mo>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.kor>.box_text.text02>.box_explanation_2depth>.text_explanation_2depth`).text(a.goal.korean);
        $(`.view_mo>.box_project_mo>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.kor>.box_text.text03>.box_explanation_2depth>.text_explanation_2depth`).html(templateConceptKor);
        $(`.view_mo>.box_project_mo>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.eng>.box_text.text01>.box_explanation_2depth>.text_explanation_2depth`).text(a.title.english);
        $(`.view_mo>.box_project_mo>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.eng>.box_text.text02>.box_explanation_2depth>.text_explanation_2depth`).text(a.goal.english);
        $(`.view_mo>.box_project_mo>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_cover.eng>.box_text.text03>.box_explanation_2depth>.text_explanation_2depth`).html(templateConceptEng);

        $(`.view_pc>.box_project>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_outerlink>.outerlink`).attr('href',a.link);
        $(`.view_tab>.box_project_tab>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_outerlink>.outerlink`).attr('href',a.link);
        $(`.view_mo>.box_project_mo>.box_layout_content>.box_content.right>.box_projectinfo.project0${i+1}>.box_outerlink>.outerlink`).attr('href',a.link);
    });

    const swiper = new Swiper(".view_pc .swiper", {

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

    const swiper_tab = new Swiper(".view_tab .swiper", {

        loop:true,
        pagination:{
            el: ".view_tab > .box_project_tab > .box_layout_content > .box_content.left > .box_cover_slide > .box_pagination",
            
        },
    });
    swiper_tab.on("slideChangeTransitionEnd", function(){
        let indexNum = swiper_tab.realIndex;

        $(".view_tab > .box_project_tab > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).addClass("active_slide_tab");
        $(".view_tab > .box_project_tab > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).siblings().removeClass("active_slide_tab");
    });

    const swiper_mo = new Swiper(".view_mo .swiper", {

        loop:true,
        pagination:{
            el: ".view_mo > .box_project_mo > .box_layout_content > .box_content.left > .box_cover_slide > .box_pagination",
            
        },
    });
    swiper_mo.on("slideChangeTransitionEnd", function(){
        let indexNum = swiper_mo.realIndex;

        $(".view_mo > .box_project_mo > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).addClass("active_slide_mo");
        $(".view_mo > .box_project_mo > .box_layout_content > .box_content.right > .box_projectinfo").eq(indexNum).siblings().removeClass("active_slide_mo");
    });

    // .box_project end




    // .view_hidden start

    $(".view_hidden > .box_button").click(function(){

        $(".view_hidden").css({
            "display" : "none",
        });
        $(".view_pc").css({
            "opacity" : 1,
            "pointer-events" : "auto",
            "height" : "100%",
        });
        $(".view_mo").css({
            "opacity" : 1,
            "pointer-events" : "auto",
            "height" : "100%",
        });
        $(".wrap_footer > .view_pc").css({
            "opacity" : 1,
            "pointer-events" : "auto",
            "height" : "calc((100vw/1920)*280)",
        });
        $(".wrap_footer > .view_mo").css({
            "opacity" : 1,
            "pointer-events" : "auto",
            "height" : "calc((100vw/1920)*280)",
        });

    });
    

    // .view_hidden end


});
