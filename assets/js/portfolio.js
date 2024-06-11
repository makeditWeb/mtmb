
$(document).ready(function () {
  // service_wrap 요소들을 선택
  const serviceWraps = $('.service_wrap');

  // 각 요소에 순차적으로 애니메이션 지연 시간을 적용
  serviceWraps.each(function (index) {
    const $item = $(this).find('img');
    const delay = index * 2; // 각 요소마다 2초 간격으로 지연 시간 설정
    $item.css('animation-delay', `${delay}s`);
  });
  

      let itemsToShow = 8;
      const itemsIncrement = 8;
      const portfolioList = $('.portfolio_list');
      const totalItems = $('.portfolio_wrap').length;

      const sentinel = document.getElementById('sentinel');

      // 처음 4개의 아이템을 표시
      $('.portfolio_wrap:lt(' + itemsToShow + ')').css('display', 'flex');

      // Intersection Observer 설정
      const observerOptions = {
        root: document.querySelector('#infinite-scroll-section .fp-scroller'),
        rootMargin: '0px',
        threshold: 1.0
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (itemsToShow < totalItems) {

              setTimeout(()=> {
                itemsToShow += itemsIncrement;
                $('.portfolio_wrap:lt(' + itemsToShow + ')').css('display', 'flex');
                // 높이 재설정
                $.fn.fullpage.reBuild();
              }, 1000)
            }
          }
        });
      }, observerOptions);

      // 마지막 아이템을 감시
      observer.observe(sentinel);


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

