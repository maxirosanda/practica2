
$(document).ready(function(){
    $('.cards').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1298,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 974,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 646,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      });
  });

  $(document).ready(function(){
    $('.navegador__lista').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 636,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: true,
              
              }
            },
            {
                breakpoint: 430,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerMode: true,
                
                }
              },
            
          ]
       
      });
  });