/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CommunityIcon from './images/community.webp';
import EducationIcon from './images/education.webp';
import LegoIcon from './images/lego_blocks.webp';
import NetworkIcon from './images/network.webp';

const resourseSection = css`
  display: flex;
  width: 1200px;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  position: relative;
`;

const h1 = css`
  display: flex;
  width: 1200px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'Questrial', sans-serif;
  font-size: 40px;
  margin: 200px auto 60px;
  font-weight: normal;
`;

const buttonStyle = css`
  box-shadow: 0px 0px 20px #cfcfcf;
  padding: 40px 20px 5px;
  background-color: #fff;
  border: none;
  letter-spacing: 0.6px;
  font-size: 16px;
  font-family: 'Questrial', sans-serif;
  font-weight: normal;
  align-items: center;
  width: 250px;
  height: 350px;

  :hover {
    box-shadow: 0px 0px 20px #b5b3b3;
  }

  > h6 {
    font-size: 16px;
    color: #343352;
    margin-top: 25px;
  }

  > div > img {
    max-width: 90px;
    max-height: 90px;
    margin-top: -50px;
  }

  > p {
    font-size: 14px;
    color: #343352;
    margin-top: -15px;
    margin-bottom: 30px;
    line-height: 1.3;
    opacity: 0.7;
  }

  > a {
    color: #db3157;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
`;

export default function MoreResourcesSection() {
  return (
    <>
      <h1 css={h1}>Exprole More Resources</h1>
      <div css={resourseSection}>
        <div>
          <button css={buttonStyle}>
            <div>
              <img src={LegoIcon} alt="Add-ons" />
            </div>
            <h6>Add-ons</h6>
            <p>
              Take advantage of the many add-ons that add functionality to
              Elementor
            </p>
            <a href="#1">Learn More »</a>
          </button>
        </div>

        <div>
          <button css={buttonStyle}>
            <div>
              <img src={NetworkIcon} alt="Hosting" />
            </div>
            <h6>Hosting</h6>
            <p>
              Get the most reliable hosting package, highly compatible with
              Elementor
            </p>
            <a href="#1">Learn More »</a>
          </button>
        </div>

        <div>
          <button css={buttonStyle}>
            <div>
              <img src={EducationIcon} alt="Education" />
            </div>
            <h6>Education</h6>
            <p>Follow our in-depth tutorials and become an Elementor expert</p>
            <a href="#1">Learn More »</a>
          </button>
        </div>

        <div>
          <button css={buttonStyle}>
            <div>
              <img src={CommunityIcon} alt="Community" />
            </div>
            <h6>Community</h6>
            <p>
              Join our worldwide community, and get advice from other members
            </p>
            <a href="#1">Learn More »</a>
          </button>
        </div>
      </div>
    </>
  );
}
