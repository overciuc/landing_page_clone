/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const textBetweenContainer = css`
  display: flex;
  width: 1300px;
  max-width: 75%;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  position: relative;
  text-align: center;
  flex-direction: column;
  font-family: 'Questrial', 'Franklin Gothic Medium', 'Arial Narrow', Arial,
    sans-serif;
  margin-top: 120px;

  > h5 {
    font-size: 40px;
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
`;

export default function PhenomenonHeadingSection() {
  return (
    <>
      <section css={textBetweenContainer}>
        <h5>A Truly Global Phenomenon</h5>
        <p>
          Elementor has crossed all boundaries and borders, reaching WordPress
          users around the globe. It's available in over 50 languages, offers
          complete RTL support, compatible with translation plugins like WPML
          and Polylang.
        </p>
      </section>
      ;
    </>
  );
}
