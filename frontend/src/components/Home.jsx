import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import MainUpper from "./MainUpper";
import Posts from "./Posts";
import video from "../assets/video.mp4";
import axios from "../utils/axios.jsx";

const Home = () => {
  try {
    const allPost = async () => {
      let res = await axios.post("/allpost");
      return await res.data.allPost;
    };
    let res = allPost();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <div className="flex">
        <AsideLeft />
        <main className="w-[60vw] flex flex-col justify-center items-center ml-[16vw]">
          <MainUpper></MainUpper>
          <Posts
            img="https://preview.redd.it/is-naruto-a-good-hokage-v0-ajsifk35nr2b1.jpg?width=1080&crop=smart&auto=webp&s=4c6beec03d6d14e63a13d6f4086644f3936ea971"
            id="0"
            year="3rd "
          ></Posts>
        </main>
        <AsideRight></AsideRight>
      </div>
    </>
  );
};

export default Home;
