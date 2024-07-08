import Cookies from "universal-cookie";

const cookies = new Cookies();
const logout = () => {
  cookies.remove("token");
  cookies.remove("userId");
  cookies.remove("username");
  cookies.remove("fullName");
  cookies.remove("avatarURL");
  cookies.remove("hashedPassword");
  cookies.remove("phoneNumber");

  window.location.reload();
};

export default logout;
