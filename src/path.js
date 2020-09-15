const getUserId = (pathname) => {
  const regx = /^\/users\/\d+$/;
  if (!regx.test(pathname)) return null;
  return pathname.slice(pathname.lastIndexOf("/") + 1);
};

export { getUserId };
