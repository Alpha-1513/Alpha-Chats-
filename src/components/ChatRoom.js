import React from "react";

const ChatRoom = () => {
  return (
    <section className="h-full flex flex-col">
      <nav className="flex items-center border-b border-neutral-700 py-4 px-7">
        <h2 className="text-2xl">chatroom 1</h2>
        <i class="fa-solid fa-users-gear ml-auto text-xl"></i>
      </nav>
      <div
        className="overflow-auto flex flex-col 
    items-start flex-grow p-6"
      >
        <div className="flex items-start my-1 max-w-[80%]">
          <img
            className="w-10 mt-2"
            src="https://avatars.dicebear.com/api/human/seasddasded.svg"
            alt=""
          />
          <div className="bg-neutral-700 rounded-sm p-2 ml-2">
            <h6 className="text-lg font-semibold text-cta">mamad</h6>
            <p>
              mamad goft enghad noobe sag nabash
            </p>
          </div>
        </div>
        <div className="ml-auto my-1 max-w-[80%]">
          <p className="bg-secondary text-primary rounded-sm p-2 ml-2">
            mage harchi mamad zaghari mige man bayad anjam bedam booghe sag?
          </p>
        </div>
        <div className="flex items-start my-1 max-w-[80%]">
          <img
            className="w-10 mt-2"
            src="https://avatars.dicebear.com/api/human/sedasded.svg"
            alt=""
          />
          <div className="bg-neutral-700 rounded-sm p-2 ml-2">
            <h6 className="text-lg font-semibold text-cta">aryan</h6>
            <p>haji dirooz rafte boodam filan ja bisar ja shod har har</p>
          </div>
        </div>
      </div>
      <div className="flex p-3 border-t border-neutral-700 ">
        <input
          placeholder="Type a message"
          className="flex-grow bg-neutral-700 h-10 rounded outline-none p-2"
          type="text"
        />
        <button className="bg-cta text-primary rounded-sm ml-2 px-4">
          SEND
        </button>
      </div>
    </section>
  );
};

export default ChatRoom;