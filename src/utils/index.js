export { default as APIManager } from "./APIManager";
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const HOST_DOMAIN = process.env.REACT_APP_HOST_DOMAIN;

/**
 * 세션 체크
 * --
 * @returns
 */
export const checkSession = () => {
  const s = getCookie("ISLAB_TRACER");
  if (s && s.length >= 0) {
    return true;
  }
  return false;
};

export const logout = () => {
  deleteCookie("Authorization", { path: "/", domain: HOST_DOMAIN });
  deleteCookie("User_name", { path: "/", domain: HOST_DOMAIN });
  deleteCookie("ISGUARD_USER", { path: "/", domain: HOST_DOMAIN });
  const r = checkSession();
  if (r) {
    return false;
  }
  return true;
};

/**
 * 쿠키 가져오기
 * --
 * @param {String} name 쿠키명
 * @param {Object} options
 * @returns
 */
export const getCookie = (name, options = null) => {
  const value = window.document.cookie.match(
    "(^|;) ?" + name + "=([^;]*)(;|$)"
  );
  return value ? value[2] : null;
};

/**
 * 쿠키 저장하기
 * --
 * @param {String} name 저장할 쿠키명
 * @param {String} value 저장할 쿠키 내용
 * @param {Number} expires 저장할 기간(일)
 * @param {Function} callback 콜백함수
 */
export const setCookie = (name, value, expires = 1, callback = false) => {
  var date = new Date();
  date.setTime(date.getTime() + expires * 1000 * 60 * 60 * 24);
  window.document.cookie = `${name}=${value};expires=${date.toUTCString()}; path=/`;
  if (callback) callback();
};

/**
 * 쿠키 삭제
 * --
 * @param {String} name 쿠키명
 * @param {Object} param1 쿠키 주소, 도메인
 */
export const deleteCookie = (name, { path, domain }) => {
  if (getCookie(name)) {
    window.document.cookie =
      name +
      "=" +
      (path ? ";path=" + path : "") +
      (domain ? ";domain=" + domain : "") +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  }
};

export const RegEmail = (email) => {
  // eslint-disable-next-line
  const regEmail = /^[A-Za-z0-9_\.\-]+@islab+\.re+\.kr+/;
  const result = regEmail.test(email);
  return result;
};

export const ImgError = (e) => {
  return (e.target.src =
    "https://item.kakaocdn.net/do/c5c470298d527ef65eb52883f0f186c4d0bbab1214a29e381afae56101ded106");
};
