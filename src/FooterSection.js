/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const textBetweenContainer = css`
  display: flex;
  width: 1300px;
  max-width: 100%;
  justify-content: space-between;
  position: relative;
  font-family: 'Questrial', 'Franklin Gothic Medium', 'Arial Narrow', Arial,
    sans-serif;
  margin-top: 80px;
  float: left;
  padding-left: 100px;
  margin: 80px auto;

  > div > h5 {
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: left;
    letter-spacing: 1px;
  }

  > div > p {
    color: #878787;
    font-size: 15px;
    width: 400px;
  }

  > div > input {
    width: 285px;
    height: 37px;
    border: none;
    ::placeholder {
      padding-left: 15px;
    }
  }

  > div > button {
    width: 110px;
    height: 39px;
    background-color: #65d49a;
    color: #fff;
    border: none;
    border-color: transparent;
    :hover {
      background-color: #db3157;
    }
  }

  > div > ul {
    list-style-type: none;
    justify-content: left;
    padding: 0;
    margin: 0;

    > li > a {
      color: #878787;
      text-decoration: none;
      font-size: 15px;
      line-height: 1.2;
    }
  }
`;

const gradientBackground = css`
  background-color: #2a323d;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 510px;
  margin-top: 50px;
`;

const extraMarginOnLeft = css`
  margin-left: 50px;
`;

const copyRight = css`
  color: #fff;
  font-size: 12px;
  margin-top: 250px;
  margin-right: 0px;
`;
export default function FooterSection() {
  return (
    <>
      <div css={gradientBackground} />
      <section css={textBetweenContainer}>
        <div>
          <h5>FEATURES</h5>
          <ul>
            <li>
              <a href="#1">Overview</a>
            </li>
            <li>
              <a href="#1">Editor</a>
            </li>
            <li>
              <a href="#1">Design</a>
            </li>
            <li>
              <a href="#1">Marketing</a>
            </li>
            <li>
              <a href="#1">Development</a>
            </li>
            <li>
              <a href="#1">Theme Builder</a>
            </li>
            <li>
              <a href="#1">Experts</a>
            </li>
            <li>
              <a href="#1">Popup Builder</a>
            </li>
            <li>
              <a href="#1">Widgets</a>
            </li>
            <li>
              <a href="#1">Integrations</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>RESOURCES</h5>
          <ul>
            <li>
              <a href="#1">Blog</a>
            </li>
            <li>
              <a href="#1">Community</a>
            </li>
            <li>
              <a href="#1">Showcase</a>
            </li>
            <li>
              <a href="#1">Hosting</a>
            </li>
            <li>
              <a href="#1">Add-ons</a>
            </li>
            <li>
              <a href="#1">Hello Theme</a>
            </li>
            <li>
              <a href="#1">Template Library</a>
            </li>
            <li>
              <a href="#1">Affiliate Program</a>
            </li>
            <li>
              <a href="#1">Website Tutorials</a>
            </li>
            <li>
              <a href="#1">Free WordPress Themes</a>
            </li>
            <li>
              <a href="#1">Portfolio Website Builder</a>
            </li>
            <li>
              <a href="#1">One Page Website Builder</a>
            </li>
            <li>
              <a href="#1">Funnel Builder</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>SUPPORT</h5>
          <ul>
            <li>
              <a href="#1">Help Center</a>
            </li>
            <li>
              <a href="#1">Support</a>
            </li>
            <li>
              <a href="#1">Developers</a>
            </li>
            <li>
              <a href="#1">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>ABOUT</h5>
          <ul>
            <li>
              <a href="#1">About Us</a>
            </li>
            <li>
              <a href="#1">Pricing</a>
            </li>
            <li>
              <a href="#1">Careers</a>
            </li>
            <li>
              <a href="#1">Trademark</a>
            </li>
            <li>
              <a href="#1">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#1">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div css={extraMarginOnLeft}>
          <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <p>
            Join our 2,153,054 newsletter subscribers amd get the latest news
            and articles sent straight to your inbox weekly
          </p>
          <input placeholder="Enter your email Address" type="text" />
          <button>Subscribe</button>

          <p>
            By entering your email, you agree to our
            <a href="#1">Terms &amp; Conditions</a> and
            <a href="#1">Privacy Policy</a>
          </p>
          <p css={copyRight}>&copy; Elementor. All rights reserved</p>
        </div>
      </section>
    </>
  );
}
