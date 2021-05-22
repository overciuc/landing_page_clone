/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ThemeImage from './images/themeImage.png';

const intermediateSectionsImageRight = css`
  display: flex;
  position: relative;
  margin: 0px auto;
  width: 1300px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  font-family: 'Questrial', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 10px;
  vertical-align: middle;

  #right {
    width: 52%;
    float: right;
    margin: auto;

    > img {
      max-width: 800px;
      max-height: 800px;
    }
  }

  #left {
    width: 46%;
    float: left;
    padding-top: 50px;
    margin: auto;
    max-height: 800px;
    align-items: center;

    > span {
      color: red;
      font-size: 18px;
      font-weight: normal;
      line-height: 1;
      letter-spacing: 2px;
    }

    > div {
      font-size: 35px;
      line-height: 1.2;
      color: #343352;
      margin-top: 20px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    > p {
      text-align: left;
      width: 80%;
      line-height: 1.5;
      padding-bottom: 40px;
      font-size: 17px;
    }

    > a {
      color: red;
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export default function ThemeBuilderSection() {
  return (
    <>
      <section css={intermediateSectionsImageRight}>
        <div>
          <div id="left">
            <span>THEME BUILDER</span>
            <div>
              A Visual Guide to Site <br />
              Building
            </div>
            <p>
              Easily access and design each of your site parts - header, footer,
              product page and more - right within the Editor. <br />
              Streamline your workflow, gain control, and enchance your results
              with the visual Theme Builder.
            </p>
            <a href="#1">Learn More »</a>
          </div>
          <div id="right">
            <img src={ThemeImage} alt="Theme" />
          </div>
        </div>
      </section>
      ;
    </>
  );
}
