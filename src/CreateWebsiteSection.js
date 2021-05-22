/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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

export default function CreateWebsiteSection() {
  return (
    <>
      <section css={textBetweenContainer}>
        <h5>Create Any Website You Can Imagine</h5>
        <p>
          Elementor was built for you. Designers, developers, marketers, and
          entrepreneurs. Create stunning landing pages, design a blog, customize
          your online store - everything is within reach!
        </p>
        <a href="#1">Visit Elementor Showcase »</a>
      </section>
      ;
    </>
  );
}
