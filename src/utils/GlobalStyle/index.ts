import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {    
  line-height: 1.5;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  width: 100%;
  height: auto;
}

.ant-form-item .ant-form-item-label {
  font-weight: bold;
}

.text-right {
  text-align: right;
}

.w-100 {
  width: 100%;
}
`;

export default GlobalStyle;
