const dropDownData = (type: string) => {
  switch (type) {
    case 'development-path':
      return ['AI Developer', 'ML Engineer', 'Web Developer', 'Software Engineer'];
    case 'news':
      return ['Absolutely Yes', 'No, I won\'t'];
  };
};

export default dropDownData;