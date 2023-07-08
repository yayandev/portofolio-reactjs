import React from "react";
import imageHtml from "../images/skill/html.png";
import imageCss from "../images/skill/css.png";
import imageJs from "../images/skill/javascript.png";
import imagePhp from "../images/skill/php.png";
import imageJquery from "../images/skill/jquery.png";
import imageTailwind from "../images/skill/tailwind.png";
import imageBootstrap from "../images/skill/bootstrap.png";
import imageNodejs from "../images/skill/nodejs.png";
import imageReactjs from "../images/skill/reactjs.png";
import imageMysql from "../images/skill/mysql.png";
import imageGit from "../images/skill/git.png";
const SkillComponent = () => {
  return (
    <section id="skill" className="p-5">
      <div className="container" data-aos="fade-down">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center">
            <h4 className="mb-2  font-semibold text-3xl">My Skill</h4>
            <p className="text-md font-medium  md:text-lg">
              Kemampuan yang saya kuasai saat ini dalam bidang web programming.
              Dan insyaallah saya akan terus mengasah kemampuan saya dengan
              semangat belajar ta henti sampai napas berhenti.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center px-4">
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageHtml} alt="html" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageCss} alt="css" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageJs} alt="javascript" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imagePhp} alt="php" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageJquery} alt="jquery" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageBootstrap} alt="bootstrapp" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageTailwind} alt="tailwind css" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageNodejs} alt="node js" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageReactjs} alt="React js" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageMysql} alt="Mysql" />
          </button>
          <button className="mx-4 hover:opacity-75 max-w-[120px] py-4 lg:mx-6 xl:mx-8">
            <img src={imageGit} alt="git" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillComponent;
