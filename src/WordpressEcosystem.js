/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import EcosystemImage from './images/ecosystemImage.png';

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
  margin-top: 50px;

  #left {
    width: 52%;
    float: left;

    > img {
      max-width: 800px;
      max-height: 800px;
    }
  }

  #right {
    width: 41%;
    float: right;
    margin-left: 0px;
    padding-top: 200px;
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
      width: 94%;
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

export default function PopupBuilderSection() {
  return (
    <section css={intermediateSectionsImageLeft}>
      <div>
        <div id="right">
          <span>WORDPRESS ECOSYSTEM</span>
          <div>
            Works Perfect With Any
            <br />
            Theme &amp; Plugin
          </div>
          <p>
            Elementor works seamlessly with almost any WordPress theme and
            plugin, so you can continue to use your favorite tools and take your
            work to the next level.
          </p>
        </div>
        <div id="left">
          <img src={EcosystemImage} alt="Elementor Marketing" />
        </div>
      </div>
    </section>
  );
}
