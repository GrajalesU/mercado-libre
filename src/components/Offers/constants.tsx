import SliderArrow from '@/components/SliderArrow';

export const OFFER_SLIDER_SETTINGS = {
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  nextArrow: <SliderArrow variant='next' />,
  prevArrow: <SliderArrow variant='prev' />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        dots: true,
        nextArrow: <></>,
        prevArrow: <></>,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
        nextArrow: <></>,
        prevArrow: <></>,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: <></>,
        prevArrow: <></>,
      },
    },
  ],
};
