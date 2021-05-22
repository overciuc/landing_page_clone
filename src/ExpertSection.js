/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ExpertsImage from './images/experts-homepage.png';

const intermediateSectionsImageRight = css`
  display: flex;
  position: relative;
  margin: 0px auto;
  width: 1300px;
  max-width: 100%;
  //justify-content: center;
  align-items: center;
  font-family: 'Questrial', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 100px;
  //vertical-align: middle;

  #right {
    width: 48%;
    float: right;

    > img {
      max-width: 800px;
      max-height: 800px;
      margin-bottom: 10px;
      margin-top: -30px;
    }
  }

  #left {
    width: 52%;
    float: left;
    padding-top: 100px;
    margin: auto;
    max-height: 800px;
    align-items: center;
    //margin-right: 10px;
    text-align: left;

    > div {
      font-size: 36px;
      line-height: 1;
      letter-spacing: 2px;
      color: #fff;
      margin-top: 30px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    > p {
      text-align: left;
      width: 80%;
      line-height: 1.5;
      padding-bottom: 40px;
      font-size: 16px;
      color: #fff;
    }
  }
`;

const gradientBackground = css`
  background-image: linear-gradient(100deg, #f26798 0%, #3023ae 100%);
  background-image: transparent;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 710px;
`;

const buttonStyle = (variant = 'empty') => css`
  border-radius: 20px;
  border-color: #65d49a;
  color: #65d49a;
  padding: 6px 27px 6px;
  border-width: 2px;
  background-color: transparent;
  border-style: solid;
  letter-spacing: 0.6px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: normal;
  align-items: center;
  //box-shadow: 1px -2px 5px black;

  ${variant === 'filled' &&
  css`
    background-color: #65d49a;
    color: #fff;
    padding: 11px 40px;
    border-radius: 25px;
    font-size: 18px;
    letter-spacing: normal;
    margin-bottom: 80px;
  `}

  :hover {
    background-color: #db3157;
    border-color: #db3157;
  }
`;

export default function ExpertSection() {
  return (
    <>
      <div css={gradientBackground}></div>

      <section css={intermediateSectionsImageRight}>
        <div>
          <div id="left">
            <div>
              NEW! Elementor Experts. <br />
              A Discovery Network for Pro <br />
              Users
            </div>
            <p>
              Showcase your best work, discover leading web creators,
              collaborate &amp; grow your business by hiring and getting hired
              by other experts.
            </p>
            <button css={buttonStyle('filled')}>LEARN MORE</button>
          </div>
          <div id="right">
            <img src={ExpertsImage} alt="Experts Homepage" />
          </div>
        </div>
      </section>
    </>
  );
}
