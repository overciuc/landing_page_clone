/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DevelopmentImage from './images/Elementor_development_image.png';

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
  margin-top: 100px;
  vertical-align: middle;

  #right {
    width: 60%;
    float: right;
    margin: auto;

    > img {
      max-width: 800px;
      max-height: 800px;
    }
  }

  #left {
    width: 40%;
    float: left;
    padding-top: 120px;
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
      font-size: 16px;
    }

    > a {
      color: red;
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

const extraPadding = css`
  padding-top: 40px;
`;

const forBigImages = css`
  padding-bottom: 40px;
`;

export default function DevelopmentSection() {
  return (
    <>
      <section css={intermediateSectionsImageRight}>
        <div css={extraPadding}>
          <div id="left">
            <span>DEVELOPMENT</span>
            <div>
              Extendable &amp;
              <br />
              Development-Friendly
            </div>
            <p>
              Thousands of developers have contributed to the Elementor open
              source projects, building themes, add-ons, and products, further
              extending the functionality.
            </p>
            <a href="#1">Learn More »</a>
          </div>
          <div id="right">
            <img
              css={forBigImages}
              src={DevelopmentImage}
              alt="Elementor Development"
            />
          </div>
        </div>
      </section>
      ;
    </>
  );
}
