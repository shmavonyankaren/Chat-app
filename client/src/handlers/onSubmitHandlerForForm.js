import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const onSubmitHandlerForForm = (form, isSignup) => {
  return async (e) => {
    e.preventDefault();
    const { username, password, phoneNumber, avatarURL } = form;
    const URL = "http://localhost:5000/auth";

    const {
      data: { token, userId, hashedPassword, fullName },
    } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
      username,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatarURL,
    });
    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (isSignup) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }

    window.location.reload();
  };
};

export default onSubmitHandlerForForm;
