/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './images/logo.webp';

const headerStyles = css`
  display: flex;
  margin-top: 0px;
  margin-bottom: 200px;
  top: 0px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 5px 17px 0 rgb(0 0 0 / 3%);
  background-color: #fff;
`;

const logoStyles = css`
  width: 45px;
  height: 45px;
  margin-right: 40px;
  margin-left: 40px;
`;

const headerRightNavStyles = css`
  display: flex;
  align-items: center;
  max-width: 1400px;
  min-height: 70px;
  margin: 0px auto;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  justify-content: space-evenly;
  font-size: 16px;
  z-index: 1001;
  padding: 1px 15px;
  line-height: 1.5;

  > div {
    margin-right: 40px;
  }
`;

const rightDivs = css`
  margin-left: auto;
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
    margin-bottom: 80px;
  `}
`;

const gradientOverlayStyles = css`
  background-image: linear-gradient(100deg, #f26798 0%, #3023ae 100%);
  background-image: transparent;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 1560px;
`;

export default function Header() {
  return (
    <>
      <div css={gradientOverlayStyles}></div>

      <header css={headerStyles}>
        <div css={headerRightNavStyles}>
          <img css={logoStyles} src={logo} alt="Elementor logo" />
          <div>Features</div>
          <div>Pricing</div>
          <div>Resources</div>
          <div>Help Center</div>
          <div>Blog</div>
          <div>Experts</div>
          <div css={rightDivs}>
            <div>My Account</div>
          </div>
          <div>
            <button css={buttonStyle()}>GET STARTED</button>
          </div>
        </div>
      </header>
    </>
  );
}
