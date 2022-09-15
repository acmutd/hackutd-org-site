import gamejam from 'assets/img/hack_titles/gamejam.png';
import seven_title from 'assets/img/hack_titles/vii.svg';
import eight_title from 'assets/img/hack_titles/viii.png';
import six_title from 'assets/img/hack_titles/vi.png';
import nineteen_title from 'assets/img/hack_titles/19.png';
import hacks_for_humanity from 'assets/img/hack_titles/hacks_for_humanity.png'
import eighteen_title from 'assets/img/hack_titles/18.svg';
import seventeen_title from 'assets/img/hack_titles/17.svg';
import sixteen_title from 'assets/img/hack_titles/16.png';
import fifteen_title from 'assets/img/hack_titles/15.png';

// helpful: https://cssgradient.io/

export default {
  EIGHT: {
    name: 'HackUTD VIII',
    gradientColor: 'linear-gradient(33deg, rgba(0,0,0,1) 0%, rgba(151,0,217,1) 100%)',
    titleImage: eight_title,
    websiteLink: 'https://viii.hackutd.co/',
    numSponsors: '7',
    numParticipants: "800+",
    numSubmissions: "116",
    date: "Fall 2021",
    paddingNeeded: 20
  },
  SEVEN: {
    name: 'HackUTD VII',
    gradientColor: 'linear-gradient(203.46deg, #B9EAF5 15.11%, #16AED1 87.07%)',
    titleImage: seven_title,
    websiteLink: 'https://vii.hackutd.co/',
    numSponsors: "5",
    numParticipants: "750",
    numSubmissions: "96",
    date: "Spring 2021",
    paddingNeeded: 20
  },
  GAME_JAM: {
    name: 'HackUTD Game Jam',
    gradientColor: 'linear-gradient(12deg, rgba(255,176,0,1) 0%, rgba(139,0,205,1) 74%)',
    titleImage: gamejam,
    websiteLink: 'https://gamejam.hackutd.co/',
    numSponsors: null,
    numPartners: 7,
    numParticipants: "200+",
    numSubmissions: "43",
    date: "Fall 2020",
  },
  SIX: {
    name: "HackUTD VI",
    gradientColor: "linear-gradient(214deg, rgba(255,255,255,1) 0%, rgba(172,200,255,1) 33%, rgba(3,255,214,1) 100%)",
    titleImage: six_title,
    devpostLink: "https://hackutd-vi.devpost.com/?ref_feature=challenge&ref_medium=discover",
    numSponsors: 24,
    numParticipants: "700+",
    numSubmissions: "110",
    date: "Fall 2019",
    paddingNeeded: 10,
    ignoreMobilePadding: true
  },
  NINETEEN: {
    name: "HackUTD 19",
    gradientColor: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,210,45,1) 100%)",
    titleImage: nineteen_title,
    devpostLink: "https://hackutd2019.devpost.com/",
    numSponsors: 10,
    numParticipants: "500+",
    numSubmissions: "108",
    date: "Spring 2019",
    paddingNeeded: 10,
    ignoreMobilePadding: true
  },
  HACK_FOR_HUMANITY: {
    name: "Hacks for Humanity",
    gradientColor: "radial-gradient(circle, rgba(253,29,143,1) 2%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
    titleImage: hacks_for_humanity,
    devpostLink: "https://hfhutd18.devpost.com/",
    numSponsors: 3,
    numParticipants: "80+",
    numSubmissions: 12,
    date: "Fall 2018",
    paddingNeeded: 20,
    ignoreMobilePadding: true
  },
  EIGHTEEN: {
    name: "HackUTD 18",
    gradientColor: "radial-gradient(circle, rgba(148,187,233,1) 40%, rgba(238,174,202,1) 100%)",
    titleImage: eighteen_title,
    devpostLink: "https://hackutd18.devpost.com/",
    numSponsors: 8,
    numParticipants: "550+",
    numSubmissions: "82",
    date: "Spring 2018",
    paddingNeeded: 10
  },
  SEVENTEEN: {
    name: "HackUTD 17",
    titleImage: seventeen_title,
    gradientColor: "linear-gradient(185deg, rgba(130,112,164,1) 0%, rgba(31,0,92,1) 100%)",
    devpostLink: "https://hackutd17.devpost.com/?ref_feature=challenge&ref_medium=discover",
    numSponsors: 5,
    numParticipants: "500+",
    numSubmissions: "48",
    date: "Spring 2017",
    paddingNeeded: 10
  },
  SIXTEEN: {
    name: "HackUTD 16",
    titleImage: sixteen_title,
    gradientColor: "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
    devpostLink: "https://hackutd16.devpost.com/?ref_feature=challenge&ref_medium=discover",
    numSponsors: "8+",
    numParticipants: "300+",
    numSubmissions: "31",
    date: "Spring 2016"
  },
  FIFTEEN: {
    name: "HackUTD",
    titleImage: fifteen_title,
    gradientColor: "linear-gradient(169deg, rgba(105,255,140,1) 0%, rgba(255,110,0,1) 100%)",
    devpostLink: "https://hackutd.devpost.com/",
    numSponsors: "6+",
    numParticipants: "250+",
    numSubmissions: "24",
    date: "Spring 2015"
  }
}