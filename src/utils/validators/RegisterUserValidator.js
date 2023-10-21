const registerUserValidator = {
  email: {
    presence: {
      allowEmpty: false,
      message: 'Email is required'
    },
    email: {
      message: 'Not correct format'
    }
  },
  passportNumber: {
    presence: {
      allowEmpty: false,
      message: 'Passport number is required'
    }
    // format: {
    //     pattern: /^([A-Z]\d{8}[A-Z]$)/i,
    //     message: 'errors.invalidNuis'
    // }
  },
  birthday: {
    presence: {
      allowEmpty: false,
      message: 'Birthday is required'
    }
  },
  password: {
    presence: {
      allowEmpty: false,
      message: 'Password is required'
    }
  },
  confirmPassword: {
    presence: {
      allowEmpty: false,
      message: 'Confirm Password is required'
    }
  }
};

export default registerUserValidator;
