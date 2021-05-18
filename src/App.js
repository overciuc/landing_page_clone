/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const backgroundStyles = css`
  background-color: #000000;
`;

const div = css`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #fff, /* inner white */ inset 20px 0 80px #f0f,
    /* inner left magenta short */ inset -20px 0 80px #0ff,
    /* inner right cyan short */ inset 20px 0 300px #f0f,
    /* inner left magenta broad */ inset -20px 0 300px #0ff,
    /* inner right cyan broad */ 0 0 50px #fff,
    /* outer white */ -10px 0 80px #f0f,
    /* outer left magenta */ 10px 0 80px #0ff; /* outer right cyan */
`;

function App() {
  return (
    <>
      <header></header>
      <main css={backgroundStyles}>
        <section>
          <h1>Hello World!</h1>
        </section>
        <section>
          <div css={div}></div>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
