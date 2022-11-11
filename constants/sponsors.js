// raster imports
import utd_department_cs from 'assets/img/sponsors/utd_department_cs.png';
import toyota from 'assets/img/sponsors/toyota.png';
import eog from 'assets/img/sponsors/eog.png';
import sg from 'assets/img/sponsors/sg.png';
import cbre from 'assets/img/sponsors/CBRE.png';
import rc from 'assets/img/sponsors/rc.png';
import axxess from 'assets/img/sponsors/axxess.png';
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
const standout_stickers = `${SVG_LOC}/standout_stickers.svg`;
const ti = `${SVG_LOC}/ti.svg`;
const l3 = `${SVG_LOC}/l3.svg`;

const SPONSORS = {
  // MARK: - Added for HackUTD IX Sponsors
  EOG: {
    name: 'EOG Resources',
    img: eog,
    link: 'https://www.eogresources.com/'
  },
  TI: {
    name: 'Texas Instruments',
    img: ti,
    link: "https://www.ti.com/"
  },
  STUDENT_GOV: {
    name: 'UTD Student Government',
    img: sg,
    link: 'https://sg.utdallas.edu/'
  },
  CBRE: {
    name: 'CBRE',
    img: cbre,
    link: "https://www.cbre.com/"
  },
  RING_CENTRAL: {
    name: "Ring Central",
    img: rc,
    link: "https://www.ringcentral.com/"
  },
  L3_HARRIS: {
    name: "L3 Harris",
    img: l3,
    link: "https://www.l3harris.com/"
  },
  AXXESS: {
    name: "Axxess",
    img: axxess,
    link: "https://www.axxess.com/"
  },
  GOOGLE: {
    name: 'Google',
    img: google
  },
  STATEFARM: {
    name: 'StateFarm',
    img: statefarm,
    link: 'https://www.statefarm.com/'
  },
  MLH: {
    name: 'MLH',
    img: mlh,
    needs_white_bg: true
  },
  CAPITAL_ONE: {
    name: 'Capital One',
    img: capital_one,
    needs_white_bg: true,
    link: 'http://campus.capitalone.com/'
  },
  GOLDMAN_SACHS: {
    name: 'Goldman Sachs',
    img: goldman_sachs,
    link: 'http://www.goldmansachs.com/'
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
    img: jpmorgan,
    needs_white_bg: true
  },
  STICKER_MULE: {
    name: 'Sticker Mule',
    img: sticker_mule,
    link: 'https://mule.to/p33e', // note: link is custom for sponsorship purposes
    needs_white_bg: true
  },
  TOYOTA: {
    name: 'Toyota',
    img: toyota,
    link: 'https://www.toyota.com/'
  },
  STANDOUT_STICKERS: {
    name: "Standout Stickers",
    img: standout_stickers,
    link: 'http://hackp.ac/mlh-StandOutStickers-hackathons'
  }
}

export default SPONSORS;