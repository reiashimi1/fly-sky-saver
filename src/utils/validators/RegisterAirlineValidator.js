const registerAirlineValidator = {
  email: {
    presence: {
      allowEmpty: false,
      message: 'Email is required'
    },
    email: {
      message: 'Not correct format'
    }
  },
  airlineName: {
    presence: {
      allowEmpty: false,
      message: 'Passport number is required'
    }
  },
  airlineCode: {
    presence: {
      allowEmpty: false,
      message: 'Airline Code is required'
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
    },
    equality: {
      attribute: 'password',
      message: 'Passwords do not match',
      comparator: (confirmPassword, password) => {
        return password === confirmPassword;
      }
    }
  }
};

export default registerAirlineValidator;
