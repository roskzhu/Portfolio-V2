import React from 'react';
import styled from '@emotion/styled';

interface CardProps {
  card: {
    content: JSX.Element;
    answer: string;
    image: string;
    hoverImage: string;
  };
}

const CarouselCard: React.FC<CardProps> = ({ card }) => {
  return (
    <CardContainer bgImage={card.image} hoverImage={card.hoverImage}>
      <p className='content'>{card.content}</p>
      <p className='answer'>{card.answer}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div<{ bgImage: string; hoverImage: string }>`
  height: 200px;
  width: calc(95% - 70px);
  display: grid;
  border-radius: 6px;
  font-family: 'Rubik';
  font-weight: 600;
  font-size: 35px;
  position: relative;
  padding: 40px;
  align-items: center;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  .answer {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    opacity: 0;
    transition: opacity 300ms;
    font-size: 16px;
    text-align: center;
    justify-content: center;
    padding-top: 140px; /* Adjust the value to move the text lower */
  }
  .content {
    padding-top: 60px; /* Adjust the value to move the text lower */
    grid-column: 1;
    grid-row: 1;
    display: flex;
    transition: opacity 300ms;
    justify-content: center;
  }
  :hover {
    .content {
      opacity: 1;
    }
    .answer {
      opacity: 1;
    }
    background-image: url(${props => props.hoverImage});
    color: white;
  }
  span {
    background-image: linear-gradient(to bottom right, #FCA27C, #FF5AB4);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export default CarouselCard;
