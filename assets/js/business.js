$(document).ready(function () {
  let selectedIndex = 0;

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

    $('.ppt_index_wrap').click(function () {
        var index = $(this).index();
        $('.ppt_content').removeClass('active').eq(index).addClass('active');
        $('.ppt_index_wrap img').attr('src', 'img/main/text/title_arrow.png');
        $(this).find('img').attr('src', 'img/business/right_arrow_blue.png');
    });

});