$(function(){
    "use strict";
    // Animation click button start
    let animation_close_btn = document.querySelector(".animation_close_btn");
    let line_1 = document.querySelector(".line_1");
    let line_2 = document.querySelector(".line_2");
    let line_3 = document.querySelector(".line_3");
    animation_close_btn.addEventListener("click", function(){
        line_1.classList.toggle("rotate_1");
        line_2.classList.toggle("hide");
        line_3.classList.toggle("rotate_2");
    })
    // Animation click button end
    

    let custom_mouse = document.querySelector(".custom_mouse");
    let point = document.querySelector(".point");
    let service_items = document.querySelectorAll(".service_item");
    let service_itemArr = Array.from(service_items);
    // console.log(service_itemArr);

        service_itemArr.map((item) => {
            console.log(item);
            item.addEventListener("mouseenter", (e) => {
                console.log(1);
                point.setAttribute("style", `display: none;`)
                custom_mouse.setAttribute("style",`left: ${e.pageX-50}px;top: ${e.pageY}px;width: 60px;height: 60px;border: none;`);
            })
        })
    // console.log(service_itemArr);

    let mouseMove =  window.addEventListener("mousemove", function(e) {
        custom_mouse.setAttribute("style", `left: ${e.pageX}px; top: ${e.pageY}px;`);
        point.setAttribute("style", `left: ${e.pageX}px; top: ${e.pageY}px;`)
        // console.log(e.pageX, e.pageY);
    })


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Masonry Gallery start====================
    $('.portfolio_gallery').mixItUp({  
        
        selectors: {
            target: '.tile',
            filter: '.filter',
            sort: '.sort-btn'
        },
        
        animation: {
            animateResizeContainer: false,
            effects: 'fade scale'
        }
        
    });

    new VenoBox({
        selector: '.image_popup',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });
    new VenoBox({
        selector: '.youtube_play',
    });
    new VenoBox({
        selector: '.vimeo_play',
    });
    new VenoBox({
        selector: '.could_play',
    });
    // Masonry Gallery End======================


    // Progress bar js
    $('.html').LineProgressbar({
        percentage:90,
        radius: '3px',
        height: '20px',
        });

       

    // let main_grid = document.querySelector(".main_grid");
    // let youtube = document.querySelector(".youtube");
    // let vimeo = document.querySelector(".vimeo");

    // console.log(youtube.clientWidth);
    // console.log(vimeo.clientWidth);

    // vimeo.style.position = "absolute"
    // vimeo.style.left = youtube.clientWidth + "px" || "0px";

    let skill_item = document.querySelector(".item");
    window.addEventListener("scroll", function(){
        let value = window.scrollY;
        if (value > 2888) {
            skill_item.classList.add("html")
        }else{
            skill_item.classList.remove("html")
        }
    })

    // Tilt js start
    $('.service_item').tilt({
        maxTilt: 3
        // option: value,
        // option: value,
    });
    // Tilt js END


    // Slick slider start
    $(".testimonial_slider").slick({
        arrows:false,
        dots:true,
    })
    // Slick slider END

    // AOS 
    AOS.init();

})