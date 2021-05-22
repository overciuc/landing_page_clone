/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import video from './images/Homepage_Main_Video.mp4';

const videoContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  margin-bottom: 120px;

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
    padding: 15px auto;
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

export default function VideoSection() {
  return (
    <>
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
      ;
    </>
  );
}
