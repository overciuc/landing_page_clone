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
  margin-top: 30px;
  //margin-bottom: -20px;
`;

const sectionHeading = css`
  font-family: 'Questrial', sans-serif;
  font-size: 50px;
  font-weight: normal;
  color: #343352;
  text-align: center;
  letter-spacing: 1px;
`;

export default function Heading() {
  return (
    <>
      <section css={headingContainer}>
        <h1 css={sectionHeading}>
          Built for Professionals <br />
          From Freelancer to Agency
        </h1>
      </section>
      ;
    </>
  );
}
