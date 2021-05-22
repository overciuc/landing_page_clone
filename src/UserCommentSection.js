/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import profilePicture from './images/profilePicture.webp';

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
  margin-bottom: 40px;

  > h5 {
    font-size: 35px;
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

export default function UserCommentSection() {
  return (
    <>
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
      ;
    </>
  );
}
