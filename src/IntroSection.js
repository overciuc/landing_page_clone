/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const introStyles = css`
  text-align: center;
  z-index: 100;
  position: relative;
  margin-top: 200px;
  max-width: 100%;
  justify-content: center;
  font-family: 'Questrial', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  > h1 {
    font-size: 52px;
    line-height: 1.1;
    font-weight: 600;
    margin: auto;
    color: #fff;
  }

  > p {
    font-size: 22px;
    color: #fff;
    line-height: 1.1;
    font-weight: normal;
    margin-bottom: 80px;
  }
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

  ${variant === 'filled' &&
  css`
    background-color: #65d49a;
    color: #fff;
    padding: 11px 40px;
    border-radius: 25px;
    font-size: 18px;
    letter-spacing: normal;
    margin-bottom: 40px;
  `}
`;

export default function IntroSection() {
  return (
    <>
      <section css={introStyles}>
        <h1>The World's Leading WordPress Website Builder</h1>
        <p>
          Join 5,000,000+ Professionals Who Build Better Sites With Elementor
        </p>
        <button css={buttonStyle('filled')}>GET STARTED</button>
      </section>
      ;
    </>
  );
}
