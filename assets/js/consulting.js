$(document).ready(function () {
  let selectedIndex = 0;

  // service_wrap 요소들을 선택
  const serviceWraps = $('.service_wrap');

  // 각 요소에 순차적으로 애니메이션 지연 시간을 적용
  serviceWraps.each(function (index) {
    const $item = $(this).find('img');
    const delay = index * 2; // 각 요소마다 2초 간격으로 지연 시간 설정
    $item.css('animation-delay', `${delay}s`);
  });

  // partnerSwiperOne
  var partnerSwiper = new Swiper(".consulting_partnerSwiper", {
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


    // 초기 설정: 첫 번째 단계인 .step_0에 .active 클래스를 추가
    $('.step_0').addClass('active');

    // 단계 전환 함수
    function goToStep(currentStep, nextStep) {
        $(currentStep).removeClass('active');
        $(nextStep).addClass('active');

        if(currentStep == '.step_0') {
          $(currentStep).css({'display': 'none'});
        }

        if(currentStep === '.step_01' && nextStep === '.step_0') {
          $(nextStep).css({'display': 'flex'});
        }
    }

    // .right_wrap span:nth-child(2)를 클릭했을 때 첫 번째 단계에서 두 번째 단계로 이동
    $('.step_0 .right_wrap span:nth-child(2)').on('click', function() {
        goToStep('.step_0', '.step_01');
    });

    // 각 단계별 .prev 클릭 이벤트
    $('.step_01 .step_control_container .prev').on('click', function() {
        goToStep('.step_01', '.step_0');
    });

    $('.step_02 .step_control_container .prev').on('click', function() {
        goToStep('.step_02', '.step_01');
    });

    $('.step_03 .step_control_container .prev').on('click', function() {
        goToStep('.step_03', '.step_02');
    });

    $('.step_04 .step_control_container .prev').on('click', function() {
        goToStep('.step_04', '.step_03');
    });

    $('.step_05 .step_control_container .prev').on('click', function() {
        goToStep('.step_05', '.step_04');
    });

    // 각 단계별 .next 클릭 이벤트
    $('.step_01 .step_control_container .next').on('click', function() {
        goToStep('.step_01', '.step_02');
    });

    $('.step_02 .step_control_container .next').on('click', function() {
        goToStep('.step_02', '.step_03');
    });

    $('.step_03 .step_control_container .next').on('click', function() {
        goToStep('.step_03', '.step_04');
    });

    $('.step_04 .step_control_container .next').on('click', function() {
        goToStep('.step_04', '.step_05');
    });

});


let consulting_index = 0;

