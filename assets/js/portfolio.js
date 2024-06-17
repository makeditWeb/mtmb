
$(document).ready(function () {
  // service_wrap 요소들을 선택
  const serviceWraps = $('.service_wrap');

  // 각 요소에 순차적으로 애니메이션 지연 시간을 적용
  serviceWraps.each(function (index) {
    const $item = $(this).find('img');
    const delay = index * 2; // 각 요소마다 2초 간격으로 지연 시간 설정
    $item.css('animation-delay', `${delay}s`);
  });
  
  let itemsToShowPC = 8;
  let itemsToShowMobile = 4;
  const itemsIncrementPC = 8;
  const itemsIncrementMobile = 2;

  const totalItemsPC = $('.pc .portfolio_wrap').length;
  const totalItemsMobile = $('.mo .portfolio_wrap').length;

  const sentinelPC = document.getElementById('sentinelPC');
  const sentinelMO = document.getElementById('sentinelMO');

  // 처음 아이템을 표시
  $('.pc .portfolio_wrap:lt(' + itemsToShowPC + ')').css('display', 'flex');
  $('.mo .portfolio_wrap:lt(' + itemsToShowMobile + ')').css('display', 'flex');

  // Intersection Observer 설정
  const observerOptions = {
    root: document.querySelector('#infinite-scroll-section .fp-scroller'),
    rootMargin: '0px',
    threshold: 1.0
  };

  const observerPC = new IntersectionObserver((entries, observer) => {    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (itemsToShowPC < totalItemsPC) {
          setTimeout(() => {
            itemsToShowPC += itemsIncrementPC;
            $('.pc .portfolio_wrap:lt(' + itemsToShowPC + ')').css('display', 'flex');
            // 높이 재설정
            $.fn.fullpage.reBuild();
          }, 1000);
        }
      }
    });
  }, observerOptions);

  const observerMO = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.isIntersecting)
        if (itemsToShowMobile < totalItemsMobile) {
          setTimeout(() => {
            itemsToShowMobile += itemsIncrementMobile;
            $('.mo .portfolio_wrap:lt(' + itemsToShowMobile + ')').css('display', 'flex');
          }, 1000);
        }
      }
    });
  }, {
    root: document.querySelector('#infinite-scroll-section'),
    rootMargin: '0px',
    threshold: 1.0
  });

// Throttle/ Debounce 함수 추가 (선택 사항)
function throttle(fn, wait) {
  let time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  observerPC.unobserve(sentinelPC);
  observerMO.unobserve(sentinelMO);
  observerPC.observe(sentinelPC);
  observerMO.observe(sentinelMO);
}, 200));

  var $portfolioContainer = $('.fp-scroller');
  var $title = $('.title');
  var lastScrollTop = 0;

  function checkScroll() {
      var transformMatrix = $portfolioContainer.css('transform').match(/matrix.*\((.+)\)/);
      var scrollTop = transformMatrix ? parseFloat(transformMatrix[1].split(', ')[5]) : 0;

      if (scrollTop >= 0) {
          $title.addClass('scrolled');
      } else {
          $title.removeClass('scrolled');
      }

      lastScrollTop = scrollTop;
  }

  // setInterval(checkScroll, 100);
});

