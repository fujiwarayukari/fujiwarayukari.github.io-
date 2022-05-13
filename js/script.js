
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ハンバーガーメニュー
  $('.js-hamburger').on('click', function (){
    if ($('.js-hamburger').hasClass('is-open')){
      $('.js-drawer-menu').fadeOut();
      $(this).removeClass('is-open');
    } else {
      $('.js-drawer-menu').fadeIn();
      $(this).addClass('is-open');
    }
  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
});



// slickスライダー
$(".slider").slick({
  arrows: false, //矢印消す
  autoplay: true,  //自動再生
  autoplaySpeed: 3000,
  dots: true,  //ページネーション表示
  dotsClass: "slide-dots" //class名を変更する(デフォルトのスタイル解除)（デフォルトはslick-dots）
});


// トップへ戻るボタン
var page_top = $('#js-scroll-top')
  $(window).scroll(function () {
    //どれくらいスクロールしたら出現させるか
    if ($(this).scrollTop() > 450) {
      page_top.addClass('is-fadein')
    } else {
      page_top.removeClass('is-fadein')
    }
  })
  page_top.on('click', function () {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      500
    )
    return false
  })


});
