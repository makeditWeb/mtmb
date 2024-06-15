const titles = ["제안서", "강의자료", "소개서", "제안문서", "비즈니스 보고서"];
const descriptions = ["Proposal document", "Lecture materials", "Introduction", "Proposal document", "Business report"];


$(window)
  .resize(function () {
    $(document).ready(function () {
      if (window.innerWidth > 992) {
        // 다바이스 크기가 992px 이상일 때
          // 좌측 메뉴 노출
          $('#lnb').css({ 'display': 'block' });

        // 풀페이지 옵션
        $("#fullpage").fullpage({
          anchors: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          menu: "#header",
          verticalCentered: true, // 세로 중앙 정렬
          scrollOverflow: true,
          sectionsColor: ["#000", "#fff"], // 섹션별 컬러
          navigation: true,
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: true,
          css3: true,
          navigationPosition: "right",
          loopHorizontal: false, // 반복여부
          controlArrows: false, // 슬라이드 좌우 이동 제어
          passive: false,
          scrollbars: true,
          // 모바일에서는 fullpage 초기화
          responsiveWidth: 992,
          onLeave: function (anchorLink, index, direction) {
            var pages = $(".section").length;
            var currentPage = index - 1;
          },
          afterLoad: function (anchorLink, index) {
            // console.log(index);
            if (index != "1") {
              $(".header_i img").fadeIn();
              $("#top_fixed").fadeIn();
            } else {
              $(".header_i img").fadeOut();
              $("#top_fixed").fadeOut();
            }

            if (index === 1) {
              // 첫 번째 섹션에 도달했을 때 네비게이션 바 숨기기
              $("#fp-nav").hide();

              // 첫 번째 색션일 경우 상단 로고 색상 흰 색으로 
              $('.menu_line').css({ 'background': '#fff' });
              $('.logo_text').css({ 'color': '#fff' });

              // 좌측 메뉴 노출
              $('#lnb').css({ 'display': 'none' });
            } else {
              $("#fp-nav").show();

              $('.menu_line').css({ 'background': '#000' });
              $('.logo_text').css({ 'color': '#000' });

              // 좌측 메뉴 노출
              $('#lnb').css({ 'display': 'block' });
            }

            if (index === 2) {
              $('#lnb .lnb_menu_01 ul li a').css({ 'color': '#fff' });
            } else {
              $('#lnb .lnb_menu_01 ul li a').css({ 'color': '#000' });
            }

            if(index === 4) {
              $('#top-icon-img').attr('src', 'img/icon/i_top_button_white.png');
            } else {
              $('#top-icon-img').attr('src', 'img/icon/i_top_button.png');
            }

            // if (index === 3) {
            //   $('#header').css({ 'border-bottom': '1px solid #000' });
            // } else {
            //   $('#header').css({ 'border-bottom': 'none' });
            // }
          },
        });



        // listSwiper
        var section01Swiper = new Swiper(".section01_listSwiper", {
          direction: 'vertical',
          centeredSlides: true,
          slidesPerView: 4,
          loop: true,
          autoplay: false, // 초기에는 autoplay 비활성화
          on: {
            activeIndexChange: function () {
              const realIndex = this.realIndex;
              $('.content-panel .right-wrap .description_wrap span:first-child').text(titles[realIndex]);
              $('.content-panel .right-wrap .description_wrap span:last-child').text(descriptions[realIndex]);
            }
          }
        });

        $('#section_01_list_swiper_up').on('click', function() {
          section01Swiper.slidePrev();
        });

        $('#section_01_list_swiper_down').on('click', function() {
          section01Swiper.slideNext();
        });

        // 10초 후에 autoplay 시작
        setTimeout(function() {
          section01Swiper.params.autoplay = {
            delay: 2000,
            disableOnInteraction: false
          };
          section01Swiper.autoplay.start();
        }, 10000); // 10000ms = 10초

        // listSwiper
        var listSwiper = new Swiper(".section01_listSwiper", {
          slidesPerView: 9,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: true, // 슬라이드 중앙정렬
          centeredSlidesBounds: true, // t슬라이드 시작과 끝의 중앙배치
          loop: true, // 무한반복
          autoplay: {
            delay: 4000,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });


        // listSwiper
        var listSwiper = new Swiper(".listSwiper", {
          slidesPerView: 9,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: true, // 슬라이드 중앙정렬
          centeredSlidesBounds: true, // t슬라이드 시작과 끝의 중앙배치
          loop: true, // 무한반복
          autoplay: {
            delay: 4000,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        // partnerSwiperOne
        var partnerSwiper = new Swiper(".partnerSwiper", {
          slidesPerView: 4,
          spaceBetween: 0, // 슬라이드 여백
          loop: true, // 무한반복
          autoplay: {
            delay: 2000,
          },
        });


        // partnerSwiperOne + Two 연동제어
        // partnerSwiperOne.controller.control = partnerSwiperTwo;
        // partnerSwiperTwo.controller.control = partnerSwiperOne;

        // ppSwiper
        var portfolioSwiper = new Swiper(".portfolioSwiper", {
          slidesPerView: 3,
          spaceBetween: 0, // 슬라이드 여백
          loop: true, // 무한반복
          // touchRatio: 0,//드래그 금지
          autoplay: {
            delay: 2500,
          },
        });

        // serviceIcon01
        var serviceIcon01 = new Swiper(".serviceIcon01", {
          slidesPerView: 5,
          spaceBetween: 16, // 슬라이드 여백
          loop: true, // 무한반복
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
          navigation: false,
        });

        // serviceIcon02
        var serviceIcon02 = new Swiper(".serviceIcon02", {
          slidesPerView: 4,
          spaceBetween: 16, // 슬라이드 여백
          centeredSlides: false, // 슬라이드 중앙정렬
          loop: true, // 무한반복
          autoplay: {
            delay: 3000,
          },
          navigation: false,
        });

        // workImg06
        var workImg06 = new Swiper(".workImg06", {
          slidesPerView: 1,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: true, // 슬라이드 중앙정렬
          effect: "fade",
          loop: true, // 무한반복
          autoplay: {
            delay: 2000,
          },
          navigation: false,
        });

        // workImg07
        var workImg07 = new Swiper(".workImg07", {
          slidesPerView: 1,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: true, // 슬라이드 중앙정렬
          effect: "fade",
          loop: true, // 무한반복
          autoplay: {
            delay: 2000,
          },
          navigation: false,
        });

        // workImg10
        var workImg10 = new Swiper(".workImg10", {
          slidesPerView: 1,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: true, // 슬라이드 중앙정렬
          effect: "fade",
          loop: true, // 무한반복
          autoplay: {
            delay: 2000,
          },
          navigation: false,
        });

        // workImg14
        var workImg14 = new Swiper(".workImg14", {
          slidesPerView: 1,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: true, // 슬라이드 중앙정렬
          effect: "fade",
          loop: true, // 무한반복
          autoplay: {
            delay: 4000,
            // disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지
          },
          navigation: false,
        });

        // consulting_partnerSubSwiper
        var partnerSubSwiper = new Swiper(".partnerSubSwiper", {
          slidesPerView: 4,
          spaceBetween: 16, // 슬라이드 여백
          centeredSlides: false, // 슬라이드 중앙정렬
          loop: true, // 무한반복
          autoplay: {
            delay: 3000,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        // 상세페이지 Swiper
        // 명함
        var product_01_01 = new Swiper(".product_01_01", {
          slidesPerView: 3,
          grid: {
            rows: 3,
          },
          spaceBetween: 20,
        });

        var product_01_02 = new Swiper(".product_01_02", {
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: product_01_01,
          },
        });

        // weMadeItSwiper
        var weMadeItSwiper = new Swiper(".weMadeItSwiper", {
          slidesPerView: 4,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: false, // 슬라이드 중앙정렬
          loop: true, // 무한반복
          touchRatio: 0,
          autoplay: {
            delay: 3000,
          },
        });

        // weMadeItSwiper
        var introducationSwiper = new Swiper(".introducationSwiper", {
          slidesPerView: 4,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: false, // 슬라이드 중앙정렬
          loop: true, // 무한반복
          touchRatio: 0,
          autoplay: {
            delay: 2000,
          },
        });

        // section03 partner swiper
        var section03PartnerSwiper = new Swiper(".section03_partnerSwiper", {
          spaceBetween: 0,
          freeMode: false,
          enteredSlides: true,
          speed: 5000,
          autoplay: {
            delay: 1,
          },
          loop: true,
          slidesPerView: 'auto',
          allowTouchMove: false,
          disableOnInteraction: true
        });


      } else {
        $('#lnb').css({ 'display': 'none' });

        // 디바이스 크기가 992px 이하일 때
        var section01MobileSwiper = new Swiper(".section01_listMobileSwiper", {
          slidesPerView: 4,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: false, // 슬라이드 중앙정렬
          loop: true, // 무한반복
          touchRatio: 0,
          autoplay: {
            delay: 3000,
          },
          on: {
            activeIndexChange: function () {
              const realIndex = this.realIndex;
              $('.section_01 .content-panel .right-wrap .description_wrap span:first-child').text(titles[realIndex]);
              $('.section_01 .content-panel .right-wrap .description_wrap span:last-child').text(descriptions[realIndex]);
            }
          }
        });

        $('#section_01_list_swiper_left').on('click', function() {
          section01MobileSwiper.slidePrev();
        });

        $('#section_01_list_swiper_right').on('click', function() {
          section01MobileSwiper.slideNext();
        });

        // 디바이스 크기가 992px 이하일 때
        // weMadeItSwiper
        var weMadeItSwiper = new Swiper(".weMadeItSwiper", {
          slidesPerView: 2,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: false, // 슬라이드 중앙정렬
          loop: true, // 무한반복
          touchRatio: 0,
          autoplay: {
            delay: 3000,
          },
        });

        // listSwiper
        var listSwiper = new Swiper(".listSwiper", {
          slidesPerView: 3,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: true, // 슬라이드 중앙정렬
          // initialSlide: 1, //초기 슬라이드 색인 번호
          loop: true, // 무한반복
          autoplay: {
            delay: 2000,
            // disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

        // partnerSwiper
        var partnerSwiper = new Swiper(".partnerSwiper", {
          slidesPerView: 3,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: true, // 슬라이드 중앙정렬
          loop: true, // 무한반복
          autoplay: {
            delay: 2000,
          },
        });

        // ppSwiper
        var portfolioSwiper = new Swiper(".portfolioSwiper", {
          slidesPerView: 2,
          spaceBetween: 0, // 슬라이드 여백
          centeredSlides: false, // 슬라이드 중앙정렬
          loop: true, // 무한반복
          autoplay: {
            delay: 3000,
          },
        });

        // consulting_partnerSubSwiper
        var partnerSubSwiper = new Swiper(".partnerSubSwiper", {
          slidesPerView: 3,
          spaceBetween: 8, // 슬라이드 여백
          centeredSlides: false, // 슬라이드 중앙정렬
          loop: true, // 무한반복
          autoplay: {
            delay: 3000,
          },
        });

        // 상세페이지 Swiper
        // 명함
        var product_01_01 = new Swiper(".product_01_01", {
          spaceBetween: 10,
          slidesPerView: 2,
          freeMode: true,
          watchSlidesProgress: true,
        });
        var product_01_02 = new Swiper(".product_01_02", {
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: product_01_01,
          },
        });
      }
    });
  })
  .resize();

$(document).ready(function () {
  $(".sub_menu li").click(function () {
    $(this).toggleClass("active");
  });

  $('.accordion-trigger').click(function () {
    $(this).parent().find('.accordion-panel').slideToggle();
    $(this).toggleClass('active');

    // Change the image source based on the active state
    if ($(this).hasClass('active')) {
      $(this).find('.accordion-trigger-arrow-img').attr('src', 'img/main/mobile/arrow_bottom.png');
    } else {
      $(this).find('.accordion-trigger-arrow-img').attr('src', 'img/main/text/title_arrow.png');
    }
  });

});


// sub top fixed
let topFixed = document.getElementById("top_fixed");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topFixed.style.display = "block";
  } else {
    topFixed.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

