import gamejam from 'assets/img/hack_titles/gamejam.png';
import seven_title from 'assets/img/hack_titles/vii.svg';
import eight_title from 'assets/img/hack_titles/viii.png';

// helpful: https://cssgradient.io/

export default {
  SEVEN: {
    name: 'HackUTD VII',
    gradientColor: 'linear-gradient(203.46deg, #B9EAF5 15.11%, #16AED1 87.07%)',
    titleImage: seven_title,
    websiteLink: 'https://vii.hackutd.co/',
    numSponsors: "5",
    numParticipants: "750",
    numSubmissions: "96",
    date: "Spring 2021"
  },
  EIGHT: {
    name: 'HackUTD VIII',
    gradientColor: 'linear-gradient(33deg, rgba(0,0,0,1) 0%, rgba(151,0,217,1) 100%)',
    titleImage: eight_title,
    websiteLink: 'https://viii.hackutd.co/',
    numSponsors: '7',
    numParticipants: "800+",
    numSubmissions: "116",
    date: "Fall 2021"
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
  }
}