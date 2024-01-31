$(document).ready(function(){
    // 햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거버튼 스위치 되독록 처리
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });
    
    // sub-menu
    // 마우스 올리면 카테고리에 맞는 탭 활성화 / 헤더 색상변경 / 서브메뉴 박스에서 마우스 나가면 기존 상태로 다시 변경
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-tab');
        $('.sub-menu').removeClass('active');
        $(`#${result}`).addClass('active');

        // 서브메뉴박스도 보이게 처리
        $('.sub-menu-box').addClass('active');

        // 헤더 색상 변경
        $('.header-area,.header-logo svg').addClass('active');
    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area,.header-logo svg').removeClass('active');
    })

    $('.main-menu li:last-child').mouseenter(function(){
        $('.sub-menu-box').removeClass('active');
    })

    //sec-2 swiper
    var swiper = new Swiper(".mySwiper", {
        // slidesPerView : 3,
        // slidesPerGroup: 1,
        // spaceBetween: 20, 
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        breakpoints: {
            1500: {
                slidesPerView: 3,
                spaceBetween: 20
              },
            // 화면의 넓이가 1000px 이상일 때
            120: {
                slidesPerView: 2,
                spaceBetween: 20
              },
            // // 화면의 넓이가 320px 이상일 때
            // 320: {
            //   slidesPerView: 1,
            //   spaceBetween: 20
            // },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
    });
  
    
    // 상단이동버튼 300px 이상일때 최상단으로 올라가는 상단이동버튼 구현해보기(배너에서 없어져있다가 sec1에서부터 보이게) -> 클릭했을때 최상단으로 이동하는 부분까지!
    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        if(sct >= 300){
            $('.top-btn').fadeIn();
        }else{
            $('.top-btn').fadeOut();
        }
    });

    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },500);
    });


});