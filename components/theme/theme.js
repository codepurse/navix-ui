export const withCss = (value) => {
  var cssStyle = [];
  if (value.elements?.button) {
    for (let i = 0; i < value.elements?.button.length; i++) {
      cssStyle.push(value.elements?.button[i]);
    }
  }
  console.log(value.elements);
  return value.elements;
};
