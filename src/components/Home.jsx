import React, { useState } from "react";
import father from "./image1.png";

const Home = () => {
  const [message, setMessage] = useState("");

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message);
    
  };

  return (
    <div className="bg-home">
      <div className="flex flex-col  justify-center items-center min-h-screen">
        <img
          src={father}
          alt="my profile"
          className="rounded-2xl w-2/5 px-4 py-4 md:w-full"
        />

        <div name="contact" className="w-full p-4">
          <div className="box w-11/12 md:w-full h-screen-vh md:h-auto">
            <div className="pb-8">
              <p className="text-4xl font-bold text-center border-b-4 text-black">
                Write your message here
              </p>
            </div>

            <div className="flex justify-center">
              <form
                action="mailto:"
                method="POST"
                className="flex flex-col w-full md:w-3/5"
              >
                <textarea
                  name="message"
                  placeholder="Enter your message (100 words)"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <p className="text-3xl font-bold bg-home text-center border-b-4 py-3 font-signature">
                  Dad: a son's first hero, a daughter's first love.
                </p>

                <button
                  className="text-black bg-home px-6 py-3 my-8 mx-auto border border-black flex items-center rounded-md hover:scale-110 duration-300"
                  onClick={handleCopyMessage}
                >
                  Click here to send message
                </button>
              </form>
            </div>
          </div>
        </div>

        <p className="text-4xl font-bold mt-8 border-b-4 py-10 text-center font-signature">
          Thank you! Visit again!
        </p>
      </div>
    </div>
  );
};

export default Home;
