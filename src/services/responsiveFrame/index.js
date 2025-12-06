import "./style.css";

/**
 * @param {number} standardWidth - 원본 화면의 width (px 단위)
 * @param {number} standardHeight - 원본 화면의 height (px 단위)
 * @return {function()} 현재 화면의 크기대로 frame을 조정하는 함수
 */
export const getResizeEventListener = (standardWidth, standardHeight) => {
  return () => {
    const root = document.querySelector("#root");
    const loginContainer = document.querySelector("#login-container");

    if (!root || !loginContainer) return;

    // 원하는 해상도로 width, height 고정
    loginContainer.style.width = `${standardWidth}px`;
    loginContainer.style.height = `${standardHeight}px`;

    let width = root.clientWidth;
    let height = width * (standardHeight / standardWidth);

    // style.zoom을 이용하여, 화면 크기를 조정
    loginContainer.style.zoom = height / standardHeight;

    if (height > root.clientHeight) {
      height = root.clientHeight;
      width = height * (standardWidth / standardHeight);

      // style.zoom을 이용하여, 화면 크기를 조정
      loginContainer.style.zoom = width / standardWidth;
    }
  };
};