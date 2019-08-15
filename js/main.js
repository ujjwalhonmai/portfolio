$(window).on("load",function(){
    $(".loader .inner").fadeOut(1000,function(){
        $(".loader").fadeOut(1250);
    });
})
$(document).ready(function(){
    $('#slides').superslides({
        animation:'fade',
        play:5000,
        pagination:false
    })
    var typed=new Typed(".typed",{
        strings:["Web Developer.","Student.","Cs Engineer."],
        typeSpeed:70,
        loop:true,
        startDelay:1000,
        showCursor:false
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            968:{
                items:5
            }
        }
    })
   
   var topoffset= $(".skillsSection").offset().top
   $(window).scroll(function(){
        if(window.pageYOffset>topoffset-$(window).height()+200)
        {

            $('.chart').easyPieChart({
                //your options goes here
                easing:'easeInOut',
                barColor:'#fff',
                trackColor:false,
                scaleColor:false,
                lineWidth:4,
                size:152,
                onStep:function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent))
                }
        
            });
        }
    })
    $("[data-fancybox]").fancybox()
    $(".items").isotope({
        filter:'*',
        animationOptions:{
            duration:1500,
            easing:'linear',
            queue:false
        }
    })
    $(".filters a").click(function(){
        $(".filters .current").removeClass('current')
        $(this).addClass('current')
        var selector=$(this).attr("data-filter")
        $(".items").isotope({
            filter:selector,
            animationOptions:{
                duration:1500,
                easing:'linear',
                queue:false
            }
        })
        return false;
    })
    $("#navigation li a").click(function(e){
        e.preventDefault();
        var targetele=$(this).attr("href");
        var targetpos=$(targetele).offset().top;
        $("html,body").animate({scrollTop:targetpos-50},"slow");

    })
    const nav=$("#navigation");
    const navtop=nav.offset().top;
    $(window).on('scroll',sticky);
    function sticky()
    {
        var body=$("body");
        if($(window).scrollTop()>=navtop)
        {
            body.css("padding-top",nav.outerHeight()+"px");
            body.addClass("fixednav");
        }
        
        else
        {
            body.css("padding-top",0);
            body.removeClass("fixednav");
        }
    }

})