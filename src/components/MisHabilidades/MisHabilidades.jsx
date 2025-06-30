import React from "react";
import react from "../../assets/react.png";
import bootstrap from "../../assets/bootstrap.png";
import tailwind from "../../assets/tailwind.png";
import flask from "../../assets/flask.svg";
import django from "../../assets/django.png";
import mysql from "../../assets/mysql.svg";
import apache from "../../assets/apache.png";
import kotlin from "../../assets/kotlin.svg";
import android from "../../assets/android studio.svg";
import figma from "../../assets/figma.svg";
import css from "../../assets/css-3.png";
import html from "../../assets/html-5.png";
import javascript from "../../assets/javascript.png";
import python from "../../assets/python.png";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { slipeUp } from "../../utility/animation";

export const MisHabilidades = () => {
  return (
    <motion.div variants={slipeUp(0.4)} initial="initial" animate="animate">
      {/*Mis habilidades */}
      <span
        id="habilidades"
        className="text-white text-4xl flex justify-center"
      >
        Mis Habilidades
      </span>
      {/*Tarjetas con habilidades*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
        <div className="bg-[rgba(128,0,128,0.5)] p-5 rounded-lg text-white hover:bg-purple-800 transition-all duration-300 ">
          <h3 className="text-xl font-bold">Desarrollo Web</h3>
          <p className="mt-2 flex flex-wrap gap-4">
            <span className="flex items-center">
              CSS
              <img src={css} alt="" className="w-10 h-10 " />,
            </span>
            <span className="flex items-center">
              HTML
              <img src={html} alt="" className="w-10 h-10 " />,
            </span>
            <span className="flex items-center">
              JavaScript
              <img src={javascript} alt="" className="w-10 h-10 " />,
            </span>
            <span className="flex items-center">
              Boostrap
              <img src={bootstrap} alt="" className="w-10 h-10" />,
            </span>
            <span className="flex items-center">
              Tailwind
              <img src={tailwind} alt="" className="w-10 h-10 " />,
            </span>
            <span className="flex items-center">
              React
              <img src={react} alt="" className="w-10 h-10 " />
            </span>
          </p>
        </div>

        <div className="bg-[rgba(128,0,128,0.5)] p-5 rounded-lg text-white hover:bg-purple-800 transition-all duration-300 ">
          <h3 className="text-xl font-bold">Backend</h3>
          <p className="mt-2 flex flex-wrap gap-4">
            <span className="flex items-center">
              Python
              <img src={python} alt="" className="w-10 h-10" />,
            </span>
            <span className="flex items-center">
              Django
              <img src={django} alt="" className="w-10 h-10 " />,
            </span>
            <span className="flex items-center">
              Flask
              <img src={flask} alt="" className="w-10 h-10 " />,
            </span>
            <span className="flex items-center">
              MySQL
              <img src={mysql} alt="" className="w-10 h-10" />,
            </span>
            <span className="flex items-center">
              XAMPP
              <img src={apache} alt="" className="w-10 h-10 " />
            </span>
          </p>
        </div>

        <div className="bg-[rgba(128,0,128,0.5)] p-5 rounded-lg text-white hover:bg-purple-800 transition-all duration-300 ">
          <h3 className="text-xl font-bold">Desarrollo Móvil</h3>
          <p className="mt-2 flex flex-wrap gap-4">
            <span className="flex items-center">
              Kotlin
              <img src={kotlin} alt="" className="w-10 h-10 " />,
            </span>
            <span className="flex items-center">
              Android Studio
              <img src={android} alt="" className="w-10 h-10 " />
            </span>
          </p>
        </div>

        <div className="bg-[rgba(128,0,128,0.5)] p-5 rounded-lg text-white hover:bg-purple-800 transition-all duration-300 ">
          <h3 className="text-xl font-bold">Diseño UI/UX</h3>
          <p className="mt-2 flex flex-wrap gap-4">
            <span className="flex items-center">
              Figma
              <img src={figma} alt="" className="w-10 h-10 " />
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MisHabilidades;
