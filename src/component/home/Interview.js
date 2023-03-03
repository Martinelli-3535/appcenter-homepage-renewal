import styled from "styled-components";
import {viewHeightCalc, viewWidthCalc} from "../../lib/viewportCalculate";
import {interviewAnswer, interViewQuestion} from "../../resource/data/aboutUs";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import {FreeMode, Pagination, Autoplay } from "swiper";


export default function Interview() {

    return (
        <InterViewWrapper>
            <QuestionText>
                <div>Q.</div>
                {interViewQuestion}
            </QuestionText>
            <InterViewScrollBox>
                <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={20}
                    freeMode={true}
                    grabCursor={true}
                    loop={true}
                    navigation={true}
                    modules={[FreeMode, Pagination,Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {
                        interviewAnswer.map((item) =>
                            <SwiperSlide>
                                <InterViewBox key={item.key}>
                                    <div className="answer">{item.answer}</div>
                                    <div className="name">{item.name}</div>
                                </InterViewBox>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </InterViewScrollBox>
        </InterViewWrapper>
    );
}

const InterViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${viewHeightCalc(144)};
`

const InterViewScrollBox = styled.div`
  flex-basis: 60%;
  white-space: nowrap;
  &::-webkit-scrollbar{
    display: none;
  }
  .swiper-slide {
    width: 70%;
  }
`

const QuestionText = styled.div`
  flex-basis: 40%;
  display: flex;
  color: ${props => props.theme.color.primary};
  font-weight: 600;
  white-space: pre-line;
  margin-right: ${viewWidthCalc(60)};
  font-size: ${props=>props.theme.fontSize.bigDesktop.subtitle};
  @media(max-width: 1800px) {
    font-size: ${props=>props.theme.fontSize.desktop.subtitle};
  }
  @media(max-width: 1200px) {
    font-size: ${props=>props.theme.fontSize.tablet.subtitle};
  }
  @media(max-width: 768px) {
    font-size: ${props=>props.theme.fontSize.smallTablet.subtitle};
  }
  @media(max-width: 576px) {
    font-size: ${props=>props.theme.fontSize.mobile.subtitle};
  }
  @media (max-width: 280px) {
    font-size: ${props => props.theme.fontSize.fold.subtitle};
  }
`

const InterViewBox = styled.div`
  flex-basis: 10%;
  align-items: flex-start;
  border-radius: 40px;
  background-color: ${props => props.theme.color.primaryLight};
  white-space: nowrap;
  .answer{
    white-space: pre-line;
  }
  .name {
    color: ${props => props.theme.color.primary};
    font-weight: 600;
    margin-top: ${viewHeightCalc(18)}
  }
  padding: 40px;
  @media(max-width: 1800px) {
    padding: 30px;
  }
  @media(max-width: 1200px) {
    padding: 28px;
  }
  @media(max-width: 768px) {
    border-radius: 30px;
    padding: 20px;
  }
  @media(max-width: 576px) {
    border-radius: 20px;
    padding: 16px;
  }
  @media (max-width: 280px) {
    border-radius: 10px;
    padding: 8px;
  }
`
