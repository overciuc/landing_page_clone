/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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
  font-size: 45px;
  font-weight: normal;
  color: #343352;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 100px;
  line-height: 2;
`;

export default function FeatureHeading() {
  return (
    <>
      <section css={headingContainer}>
        <h1 css={sectionHeading}>Features You'll Come to Rely On</h1>
      </section>
      ;
    </>
  );
}
