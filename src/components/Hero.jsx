import React from "react";
import MyImg from "../assets/My.png"; // Import the hero image
import JsImage from "../assets/Skill_Images/js.png";
import BootImage from "../assets/Skill_Images/boot.png"; // Import skill images
import JavaImage from "../assets/Skill_Images/java.png";
import express from "../assets/Skill_Images/Express.png";
import github from "../assets/Skill_Images/github.png";
import linux from "../assets/Skill_Images/Linux.png";
import mdb from "../assets/Skill_Images/mdb.png";
import mysql from "../assets/Skill_Images/mysql.png";
import nodejs from "../assets/Skill_Images/nodejs.png";
import postman from "../assets/Skill_Images/postman.png";
import react from "../assets/Skill_Images/react.png";
import tailwind from "../assets/Skill_Images/tailwind.png";
import vs from "../assets/Skill_Images/vs.png";
import server from "../assets/Skill_Images/server.png";

// Store the images in an array
const imagePaths = [
  JsImage,
  JavaImage,
  mdb,
  express,
  react,
  nodejs,
  tailwind,
  BootImage,
  github,
  linux,
  mysql,
  postman,
  vs,
  server,
];

const Hero = () => {
  return (
    <div className="bg-black text-white dark:bg-gray-600 text-center py-16">
      <div className="flex flex-wrap justify-center">
        <img
          src={MyImg}
          alt=""
          className="mx-auto mb-8 mt-1 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 shadow-lg shadow-white"
        />
      </div>

      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Puskar Sekhar Sahoo
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <a href="#contact">Contact With Me</a>
        </button>
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <a href="https://drive.google.com/file/d/13uGluR4ctYEbgCv-jq89gegexdEBoyR6/view?usp=drive_link">
            Resume
          </a>
        </button>
      </div>

      {/* Display images in 2 rows for smaller devices */}
      <div className="mt-28 ml-4 md:flex md:justify-center md:space-x-4 flex flex-wrap gap-4">
        {imagePaths.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-16 h-16 rounded-lg object-cover transform transition-transform duration-300 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
