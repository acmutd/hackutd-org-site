// raster imports
import utd_department_cs from 'assets/img/sponsors/utd_department_cs.jpeg';
// SVG imports
// for further context, the reason these are in separate locations is because I didn't want to work on configuring
// an SVG loader for webpack for the default import; this could be a potential future improvement
const SVG_LOC = '/svg/sponsors';
const google = `${SVG_LOC}/google.svg`;
const statefarm = `${SVG_LOC}/statefarm.svg`;
const mlh = `${SVG_LOC}/mlh.svg`;
const capital_one = `${SVG_LOC}/capital_one.svg`;
const goldman_sachs = `${SVG_LOC}/goldman_sachs.svg`;
const facebook = `${SVG_LOC}/facebook.svg`;
const jpmorgan = `${SVG_LOC}/jpmorgan_chase.svg`;
const sticker_mule = `${SVG_LOC}/sticker_mule.svg`;

const SPONSORS = {
  GOOGLE: {
    name: 'Google',
    img: google
  },
  STATEFARM: {
    name: 'StateFarm',
    img: statefarm
  },
  MLH: {
    name: 'MLH',
    img: mlh
  },
  CAPITAL_ONE: {
    name: 'Capital One',
    img: capital_one
  },
  GOLDMAN_SACHS: {
    name: 'Goldman Sachs',
    img: goldman_sachs
  },
  FACEBOOK: {
    name: 'Facebook',
    img: facebook
  },
  UTD_DPT_CS: {
    name: 'UTD Department of Computer Science',
    img: utd_department_cs
  },
  JPMORGAN_CHASE: {
    name: 'JP Morgan Chase & Co.',
    img: jpmorgan
  },
  STICKER_MULE: {
    name: 'Sticker Mule',
    img: sticker_mule,
    link: 'https://mule.to/p33e' // note: link is custom for sponsorship purposes
  }
}

export default SPONSORS;