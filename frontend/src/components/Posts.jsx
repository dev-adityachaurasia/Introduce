import background from "../assets/background.jpg";
import { useState } from "react";

const Posts = ({ img, id, year }) => {
  return (
    <div className="w-[468px]flex flex-col">
      <div className=" flex justify-between items-center">
        <div className="flex">
          <img
            src={img}
            alt=""
            className="h-12 w-12 rounded-full p-[1px] mr-3 border-2 border-solid border-red-200"
          />
          <div className="flex flex-col gap-0">
            <h1 className="p-0 m-0 text-sm font-semibold">
              {id} . <i className="font-normal">{year} year</i>{" "}
            </h1>
            <p className="p-0 m-0 text-xs">2hr</p>
          </div>
        </div>
        <svg
          aria-label="More options"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>More options</title>
          <circle cx="12" cy="12" r="1.5"></circle>
          <circle cx="6" cy="12" r="1.5"></circle>
          <circle cx="18" cy="12" r="1.5"></circle>
        </svg>
      </div>
      <div className="mt-2 w-[400px] h-[500px] relative flex justify-center bg-black border border-solid border-gray-400">
        <img src={background} className=" object-cover" alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 mt-1 items-center">
          <svg
            aria-label="Like"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
          >
            <title>Like</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
          </svg>
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <title>comment</title>
            <desc>Created with Sketch Beta.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="#50"
              stroke-width="0"
              fill="none"
              fill-rule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-152.000000, -255.000000)"
                fill="#000000"
              >
                <path
                  d="M168,281 C166.832,281 165.704,280.864 164.62,280.633 L159.912,283.463 L159.975,278.824 C156.366,276.654 154,273.066 154,269 C154,262.373 160.268,257 168,257 C175.732,257 182,262.373 182,269 C182,275.628 175.732,281 168,281 L168,281 Z M168,255 C159.164,255 152,261.269 152,269 C152,273.419 154.345,277.354 158,279.919 L158,287 L165.009,282.747 C165.979,282.907 166.977,283 168,283 C176.836,283 184,276.732 184,269 C184,261.269 176.836,255 168,255 L168,255 Z M175,266 L161,266 C160.448,266 160,266.448 160,267 C160,267.553 160.448,268 161,268 L175,268 C175.552,268 176,267.553 176,267 C176,266.448 175.552,266 175,266 L175,266 Z M173,272 L163,272 C162.448,272 162,272.447 162,273 C162,273.553 162.448,274 163,274 L173,274 C173.552,274 174,273.553 174,273 C174,272.447 173.552,272 173,272 L173,272 Z"
                  stroke=""
                  stroke-width="3"
                  id="comment-2"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 19.2674V7.84496C19 5.64147 17.4253 3.74489 15.2391 3.31522C13.1006 2.89493 10.8994 2.89493 8.76089 3.31522C6.57467 3.74489 5 5.64147 5 7.84496V19.2674C5 20.6038 6.46752 21.4355 7.63416 20.7604L10.8211 18.9159C11.5492 18.4945 12.4508 18.4945 13.1789 18.9159L16.3658 20.7604C17.5325 21.4355 19 20.6038 19 19.2674Z"
            stroke="#363853"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h1 className="font-semibold text-sm">10 likes</h1>
      <p className="text-sm flex gap-1">
        {" "}
        <h1 className="font-semibold ">aditya</h1>Cammera man revil the truth
        😂😂
      </p>
      <p className="text-sm mt-1 text-gray-400">View all 8 Comments</p>
      <input
        type="text"
        className="text-sm text-gray-400 mt-2 w-[100%] outline-none"
        placeholder="Add Comment ..."
      />
      <div className="border border-solid border-b my-5"></div>
    </div>
  );
};

export default Posts;
