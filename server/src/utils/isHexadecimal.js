function isHexadecimal(str) {
  const re = new RegExp(/^[a-f0-9]+$/);
  return re.test(str);
}

export default isHexadecimal;
