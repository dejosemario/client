import React from "react";

export default function WelcomeContent() {
  return (
    <div
      className="h-screen flex items-center justify-center
    bg-primary flex-col gap-2 w-full"
    >
      <h1 className="text-orange-600 text-7xl font-bold">EVENTFUL</h1>
      <img src="./eventful.svg" alt="" className="w-[50%] h-[60%]" />

      <p className="text-gray-400 text-xl text-center">
        Welcome to Eventful, the best platform to create and manage your events
      </p>
    </div>
  );
}
