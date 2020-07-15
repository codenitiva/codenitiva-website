const dropDownData = (type: string) => {
  switch (type) {
    case 'development-path':
      return ['AI Developer', 'ML Engineer', 'Web Developer', 'Software Engineer'];
    case 'recommend':
      return ['Absolutely Yes', 'Still Bias', 'No, I won\'t'];
  };
};

export default dropDownData;