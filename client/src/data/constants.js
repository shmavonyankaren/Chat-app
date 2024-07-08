const arrayOfInputsSignIn = [
  {
    text: "Username",
    label: "username",
    type: "text",
  },
  {
    text: "Password",
    label: "password",
    type: "password",
  },
];

const arrayOfInputsSignUp = [
  {
    text: "Full Name",
    label: "fullName",
    type: "text",
  },
  {
    text: "Username",
    label: "username",
    type: "text",
  },
  {
    text: "Phone Number",
    label: "phoneNumber",
    type: "number",
  },
  {
    text: "Avatar URL",
    label: "avatarURL",
    type: "text",
  },
  {
    text: "Password",
    label: "password",
    type: "password",
  },
  {
    text: "Confirm Password",
    label: "confirmPassword",
    type: "password",
  },
];

const initialStateForm = {
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

export { arrayOfInputsSignIn, arrayOfInputsSignUp, initialStateForm };
