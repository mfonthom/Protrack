import styled from "styled-components";
import { Primary, Grey } from "../../../helpers/Colors";
import { Col, Row } from "../../../helpers/Container";

export const HeroText = styled.h1`
  font-size: 56px;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 54px;
  }
  @media (max-width: 768px) {
    font-size: 54px;
  }
  @media (max-width: 425px) {
    font-size: 43px;
  }
  @media (max-width: 375px) {
    font-size: 38px;
  }
  @media (max-width: 320px) {
    font-size: 32px;
  }
`;
export const HeroImg = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  width: 614px;
  height: 657px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 300px;
  border-top-right-radius: 300px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  @media (max-width: 1024px) {
    width: 450px;
    height: 550px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const RightSideImg = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  width: 90%;
  height: 500px;
  background-color: #ccc;
  background-size: cover;
  background-position: center;
  border-top-right-radius: 300px;
  border-bottom-right-radius: 300px;
  @media (max-width: 1024px) {
    width: 95%;
    height: 450px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 351px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;
export const LeftSideImg = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: auto;
  width: 90%;
  height: 500px;
  background-color: #ccc;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 300px;
  border-bottom-left-radius: 300px;
  @media (max-width: 1024px) {
    width: 95%;
    height: 520px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 351px;
    margin-top: 50px;
    margin-bottom: 70px;
  }
`;
export const HomeText = styled.div`
  margin-top: 13%;
`;
export const SpecialBg = styled.div`
  background-color: ${Primary[50]};
  height: auto;
  padding-bottom: 20px;
`;
export const Headings = styled.div`
  text-align: center;
  padding-top: 90px;
  padding-bottom: 100px;
`;

export const IconBg = styled.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  border-radius: 50%;
  background-color: ${Primary[100]};
  width: 100px;
  height: 100px;
  color: ${Primary[500]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubTab = styled.span`
  width: 400px;
  border-radius: 50px;
  padding: 5px;
  background-color: ${Grey[50]};
  display: flex;
  color: #000;
  margin-left: auto;
  margin-right: auto;
  .active {
    background-color: ${Primary[500]};
    color: #fff;
  }
  margin-bottom: 70px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;
export const Sub = styled.span`
  flex: 1;
  padding: 15px 15px;
  border-radius: 30px;
  background-color: none;
  color: #000;
  font-weight: 700;
  cursor: pointer;
`;
export const SubMenu = styled.div`
  background-color: ${Primary[50]};
  border-radius: 50px;
  padding: 15px;
  text-align: left;
  width: 90%;
  :hover {
    border: 2px solid ${Primary[500]};
  }
  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 30px;
    width: 95%;
  }
`;
export const YearPrice = styled.div`
  padding-top: 40px;
  font-size: 56px;
  font-weight: 400;
  @media (max-width: 768px) {
    display: flex;
    justify-content: left;
    font-size: 50px;
  }
  @media (max-width: 425px) {
    display: flex;
    justify-content: left;
    font-size: 42px;
  }
`;
export const SubHeader = styled.div`
  font-weight: 700;
  border-radius: 35px;
  background-color: #fff;
  color: ${Grey[500]};
  padding: 30px 15px;
  margin-bottom: 20px;
  ${SubMenu}:hover & {
    background-color: ${Primary[500]};
    color: #fff;
  }
  @media (max-width: 768px) {
    ${Row}:nth-child(1) {
      display: flex;
      flex-direction: row;
    }
  }
`;
export const SubList = styled.div`
  border-radius: 35px;
  background-color: #fff;
  color: ${Grey[400]};
  padding: 5px 15px;
  margin: 20px 0;
`;
export const SubButton = styled.button`
  border: 2px solid ${Primary[500]};
  width: inherit;
  border-radius: 35px;
  background-color: ${Primary[50]};
  color: ${Primary[500]};
  padding: 5px 15px;
  margin: 20px 0;
`;
export const Testimonial = styled.div`
  border-radius: 20px;
  background-color: #fff;
  color: ${Grey[800]};
  padding: 30px;
  padding-bottom: 10px;
  display: flex;
  ${Col}:nth-child(1) {
    flex: 1;
    padding-top: 10px;
  }
  ${Col}:nth-child(2) {
    flex: 3;
    padding-left: 30px;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const TestimonialPic = styled.div`
  border-radius: 50%;
  background-color: ${Primary[100]};
  width: 100px;
  height: 100px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const TestimonialDetails = styled.div`
  text-align: left;
  line-height: normal;
`;
