const icons = (icon: string) => {
  switch (icon) {
    case 'github':
      return require("../assets/social/github.svg");
    case 'linkedin':
      return require("../assets/social/linkedin.svg");
    case 'slack':
      return require("../assets/social/slack.svg");
    case 'facebook':
      return require("../assets/social/facebook.svg");
    case 'cross':
      return require("../assets/icon/x.svg");
    case 'enter':
      return require("../assets/icon/enter.svg");
    case 'hamburger': 
      return require("../assets/icon/hamburger.svg");
    case 'user':
      return require("../assets/icon/user.svg");
    case 'key':
      return require("../assets/icon/password.svg");
  }
};

export default icons;
