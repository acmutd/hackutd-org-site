/*
The purpose of this file is to allow for dynamic light/dark theming. Kind of forgot about using it
very well after a while so it's mainly just a stub to possibly allow that functionality to be implemented
in the future, whether by Nate or someone else. [Not a particularly difficult challenge, just time consuming.
Plus you have to consider doing something cute like an opacity transition, which might be a little harder. Compromise
might be opacity transition just for Hero background but everything else transitions instantaneously. This would
provide a sophisticated UI experience for the majority of togglers of dark/light if implemented.]
*/

export default {
  HERO_BACKGROUND: {
    light: 'linear-gradient(180deg, #FFB524 3.05%, rgba(255, 0, 214, 0.45) 100%)',
    dark: undefined
  },
}