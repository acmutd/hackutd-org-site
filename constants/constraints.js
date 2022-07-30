export default {
  DEFAULT: '700px',
  DEFAULT_RAW: 700,
  FOOTER_CONTENT: '900px',
  ABSOLUTE_POS_CENTER: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  ABSOLUTE_POS_CENTER_HORIZONTAL: `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,
  ABSOLUTE_POS_CENTER_VERTICAL: `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `,
  DEFAULT_BP: `@media only screen and (max-width: 700px)`,
  DEFAULT_BP_INVERSE: `@media only screen and (min-width: 700px)`,
  DEFAULT_MARGIN: '10px',
  DEFAULT_MOBILE_WIDTH: '95%'
}