$(document).ready(function () {

  // fullPage + swiper 설정
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
            if(anchorLink === 2&& index ===1 ) {
              $("#fp-nav").hide();
              $('#lnb').hide();
            } else {
              $("#fp-nav").show();
              $('#lnb').show();
            }
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
            // 첫 번째 색션일 경우 상단 로고 색상 흰 색으로 
            $('.menu_line').css({ 'background': '#fff' });
            $('.logo_text').css({ 'color': '#fff' });
          } else {
            $('.menu_line').css({ 'background': '#000' });
            $('.logo_text').css({ 'color': '#000' });
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

    } else {
      const viewportHeight = $(window).height();
      $(window).on('scroll', function () {
        const scrollPosition = $(window).scrollTop();
        $('.menu_line').css('background', scrollPosition >= viewportHeight ? '#000' : '#fff');
        $('.logo_text').css('color', scrollPosition >= viewportHeight ? '#000' : '#fff');
        $('.fp-nav').css('display', scrollPosition >= viewportHeight ? 'block' : 'none')
      });
    }
  };

  handleResize();


  $(".sub_menu li").click(function () {
    $(this).toggleClass("active");
  });



  // 처음에 첫 번째 .ppt_wrap의 .accordion-panel을 열어두기
  $('.ppt_wrap:first .accordion-panel').show();
  $('.ppt_wrap:first .accordion-trigger').addClass('active');
  $('.ppt_wrap:first .accordion-trigger .accordion-trigger-arrow-img').attr('src', 'img/main/mobile/arrow_bottom.png');


  // 프트폴리오 클릭 이벤트 정의
  $(".portfolio_wrap").on("click", function () {
    portfolioView();
  });

  // 프트폴리오 팝업 노출 함수
  function portfolioView() {
    $("#modal-portfolio-view").modal('show');
    $("#modal-portfolio-view-title").text('포트폴리오');
    $("#modal-portfolio-view-img").empty();
    div_tags = $("<div/>", {
      class: 'w50per'
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
