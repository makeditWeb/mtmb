
// 쿼리 스트링 파싱 함수
function getQueryParam(param) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

$(document).ready(function () {
  // service_wrap 요소들을 선택
  const serviceWraps = $('.service_wrap');
  const stepWraps = $('.step_wrap');

  const pptlist = $('.sub_title');

  // 각 요소에 순차적으로 애니메이션 지연 시간을 적용
  serviceWraps.each(function (index) {
    const $item = $(this).find('img');
    const delay = index * 2; // 각 요소마다 2초 간격으로 지연 시간 설정
    $item.css('animation-delay', `${delay}s`);
  });

  // 각 요소에 순차적으로 애니메이션 지연 시간을 적용
  stepWraps.each(function (index) {
    const $item = $(this).find('img');
    const delay = index * 2; // 각 요소마다 2초 간격으로 지연 시간 설정
    $item.css('animation-delay', `${delay}s`);
  });


  // 처음에 첫 번째 .ppt_wrap의 .accordion-panel을 열어두기
  $('.ppt_wrap:first .accordion-panel').show();
  $('.ppt_wrap:first .accordion-trigger').addClass('active');
  $('.ppt_wrap:first .accordion-trigger .accordion-trigger-arrow-img').attr('src', 'img/main/mobile/arrow_bottom.png');


  
  $('.ppt_index_wrap').click(function () {
    var index = $(this).index();
    $('.ppt_content').removeClass('active').eq(index).addClass('active');
    $('.ppt_index_wrap img').attr('src', 'img/main/text/title_arrow.png');
    $(this).find('img').attr('src', 'img/business/right_arrow_blue.png');
  });

  // 클릭할 인덱스를 쿼리 스트링에서 가져오기
  var clickIndex = getQueryParam('pptIndex');

  if (clickIndex !== null) {
    // 문자열을 정수로 변환
    clickIndex = parseInt(clickIndex) - 1;
    if (window.innerWidth > 992) {
      linkHashEventForPc(clickIndex);
    } else {
      linkHashEventForMobile(clickIndex);
    }
  }
});

function linkHashEventForPc(index) {
  // 해당 인덱스의 요소 클릭 시뮬레이션
  const scrollTargetElement = $('.ppt_container');
  var targetElement = $('.ppt_index_wrap').eq(index);
  if (targetElement.length) {
    targetElement.click();

    // 클릭 후 해당 요소로 스크롤
    $('html, body').animate({
      scrollTop: scrollTargetElement.offset().top  - 120
    }, 100); // 스크롤 애니메이션 시간 (밀리초)
  }
}

function linkHashEventForMobile(index) {
  // 해당 인덱스의 요소 클릭 시뮬레이션
  var targetElement = $('.mo .accordion-trigger').eq(index);
  if (targetElement.length) {
    if(index !== 0) {
      targetElement.click();
    }

    // 클릭 후 해당 요소로 스크롤
    $('html, body').animate({
      scrollTop: targetElement.offset().top
    }, 100); // 스크롤 애니메이션 시간 (밀리초)
  }
}