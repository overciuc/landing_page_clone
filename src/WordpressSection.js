/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import wordpressImage from './images/Wordpress_Logo.webp';

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

const starSymbol = css`
  font-size: 300%;
  color: #ffa503;
`;

export default function WordpressSection() {
  return (
    <section css={wordpressArea}>
      <div>
        <h5>We're biased... Read what our users say</h5>
        <p css={starSymbol}>&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        <a href="#1">5 Stars Based on 5,269 Real User Reviews</a>
      </div>
    </section>
  );
}
