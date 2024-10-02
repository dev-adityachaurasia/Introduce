import home from "../assets/home/home.svg";
import SideList from "./ui/SideList";
import search from "../assets/home/search.svg";
import { useNavigate } from "react-router-dom";
import profile from "../assets/home/profile.svg";
import logout from "../assets/home/logout.svg";
import setting from "../assets/home/setting.svg";
import upload from "../assets/home/upload.svg";
import video from "../assets/home/video.svg";
import result from "../assets/home/result.svg";
import axios from "../utils/axios.jsx";
import message from "../assets/home/message.svg";
import question from "../assets/home/question.svg";
import events from "../assets/home/events.svg";

const AsideLeft = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      let res = await axios.get("/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        console.log(res);
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="h-[100vh] fixed border-r border-solid border-black w-[16vw] flex flex-col items-left p-6 ">
      <div className="h-[10%] mb-3 items-start flex">
        <h1 className="font-bold">Logo</h1>
      </div>
      <div className="h-[90%]">
        <ul className="h-full flex flex-col">
          <SideList img={home} src="" name="Home" />
          <SideList img={search} src="" name="Search" />
          <SideList img={video} src="" name="Dopo" />
          <SideList img={upload} src="" name="Upload" />
          <SideList img={message} src="" name="Message" />
          <SideList img={events} src="" name="Events" />
          <SideList img={profile} src="" name="Profile" />
          <SideList img={result} src="" name="Results" />
          <SideList img={question} src="" name="Q Papers" />
          <SideList img={setting} src="" name="Setting" />
          <SideList img={logout} onClick={Logout} name="Logout" />
        </ul>
      </div>
    </div>
  );
};

export default AsideLeft;
