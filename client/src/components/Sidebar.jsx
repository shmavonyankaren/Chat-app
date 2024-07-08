import Icon from "../assets/Icon2.png";
import LogoutIcon from "../assets/logout.png";
import { logout } from "../utils";
const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={Icon} alt="Chat" width="50" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon2__inner" onClick={logout}>
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
);

export default SideBar;
