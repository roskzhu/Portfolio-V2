import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-slick';
import '../styles/Carousel.css';
import CarouselCard from '../components/CarouselCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Carousel: React.FC = () => {
  const settings: any = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: 'hey',
  };

  const slider = useRef<Swiper>(null);

  return (
    <CarouselContainer>
      <Swiper ref={slider} {...settings}>
        {cards.map((card, index) => (
          <CarouselCard card={card} key={index} />
        ))}
      </Swiper>

      <CarouselControlContainer>
        <button className="carousel-control" onClick={() => slider.current?.slickPrev()}>
          <IoIosArrowBack />
        </button>
        <button className="carousel-control" onClick={() => slider.current?.slickNext()}>
          <IoIosArrowForward />
        </button>
      </CarouselControlContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  margin-left: 15px; // fix
  margin-top: -40px;
  p {
    font-family: 'Rubik', sans-serif; /* Change the font family */
    font-size: 30px; /* Change the font size */
  }
`;

const CarouselControlContainer = styled.div`
  align-self: center;
  display: flex;
`;

interface Card {
  content: JSX.Element;
  answer: string;
  image: string;
  hoverImage: string; // Add the hoverImage property
}

const cards: Card[] = [
  {
    content: <p>iSpy</p>,
    answer: 'click me see more',
    image: '/assets/ispy_light.png',
    hoverImage: '/assets/ispy_dark.png',
  },
  {
    content: <p>CollaboraCart</p>,
    answer: '',
    image: '/assets/collaboracart_light.png',
    hoverImage: '/assets/collaboracart_dark.png',
  },
  {
    content: <p>FridgeSmart</p>,
    answer: 'Computer vision recipe making AI.',
    image: '/assets/fridgesmart_light.png',
    hoverImage: '/assets/fridgesmart_dark.png',
  },
  {
    content: <p>Tetris</p>,
    answer: '',
    image: '/assets/tetris_light.png',
    hoverImage: '/assets/tetris_dark.png',
  },
];

export default Carousel;
