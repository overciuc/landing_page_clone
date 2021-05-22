/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import WidgetImage from './images/widgetImage.png';

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
  margin-top: 150px;
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
    width: 47%;
    float: left;
    padding-top: 90px;
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

export default function WidgetSection() {
  return (
    <>
      <section css={intermediateSectionsImageRight}>
        <div>
          <div id="left">
            <span>WIDGETS</span>
            <div>
              Enjoy Over 80 Design <br />
              Elements
            </div>
            <p>
              Take advantage of the complete set of dedicated tools that help
              you generate more traffic, leads, and conversions. You don't need
              dozens of plugins anymore.
            </p>
            <a href="#1">Learn More »</a>
          </div>
          <div id="right">
            <img src={WidgetImage} alt="Widget" />
          </div>
        </div>
      </section>
      ;
    </>
  );
}
