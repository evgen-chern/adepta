function reviewsCarouselInit() {
    let owlCarouselReviews = $('.reviews .reviews_list');
    owlCarouselReviews.owlCarousel({
        items:1,
        loop:true,
        margin:25,
        nav:true,
        navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
        dots:true,
        smartSpeed: 400,
        responsive: {
            0: {
                autoWidth: false,
                center: true,
                margin: 0,
            },
            767: {
                autoWidth: true,
            },
        }
    });
}
function mobileCompanyCarouselInit() {
    let owlCarouselMobileCompany = $('.about_company .company_photo');
    owlCarouselMobileCompany.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        center: true,
        nav:true,
        navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
        dots:true,
        autoWidth: false,
        smartSpeed: 400,
    });
}

function mobileWorkCarouselInit() {
    let owlCarouselMobileWork = $('.work_of_our_students .work_list');
    owlCarouselMobileWork.owlCarousel({
        items:1,
        loop:true,
        margin:0,
        center: true,
        nav:true,
        navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
        dots:true,
        autoWidth: false,
        smartSpeed: 400,
    });
}

function initYandexMap() {
    let event_status = false;
    ["mouseover", "click", "scroll"].forEach(function(event) {
        window.addEventListener(event, function() {
            if(!event_status) {
                let mapContainer = document.querySelector(".yandex_map");
                mapContainer.innerHTML = `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad980e797f83725c91c528ea3c414cb7287d1870a9601e43fbfa9d29207b4185e&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>`;
                event_status = true;
            }
        }, {
            once: true
        });
    });
}


$(function (){
    let popupWindow = '.popup_form';
    let closePopupLink = '.close_popup';
    let openPopupLink = '.open_popup__form';
    let headerTop = '.header_top';
    let tagLIne = '.tagline';
    let hasSub = '.has_sub';
    let dropdownMenu = '.dropdown-menu';
    let headerMenuFix = '.header_menu.fix';

    if(screen.width < 767){
        mobileCompanyCarouselInit();
        mobileWorkCarouselInit();
    }
    initYandexMap();
    reviewsCarouselInit();

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 81 ) {
            $(headerTop).addClass('scrolled');
            $(tagLIne).addClass('hide');
            $(headerMenuFix).addClass('scrolled');
        }else{
            $(headerTop).removeClass('scrolled');
            $(tagLIne).removeClass('hide');
            $(headerMenuFix).removeClass('scrolled');
        }
    });

    $(hasSub).on('click',function (){
        $(this).children(dropdownMenu).stop(true).slideToggle().css('display','flex');
        $(this).toggleClass('active');
    });

    $(document).on('click',function (e) {
        if (!$(e.target).closest(hasSub).length) {
            $(dropdownMenu).stop(true).slideUp();
            $(hasSub).removeClass('active');
        }
    });

    $(openPopupLink).on('click',function (){
        $(popupWindow).stop(true).fadeIn(300);
    });

    $(closePopupLink).on('click',function (){
        $(popupWindow).stop(true).fadeOut(300);
    });
})
