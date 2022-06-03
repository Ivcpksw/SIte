/*Настраиваем fixed для шапки. Мол, сколько должны прокрутить наш сайт, чтобы скрипт начал действовать */
$(function()
{
    var header = $("#header"),
        introH = $("#intro").innerHeight(), /*Выбераем эту переменную и save высоту блока*/
        scrollOffset = $(window).scrollTop();

    /* Fixed Header */
    checkScroll(scrollOffset);
    $(window).on("scroll", function()
    {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    /*Надо, чтобы шапка появлялась тогда, когда нет скролла на рабочей зоне*/
    function checkScroll(scrollOffset)
    {
        if (scrollOffset >= introH)
        {
            header.addClass("fixed");
        }
        else
        {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll (Плавный) */
    $("[data-scroll]").on("click", function(event)
    {
        event.preventDefault(); /* Убираем стандартное Поведение */

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        /* Активный класс в навигации */
        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate(
        {
            scrollTop: blockOffset
        }, 500);
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event)
    {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function(event)
    {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(blockId).slideToggle();
        $this.toggleClass("active");
    });

    /* Slider */
    $("[data-slider]").slick(
    {
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});
