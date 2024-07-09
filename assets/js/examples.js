const titles = ["제안서", "강의자료", "소개서", "제안서", "비지니스 보고서"];
const descriptions = ["Proposal document", "Lecture materials", "Introduction", "Proposal document", "Business report"];

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
    }
  };

  $(window).resize(debounce(handleResize, 200)).resize();

  // $(".sub_menu li").click(function () {
  //   $(this).toggleClass("active");
  // });

  $('.accordion-trigger').click(function () {
    $('.accordion-panel').slideUp();
    $('.accordion-trigger').removeClass('active');
    $('.accordion-trigger .accordion-trigger-arrow-img').attr('src', 'img/main/text/title_arrow.png');

    if (!$(this).parent().find('.accordion-panel').is(':visible')) {
      $(this).parent().find('.accordion-panel').slideDown();
      $(this).addClass('active');
      $(this).find('.accordion-trigger-arrow-img').attr('src', 'img/main/mobile/arrow_bottom.png');
    }
  });

    // const originalList = $('.marquee-item-list');
    // const clonedList = originalList.clone();
    // $('.marquee-block').append(clonedList);

    // Intersection Observer 설정
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0 // 섹션이 조금이라도 보이면 콜백 실행
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $('.right-fixed').css('bottom', '240px')
        } else {
          $('.right-fixed').css('bottom', '10%')
        }
      });
    };

    const isLargeScreen = window.innerWidth > 992;
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const footerElement = document.querySelectorAll('.footer');
    observer.observe(footerElement[1]);
    
    const marqueeSetPc = () => {
      const root = document.documentElement;
      const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      const marqueeContent = document.querySelector(".pc ul.marquee-content");

      root.style.setProperty("--marquee-elements", marqueeContent.children.length);

      for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }

    const marqueeSetMobile = () => {
      const root = document.documentElement;
      const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      const marqueeContent = document.querySelector(".mo ul.marquee-content");

      root.style.setProperty("--marquee-elements", marqueeContent.children.length);

      for(let i=0; i<marqueeElementsDisplayed; i++) {
        marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      }
    }

    if(isLargeScreen) {
      marqueeSetPc();
    } else {
      marqueeSetMobile();
    }
});
