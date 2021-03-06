$('.slider-block__list').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  appendArrows: $('.slider-block__arrows'),
  prevArrow: `<div class="main-arrow prev-arrow"><svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.01123 12.8298L12.1741 1.0364C12.5356 0.654533 13.123 0.654533 13.4844 1.0364C13.8385 1.41048 13.8385 2.00672 13.4844 2.3808L2.96028 13.4993L13.4844 24.6179C13.8385 24.992 13.8385 25.5882 13.4844 25.9623C13.3101 26.1465 13.0716 26.25 12.8318 26.25C12.597 26.25 12.356 26.1553 12.1776 25.9607L1.01783 14.1706C1.01753 14.1703 1.01723 14.17 1.01694 14.1697C0.661771 13.8006 0.662187 13.1985 1.01123 12.8298Z" fill="#333333" stroke="#333333" stroke-width="0.5"/></svg></div>`,
  nextArrow: `<div class="main-arrow next-arrow"><svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4888 12.8298L2.32587 1.0364C1.96442 0.654533 1.37701 0.654533 1.01556 1.0364C0.66148 1.41048 0.66148 2.00672 1.01556 2.3808L11.5397 13.4993L1.01556 24.6179C0.66148 24.992 0.66148 25.5882 1.01556 25.9623C1.18992 26.1465 1.42838 26.25 1.66824 26.25C1.90305 26.25 2.14404 26.1553 2.32239 25.9607L13.4822 14.1706C13.4825 14.1703 13.4828 14.17 13.4831 14.1697C13.8382 13.8006 13.8378 13.1985 13.4888 12.8298Z" fill="#333333" stroke="#333333" stroke-width="0.5"/></svg></div>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

$('.slideshow__list').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  appendArrows: $('.slideshow__arrows'),
  prevArrow: `<div class="main-arrow prev-arrow"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.01123 12.8298L12.1741 1.0364C12.5356 0.654533 13.123 0.654533 13.4844 1.0364C13.8385 1.41048 13.8385 2.00672 13.4844 2.3808L2.96028 13.4993L13.4844 24.6179C13.8385 24.992 13.8385 25.5882 13.4844 25.9623C13.3101 26.1465 13.0716 26.25 12.8318 26.25C12.597 26.25 12.356 26.1553 12.1776 25.9607L1.01783 14.1706C1.01753 14.1703 1.01723 14.17 1.01694 14.1697C0.661771 13.8006 0.662187 13.1985 1.01123 12.8298Z" fill="#f1c40f" stroke="#f1c40f" stroke-width="0.5"/></svg></div>`,
  nextArrow: `<div class="main-arrow next-arrow"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4888 12.8298L2.32587 1.0364C1.96442 0.654533 1.37701 0.654533 1.01556 1.0364C0.66148 1.41048 0.66148 2.00672 1.01556 2.3808L11.5397 13.4993L1.01556 24.6179C0.66148 24.992 0.66148 25.5882 1.01556 25.9623C1.18992 26.1465 1.42838 26.25 1.66824 26.25C1.90305 26.25 2.14404 26.1553 2.32239 25.9607L13.4822 14.1706C13.4825 14.1703 13.4828 14.17 13.4831 14.1697C13.8382 13.8006 13.8378 13.1985 13.4888 12.8298Z" fill="#f1c40f" stroke="#f1c40f" stroke-width="0.5"/></svg></div>`,
})
