/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const textBetweenContainer = css`
  display: flex;
  width: 1300px;
  max-width: 60%;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  position: relative;
  text-align: center;
  flex-direction: column;
  font-family: 'Questrial', 'Franklin Gothic Medium', 'Arial Narrow', Arial,
    sans-serif;

  > h5 {
    font-size: 45px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 25px;
    margin-top: 220px;
  }

  > p {
    font-size: 20px;
    color: #fff;
    line-height: 1.2;
    margin-top: auto;
    opacity: 0.7;
    margin-bottom: 75px;
    font-weight: normal;
    width: 70%;
  }

  > a {
    color: #cf1515;
    text-decoration: none;
    font-size: 18px;
  }
`;

const buttonStyle = (variant = 'empty') => css`
  border-radius: 25px;
  border-color: #fff;
  color: #fff;
  padding: 11px 40px;
  border-width: 2px;
  background-color: transparent;
  border-style: solid;
  letter-spacing: 0.6px;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  align-items: center;
  margin-right: 50px;
  width: 230px;
  :hover {
    background-color: #fff;
    color: #92003b;
  }

  ${variant === 'filled' &&
  css`
    background-color: #fff;
    color: #92003b;
    padding: 11px 50px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: normal;
    //margin-bottom: 80px;

    :hover {
      background-color: transparent;
      color: #fff;
    }
  `}
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
  height: 510px;
  margin-top: 80px;
`;

export default function SignUpSection() {
  return (
    <>
      <div css={gradientBackground}></div>
      <section css={textBetweenContainer}>
        <h5>Get Started With Elementor Today</h5>
        <p>
          Join millions of professionals who use Elementor to build WordPress
          websited faster and better than ever efore
        </p>
        <div>
          <button css={buttonStyle()}>GET STARTED</button>
          <button css={buttonStyle('filled')}>GO PRO</button>
        </div>
      </section>
    </>
  );
}
