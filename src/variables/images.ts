const images = (icon: string) => {
  switch (icon) {
    case 'Codenitiva': 
      return require('../assets/brand/Codenitiva.svg');
    case 'github':
      return require('../assets/social/github.svg');
    case 'linkedin':
      return require('../assets/social/linkedin.svg');
    case 'slack':
      return require('../assets/social/slack.svg');
    case 'facebook':
      return require('../assets/social/facebook.svg');
    case 'left':
      return require('../assets/icon/left.svg');
    case 'right':
      return require('../assets/icon/right.svg');
    case 'cross':
      return require('../assets/icon/x.svg');
    case 'enter':
      return require('../assets/icon/enter.svg');
    case 'hamburger': 
      return require('../assets/icon/hamburger.svg');
    case 'user':
      return require('../assets/icon/user.svg');
    case 'key':
      return require('../assets/icon/password.svg');
    case 'card-vector':
      return require('../assets/vector/card-vector.svg');
    case 'active-indicator':
      return require('../assets/icon/active_indicator.svg');
    case 'indicator':
      return require('../assets/icon/indicator.svg');
  }
};

export default images;
