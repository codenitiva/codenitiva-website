export default {
  formData: [
    { 
      key: 'name',
      image: require('../../assets/vector/form/name.svg'),
      content: 'Yay, we’re so happy to see you joining Codenitiva. First, what’s your name?',
      inputType: ['input', 'eg. Andrew Ng']
    },
    {
      key: 'email',
      image: require('../../assets/vector/form/email.svg'),
      content: 'Now, what’s your email? We’ll send a verification code to ensure it’s you',
      inputType: ['input', 'eg. a.ng@cognitiva.hi']
    },
    {
      key: 'username',
      image: require('../../assets/vector/form/username.svg'),
      content: 'Choose a unique username for yourself or click here to generate one',
      inputType: ['input', 'eg. ang.coursera']
    },
    {
      key: 'devPath',
      image: require('../../assets/vector/form/dev_path.svg'),
      content: 'Great job. Now, tell us which developer path are you interested in',
      inputType: ['dropdown', 'development-path', 'Your Dream']
    },
    {
      key: 'skill',
      image: require('../../assets/vector/form/skill.svg'),
      content: 'Wow, that’s amazing. How good are you regarding to the path you’ve chosen?',
      inputType: ['dropdown', 'development-path', 'Your Skill']
    },
    {
      key: 'news',
      image: require('../../assets/vector/form/news.svg'),
      content: 'Awesome. One last question, are you willing to subscribe to our newsletter? You’ll get tons of useful infos weekly',
      inputType: ['dropdown', 'news', 'Subscribe?']
    }
  ]
};