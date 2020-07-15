const images = (icon: string) => {
  switch (icon) {
    case 'github':
      return require("../assets/social/github.svg");
    case 'linkedin':
      return require("../assets/social/linkedin.svg");
    case 'slack':
      return require("../assets/social/slack.svg");
    case 'facebook':
      return require("../assets/social/facebook.svg");
    case 'left':
      return require('../assets/icon/left.svg');
    case 'right':
      return require('../assets/icon/right.svg');
  }
};

export default images;
