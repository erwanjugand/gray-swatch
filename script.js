
const inputColor = document.querySelector('#input-color')
const inputRange = document.querySelector('#input-range')
const inputSwitch = document.querySelector('#input-switch')
const inputNumber = document.querySelector('#input-number')
const greyElement = document.querySelectorAll('.dynamic-grey')
inputColor.addEventListener('input', () => editGrey())
inputRange.addEventListener('input', () => {
  document.querySelector('#input-range-value').textContent = inputRange.value;
  editGrey()
})
inputSwitch.addEventListener('input', () => editGrey())
inputNumber.addEventListener('input', () => {
  document.querySelector('#input-number-value').textContent = inputNumber.value;
  editGrey()
})
const editGrey = () => {
  const {h, s, l} = hexToHSL(inputColor.value)
  const tintValue = +inputRange.value
  const exposantValue = +inputNumber.value
  const complementaryValue = inputSwitch.checked
  greyElement.forEach(element => {
    const lightness = element.getAttribute('data-grey')
    console
    const saturation = (tintValue === 0 ? 0 : Math.pow(100 - +lightness, exposantValue) / (Math.pow(100, exposantValue - 1) * 10)) * (tintValue / 10)
    const hue = (h + (complementaryValue ? 180  : 0))%360
    element.style.setProperty('--color-h', `${hue}`)
    element.style.setProperty('--color-s', `${saturation}%`)
    element.style.setProperty('--color-l', `${lightness}%`)
    element.setAttribute('data-name', HSLToHex(hue, saturation, lightness))
  })
}

document.querySelectorAll('.color-item').forEach(item => {
  item.addEventListener('click', () => {
    navigator.clipboard.writeText(item.getAttribute('data-name'))
  })
})

const hexToHSL = (H) => {
  let r = "0x", g = "0x", b = "0x";
  r += H[1] + H[2];
  g += H[3] + H[4];
  b += H[5] + H[6];
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
  cmax = Math.max(r,g,b),
  delta = cmax - cmin,
  h = 0,
  s = 0,
  l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {h, s, l}
}

const HSLToHex = (h,s,l) => {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}
editGrey()
