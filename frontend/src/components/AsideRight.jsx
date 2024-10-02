import background from "../assets/background.jpg";

const AsideRight = () => {
  return (
    <div className="h-[100vh] w-[26vw] mt-8">
      <div className="flex justify-between w-[80%]">
        <div className="flex w-[50px] items-center gap-2">
          <img
            src="https://preview.redd.it/is-naruto-a-good-hokage-v0-ajsifk35nr2b1.jpg?width=1080&crop=smart&auto=webp&s=4c6beec03d6d14e63a13d6f4086644f3936ea971"
            alt=""
            className=" h-[50px] rounded-full border-2 p-[1px] border-red-400 border-solid object-cover "
          />
          <div className="items-start flex flex-col justify-start">
            <p>aditya</p>
            <p className="text-xs w-full">aditya</p>
          </div>
        </div>
        <button className="font-bold">Logout</button>
      </div>
      <div className="mt-4">
        <h1 className="font-bold">Suggetation for you</h1>
        <ul className="mt-4 flex flex-col gap-3">
          <li className="flex justify-between  items-center w-[80%]">
            <div className="flex w-[50px] items-center gap-2">
              <img
                src="https://preview.redd.it/is-naruto-a-good-hokage-v0-ajsifk35nr2b1.jpg?width=1080&crop=smart&auto=webp&s=4c6beec03d6d14e63a13d6f4086644f3936ea971"
                alt=""
                className=" h-[50px] rounded-full border-2 p-[1px] border-red-400 border-solid object-cover "
              />
              <div className="items-start flex flex-col justify-start">
                <p>aditya</p>
                <p className="text-xs w-full">aditya</p>
              </div>
            </div>
            <button className="font-bold ">Follow</button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default AsideRight;
