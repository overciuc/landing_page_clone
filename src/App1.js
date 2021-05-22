/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CreateWebsiteSection from './CreateWebsiteSection';
import DesignSection from './DesignSection';
import DevelopmentSection from './DevelopmentSection';
import ExpertSection from './ExpertSection';
import Header from './Header';
import Heading from './Heading';
import logo from './images/logo.webp';
import MarketingSection from './MarketingSection';
import UserCommentSection from './UserCommentSection';
import VideoSection from './VideoSection';
import WordpressSection from './WordpressSection';

/*
import carouselImage from './images/carouselImage.jpg';
import DesignImage from './images/Elementor_design_image.png';
import DevelopmentImage from './images/Elementor_development_image.png';
import MarketingImage from './images/Elementor_marketing_image.png';
import ExpertsImage from './images/experts-homepage.png';
import video from './images/Homepage_Main_Video.mp4';
import leftImage from './images/leftImage.webp';

import profilePicture from './images/profilePicture.webp';
import rightImage from './images/rightImage.webp';
import wordpressImage from './images/Wordpress_Logo.webp';
*/
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

const mainStyles = css`
  position: relative;
  z-index: 200;
  margin-top: 200px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;

  > section {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    width: 1300px;
  }
`;

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

const videoContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  margin-bottom: 130px;

  > video {
    max-width: 100%;
    position: relative;
    width: 1140px;
    height: 641.25px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const threeStatements = css`
  display: flex;
  justify-content: space-evenly;
  width: 1300px;
  margin: 0px auto;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 5px;
  max-width: 100%;
  margin-bottom: 120px;

  > div {
    margin-right: 10px;
    margin-left: 10px;
    padding: 20px;
  }

  > div > h3 {
    font-size: 25px;
    font-weight: bold;
  }

  > div > span {
    justify-content: space-evenly;
    margin: 0px auto;
  }
`;

const headingContainer = css`
  display: flex;
  width: 1200px;
  max-width: 50%;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  position: relative;
  //margin-bottom: 130px;
`;

const sectionHeading = css`
  font-family: 'Questrial', sans-serif;
  font-size: 50px;
  font-weight: normal;
  color: #343352;
  text-align: center;
  letter-spacing: 1px;
`;

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

const textBetweenContainer = css`
  display: flex;
  width: 1300px;
  max-width: 60%;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  position: relative;
  text-align: center;
  flex-direction: column;
  font-family: 'Questrial', 'Franklin Gothic Medium', 'Arial Narrow', Arial,
    sans-serif;

  > h5 {
    font-size: 35px;
    color: #343352;
    font-weight: bold;
    margin-bottom: 25px;
  }

  > p {
    font-size: 20px;
    color: #343352;
    line-height: 1.5;
    margin-top: auto;
    opacity: 0.7;
    margin-bottom: 30px;
  }

  > a {
    color: #cf1515;
    text-decoration: none;
    font-size: 18px;
  }
`;

const starSymbol = css`
  font-size: 300%;
  color: #ffa503;
`;
/*
const wordpressArea = css`
  display: flex;
  width: 1300px;
  max-width: 60%;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  position: relative;
  text-align: center;
  flex-direction: column;
  font-family: 'Questrial', 'Franklin Gothic Medium', 'Arial Narrow', Arial,
    sans-serif;

  > div {
    background-image: url(${wordpressImage});
    background-repeat: no-repeat;
    background-size: 170px;
    background-position: center;
  }

  > div > h5 {
    font-size: 30px;
    color: #343352;
    font-weight: bold;
  }

  > div > p {
    padding-top: 30px;
    margin: auto;
    margin-bottom: 15px;
  }

  > div > a {
    color: #343352;
    font-size: 22px;
    opacity: 0.7;
    margin: auto;
  }
`;
*/
const userComment = css`
  display: flex;
  width: 1300px;
  max-width: 70%;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  position: relative;
  text-align: center;
  flex-direction: column;
  font-family: 'Questrial', 'Franklin Gothic Medium', 'Arial Narrow', Arial,
    sans-serif;

  > h5 {
    font-size: 30px;
    color: #343352;
    font-weight: normal;
    line-height: 1.5;
    margin-top: 5px;
    margin-bottom: 2px;
  }

  > div > div {
    padding-top: 12px;
    text-align: left;

    > span {
      font-weight: bold;
      letter-spacing: 1px;
    }

    > img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
      float: left;
      margin-right: 15px;
    }
  }
`;
/*
const imageCarousel = css`
  display: flex;
  width: 1300px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  position: relative;

  > div {
    background-image: url(${carouselImage});
    background-repeat: no-repeat;
    background-position: center;
    max-width: 800px;
    max-height: 600px;

    #floatRight {
      float: right;
      //width: 50%;
      margin-right: 0px;

      > img {
        max-height: 200px;
        max-width: 200px;
      }
    }

    #floatLeft {
      float: left;
      //width: 50%;
      margin-left: 0px;

      > img {
        max-height: 200px;
        max-width: 200px;
      }
    }
  }
`;
*/
const gradientBackground = css`
  background-image: linear-gradient(100deg, #f26798 0%, #3023ae 100%);
  background-image: transparent;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  width: 100%;
  height: 710px;
`;

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

function App() {
  return (
    <>
      <Header />

      {/*
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
*/}
      <main css={mainStyles}>
        <section css={introStyles}>
          <h1>The World's Leading WordPress Website Builder</h1>
          <p>
            Join 5,000,000+ Professionals Who Build Better Sites With Elementor
          </p>
          <button css={buttonStyle('filled')}>GET STARTED</button>
        </section>

        <VideoSection />

        {/*
        <section>
          <div css={videoContainer}>
            <video loop alt="Homepage Video" autoplay="autoplay">
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <div css={threeStatements}>
            <div>
              <h3>All-in-One Solution</h3>
              <span>
                Control every aspect of your web design workflow from one place.
              </span>
            </div>
            <div>
              <h3>Visual Design</h3>
              <span>
                Simple. Powerful. Flexible. Experience the power of 100% visual
                design.
              </span>
            </div>
            <div>
              <h3>Faster Performance</h3>
              <span>
                Build websites that load faster, and speed up the process of
                building them.
              </span>
            </div>
          </div>
        </section>
*/}
        <Heading />
        {/*
        <section css={headingContainer}>
          <h1 css={sectionHeading}>
            Built for Professionals <br />
            From Freelancer to Agency
          </h1>
        </section>
        */}
        <DesignSection />
        {/*
        <section css={intermediateSectionsImageRight}>
          <div>
            <div id="left">
              <span>DESIGN</span>
              <div>
                Pixel Perfect Design in <br />
                WordPress
              </div>
              <p>
                The only complete design platform to offer pixel perfect design,
                yet produces 100% clean code. Take your design vision and turn
                it into a stunning custom-made website.
              </p>
              <a href="#1">Learn More »</a>
            </div>
            <div id="right">
              <img src={DesignImage} alt="Elementor Designer" />
            </div>
          </div>
        </section>
        */}
        <MarketingSection />
        {/*
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
                Design forms visually, integrate them with your favorite
                marketing tools, and generate more traffic, leads &amp;
                conversions.
              </p>
              <a href="#1">Learn More »</a>
            </div>
            <div id="left">
              <img src={MarketingImage} alt="Elementor Marketing" />
            </div>
          </div>
        </section>
        */}
        <DevelopmentSection />
        {/*
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
        */}
        <CreateWebsiteSection />
        {/*
        <section css={textBetweenContainer}>
          <h5>Create Any Website You Can Imagine</h5>
          <p>
            Elementor was built for you. Designers, developers, marketers, and
            entrepreneurs. Create stunning landing pages, design a blog,
            customize your online store - everything is within reach!
          </p>
          <a href="#1">Visit Elementor Showcase »</a>
        </section>
*/}
        {/*
        <div css={imageCarousel}></div>

        <section>
          <div>
            <div id="#floatRight">
              <img src={rightImage} alt="image1"></img>
            </div>
            <div id="#floatLeft">
              <img src={leftImage} alt="image2"></img>
            </div>
          </div>
        </section>
*/}
        <WordpressSection />
        {/*
        <section css={wordpressArea}>
          <div>
            <h5>We're biased... Read what our users say</h5>
            <p css={starSymbol}>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <a href="#1">5 Stars Based on 5,269 Real User Reviews</a>
          </div>
        </section>
*/}
        <UserCommentSection />
        {/*
        <section css={userComment}>
          <h5>
            "I'm totally blown away by this product - it's a designers dream.
            WordPress here I come!"
          </h5>
          <div>
            <div>
              <img src={profilePicture} alt="profilePicture" />
            </div>
            <div>
              <span>Justin Easthall</span> @EasthallDesign
            </div>
          </div>
        </section>
*/}

        <ExpertSection />
        {/*
        <div css={gradientBackground}></div>

        <section css={intermediateSectionsImageRight}>
          <div>
            <div id="left">
              <span>DESIGN</span>
              <div>
                Pixel Perfect Design in <br />
                WordPress
              </div>
              <p>
                The only complete design platform to offer pixel perfect design,
                yet produces 100% clean code. Take your design vision and turn
                it into a stunning custom-made website.
              </p>
              <a href="#1">Learn More »</a>
            </div>
            <div id="right">
              <img src={ExpertsImage} alt="Experts Homepage" />
            </div>
          </div>
        </section>
*/}
      </main>
      <footer css={footer}>
        <img css={logoStyles} src={logo} alt="Elementor logo" />
      </footer>
    </>
  );
}

export default App;
