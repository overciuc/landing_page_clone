/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from './images/logo.webp';

const footer = css`
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  bottom: 0px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  min-height: 70px;

  > img {
    margin-left: auto;
  }
`;

const logoStyles = css`
  width: 45px;
  height: 45px;
  margin-right: 40px;
  margin-left: 40px;
`;

export default function FooterNavTab() {
  return (
    <>
      <footer css={footer}>
        <img css={logoStyles} src={logo} alt="Elementor logo" />
      </footer>
      ;
    </>
  );
}
