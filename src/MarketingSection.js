/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MarketingImage from './images/Elementor_marketing_image.png';

const intermediateSectionsImageLeft = css`
  display: flex;
  position: relative;
  margin: 0px auto;
  width: 1300px;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: 'Questrial', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 90px;

  #left {
    width: 60%;
    float: left;

    > img {
      max-width: 800px;
      max-height: 800px;
    }
  }

  #right {
    width: 40%;
    float: right;
    margin-left: 0px;
    padding-top: 90px;
    align-items: center;
    max-height: 800px;

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
      line-height: 1.2;
      padding-bottom: 40px;
    }

    > a {
      color: red;
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export default function MarketingSection() {
  return (
    <>
      <section css={intermediateSectionsImageLeft}>
        <div>
          <div id="right">
            <span>MARKETING</span>
            <div>
              Get More Traffic, Leads &amp;
              <br />
              Conversions
            </div>
            <p>
              Design forms visually, integrate them with your favorite marketing
              tools, and generate more traffic, leads &amp; conversions.
            </p>
            <a href="#1">Learn More »</a>
          </div>
          <div id="left">
            <img src={MarketingImage} alt="Elementor Marketing" />
          </div>
        </div>
      </section>
    </>
  );
}
