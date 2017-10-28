/**
 * Created by Administrator on 2017/10/25.
 */

$(function () {
    $('.asidenav li a').click(function () {
        $(this).next("ul").slideToggle();
    });

    $("footer .row-1 dt").click(function (){
        $(this).nextAll("dd").slideToggle();
    });

    $("header .menu").click(function () {
        $(".asidenav").css("left","0");
        $(".bg").fadeIn(300);
    });
    $(".bg").click(function(){
        $(".bg").fadeOut(300);
        $(".asidenav").css("left","-270px");
    });
    var sTop1=$(window).scrollTop();

    $(window).scroll(function () {
        var sTop2=$(window).scrollTop();

        if($(this).scrollTop()>=100){
            $("header").addClass("on");
            if (sTop2>sTop1){
                $("header").css("top","-60px");
            }else{
                $("header").css("top","0");
            }
        }else{
            $("header").removeClass("on");
            $("header").css("top","0");
        }
        sTop1=sTop2;

        $(".bg").fadeOut(300);
        $(".asidenav").css("left","-270px");
    });
});