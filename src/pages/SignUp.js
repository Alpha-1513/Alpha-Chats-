import React, { useState } from "react";
import useAuth from "../context/AuthContext";
import useUser from "../context/UserContext";

const SignUp = () => {
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  const range = [1, 1000000];
  const [name, setName] = useState("");
  const [seed, setSeed] = useState(random(...range));
  const { userId, email } = useAuth();
  const { createUser } = useUser();

  return (
    <div className="bg-primary text-secondary h-screen flex items-center justify-center">
      <div className="text-center w-72 bg-ne">
        <div className="w-3/4 mx-auto mb-10">
          <div
            onClick={() => setSeed(random(...range))}
            className="group relative rounded-sm overflow-hidden cursor-pointer"
          >
            <img
              src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
              alt="avatar"
            />
            <div className="opacity-0 bg-neutral-700 bg-opacity-70 flex items-center justify-center group-hover:opacity-100 transition-opacity absolute inset-0">
              <p>click me to see new avatar</p>
            </div>
          </div>
        </div>
        <div>
          <input
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Enter Your Name"
            className="outline-none w-full bg-transparent h-10 border-b-2 border-neutral-700"
            type="text"
          />
        </div>
        <button
          onClick={() =>
            createUser(userId, {
              name,
              email,
              userId,
              avatar: `https://avatars.dicebear.com/api/human/${seed}.svg`,
              chatrooms: []
            })
          }
          className="mt-5 bg-cta text-primary text-lg w-full py-2 rounded-sm"
        >
          Start Chatting
        </button>
      </div>
    </div>
  );
};

export default SignUp;