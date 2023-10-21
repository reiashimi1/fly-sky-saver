const loginValidator = {
  email: {
    presence: {
      allowEmpty: false,
      message: 'Email is required'
    },
    email: {
      message: 'Not correct format'
    }
  },
  // nuis: {
  //     presence: {
  //         allowEmpty: false,
  //         message: "errors.notEmpty",
  //     },
  //     format: {
  //         pattern: /^([A-Z]\d{8}[A-Z]$)/i,
  //         message: 'errors.invalidNuis'
  //     }
  // },
  password: {
    presence: {
      allowEmpty: false,
      message: 'Password is required'
    }
  }
};

export default loginValidator;
