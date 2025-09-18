const setCookie = (name, value, days) => {
  document.cookie = `${name}=${value};path=/;max-age=${days * 24 * 60 * 60}`;
};

const getCookie = (cookieName) => {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

export { setCookie, getCookie };
