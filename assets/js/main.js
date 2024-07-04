const titles = ["제안서", "강의자료", "소개서", "제안서", `비지니스\n보고서`];
const descriptions = ["Proposal document", "Lecture materials", "Introduction", "Proposal document", "Business report"];

const mainRollingData = [
  {
    title: '소개서',
    description: 'Introduction',
    src: 'img/main/contentImage/introduction-1.png'
  },
  {
    title: '제안서',
    description: 'Proposal document',
    src: 'img/main/contentImage/proposal-report-1.png'
  },
  {
    title: '보고서',
    description: 'Business report',
    src: 'img/main/contentImage/business-report-1.png'
  },
  {
    title: '교육자료',
    description: 'Educational meterials',
    src: 'img/main/contentImage/education-1.png'
  },
  {
    title: '강의자료',
    description: 'Lecture meterials',
    src: 'img/main/contentImage/education-2.png'
  },
  {
    title: '소개서',
    description: 'Introduction',
    src: 'img/main/contentImage/introduction-2.png'
  },
  {
    title: '제안서',
    description: 'Proposal document',
    src: 'img/main/contentImage/proposal-report-2.png'
  },
  {
    title: '보고서',
    description: 'Business report',
    src: 'img/main/contentImage/business-report-2.png'
  },
  {
    title: '교육자료',
    description: 'Educational meterials',
    src: 'img/main/contentImage/education-1.png'
  },
  {
    title: '강의자료',
    description: 'Lecture meterials',
    src: 'img/main/contentImage/education-2.png'
  },
]

$(document).ready(function () {
  const debounce = (func, wait) => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(), wait);
    };
  };

  const handleResize = () => {
    const isLargeScreen = window.innerWidth > 992;
    $('#lnb').css('display', isLargeScreen ? 'block' : 'none');

    if (isLargeScreen) {
      //  fulllpage 설정
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
          handleSectionEntry(index);

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

          if (index === 4) {
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

      // Function to handle section entry
      function handleSectionEntry(index) {
        if (index === 6) {
          $('#footer').css('bottom', '78px')
        }
      }

      // Function to handle initial load with hash
      function handleInitialLoadWithHash() {
        var hash = window.location.hash;
        if (hash === '#7') {
          $('#footer').css('bottom', '0px')
        }
      }

      // Check hash on initial load
      handleInitialLoadWithHash();


      // listSwiper
      var section01Swiper = new Swiper(".section01_listSwiper", {
        direction: 'vertical',
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        autoHeight: true,
        observeParents: true,
        on: {
          slideChange: function () {
            const realIndex = this.realIndex;
            const rollingIndex = realIndex >= mainRollingData.length ? realIndex % mainRollingData.length : realIndex

            $('.content-panel .right-wrap .description_wrap span:first-child').text(mainRollingData[rollingIndex].title);
            $('.content-panel .right-wrap .description_wrap span:last-child').text(mainRollingData[rollingIndex].description);
            $('.section_01 .content-panel .img-wrap img').attr("src", mainRollingData[rollingIndex].src);
          },
        }
      });

      section01Swiper.update();

      setTimeout(() => {
        section01Swiper.autoplay.stop();
      }, 100)

      $('#section_01_list_swiper_up').on('click', function () {
        section01Swiper.slidePrev();
      });

      $('#section_01_list_swiper_down').on('click', function () {
        section01Swiper.slideNext();
      });

      // 10초 후에 autoplay 시작
      setTimeout(function () {
        section01Swiper.params.autoplay = {
          delay: 5000,
          disableOnInteraction: false
        };

        section01Swiper.autoplay.start();
      }, 5000);

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
        loop: true,
        spaceBetween: 0,
        freeMode: false,
        enteredSlides: true,
        speed: 5000,
        autoplay: {
          delay: 1,
        },
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true
      });
    } else {
      const viewportHeight = $(window).height();
      $(window).on('scroll', function () {
        const scrollPosition = $(window).scrollTop();
        $('.menu_line').css('background', scrollPosition >= viewportHeight ? '#000' : '#fff');
        $('.logo_text').css('color', scrollPosition >= viewportHeight ? '#000' : '#fff');
      });

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
            const rollingIndex = realIndex >= mainRollingData.length ? realIndex % mainRollingData.length : realIndex

            // mobile
            $('.content-panel .bottom-wrap .title_arrow_wrap > span').html(mainRollingData[rollingIndex].title.replace(/\n/g, '<br/>'));
            $('.content-panel .bottom-wrap > span').text(mainRollingData[rollingIndex].description);
            $('.section_01 .content-panel .img-wrap img').attr("src", mainRollingData[rollingIndex].src);
          }
        }
      });

      $('#section_01_list_swiper_left').on('click', function () {
        section01MobileSwiper.slidePrev();
      });

      $('#section_01_list_swiper_right').on('click', function () {
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
        spaceBetween: 0,
        freeMode: false,
        enteredSlides: true,
        speed: 2000,
        autoplay: {
          delay: 1,
        },
        loop: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true
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




      // Intersection Observer 설정
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0 // 섹션이 조금이라도 보이면 콜백 실행
      };

      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('intersecting')
            if ($('.mo .content_06 .about_wrap .accordion-trigger').hasClass('active')) {
              console.log('open!!')
              $('.footer').css('position', 'fixed').css('bottom', 0);
            } else {
              console.log('closed!!')
              $('.footer').css('position', 'relative');
            }
          } else {
            $('.footer').css('position', 'relative');
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const section06 = document.querySelector('.mo .section_06');
      observer.observe(section06);
    }
  };

  $(window).resize(debounce(handleResize, 200)).resize();

  $(".sub_menu li").click(function () {
    $(this).toggleClass("active");
  });


  // $('.accordion-panel').each(function() {
  //     var originalDisplay = $(this).css('display');
  //     $(this).data('originalDisplay', originalDisplay);
  //     $(this).hide();  // Ensure all panels are hidden initially
  // });



  // $('.accordion-trigger').click(function () {
  //     // Slide up all panels and reset triggers
  //     $('.accordion-panel').slideUp();
  //     $('.accordion-trigger').removeClass('active');
  //     $('.accordion-trigger .accordion-trigger-arrow-img').attr('src', 'img/main/text/title_arrow.png');

  //     // Get the panel related to the clicked trigger
  //     var panel = $(this).parent().find('.accordion-panel');

  //     // If the panel is not visible, slide it down and set the trigger to active
  //     if (!panel.is(':visible')) {
  //         panel.slideDown(function() {
  //             panel.css('display', panel.data('originalDisplay'));
  //         });
  //         $(this).addClass('active');
  //         $(this).find('.accordion-trigger-arrow-img').attr('src', 'img/main/mobile/arrow_bottom.png');
  //     }

  //     // 강제로 IntersectionObserver 콜백 실행
  //     // observerCallback([{ isIntersecting: $(section06).is(':visible') }], observer);
  // });

  // 처음에 첫 번째 .ppt_wrap의 .accordion-panel을 열어두기
  $('.ppt_wrap:first .accordion-panel').show();
  $('.ppt_wrap:first .accordion-trigger').addClass('active');
  $('.ppt_wrap:first .accordion-trigger .accordion-trigger-arrow-img').attr('src', 'img/main/mobile/arrow_bottom.png');


  $('.accordion-trigger').click(function () {
    // 모든 패널을 닫고, 모든 트리거에서 active 클래스를 제거
    $('.accordion-panel').slideUp();
    $('.accordion-trigger').removeClass('active');
    $('.accordion-trigger .accordion-trigger-arrow-img').attr('src', 'img/main/text/title_arrow.png');

    // 클릭된 트리거에 대해 패널 열기/닫기 처리
    if (!$(this).parent().find('.accordion-panel').is(':visible')) {
      $(this).parent().find('.accordion-panel').slideDown();
      $(this).addClass('active');
      $(this).find('.accordion-trigger-arrow-img').attr('src', 'img/main/mobile/arrow_bottom.png');
    }
  });

  const originalList = $('.marquee-item-list');
  const clonedList = originalList.clone();
  $('.marquee-block').append(clonedList);


  $(".portfolio_wrap").on("click", function () {
    portfolioView();
  });

  function portfolioView() {
    console.log('portfolio open');

    $("#modal-portfolio-view").modal('show');
    $("#modal-portfolio-view-title").text('포트폴리오');
    $("#modal-portfolio-view-img").empty();
    div_tags = $("<div/>", {
      class: 'col-3'
    });
    img_tags = $("<img/>", {
      class: 'w100per mb-2',
      src: 'img/main/portfolio/portfolio_1.png'
    });
    div_tags.append(img_tags);
    $("#modal-portfolio-view-img").append(div_tags);
  }
});


// portfolio click event
