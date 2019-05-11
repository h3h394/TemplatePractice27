//counter variable so that we know what image we are currently on
let slideIndex = 0;
//Select all images
const slides = document.querySelectorAll(".main > img");

const main = () => {
    //remove active class for all slides 
    slides.forEach(slide => slide.classList.remove('active'))
    //Add 1 to the counter variable
    slideIndex++;
    //if the counter gets bigger than the total amount of slides, reset the counter
    if (slideIndex > slides.length) slideIndex = 1;
    //select the slide after the slide thats currently active and give it active class
    slides[slideIndex - 1].classList.add('active');
}

// use set interval to continuously run the slider() function over and over
main();

setInterval(() => {
    main();
}, 3000)// <--- 3000 milliseconds = 3 seconds. This means run the slider() function every 3 seconds

$(window).resize(function () {
    if ($(window).width() > 883) {
        $(".list").css("display", "flex")
    } else {
        $(".list").css("display", "none")
    }
});

$("#burger").on("click", function () {
    $(this).removeAttr('href');
    $(".list").slideToggle("slow");
});

$(".list a").on("click", function () {
    $(".list a").removeClass("active")
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
    } else {
        $(this).addClass("active")
    }
});


