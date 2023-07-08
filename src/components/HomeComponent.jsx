import React from "react";
import Me from "../images/me.png";
const HomeComponent = () => {
  return (
    <section id="home" className="pt-5 dark:bg-dark w-full overflow-hidden">
      <div className="">
        <div className="flex flex-wrap">
          <div
            className="w-full self-center p-4 lg:w-1/2"
            data-aos="fade-right"
          >
            <h1 className="text-base font-semibold md:text-xl">
              Hallo Semua 👋, Saya{" "}
              <span className="mt-1 block text-4xl font-bold text-dark dark:text-white">
                Yayan Faturrohman
              </span>
            </h1>

            <h2 className="mb-5 text-lg font-medium lg:text-xl">
              Mahasiswa & <span>Web Developer</span>
            </h2>

            <p className="mb-10 font-medium leading-relaxed">
              "Jangan lupa titik koma!." <br />{" "}
              <i>
                <span className="font-bold">Sandhika Galih</span>
              </i>
            </p>

            <a
              href="mailto:yayanfathurohman20@gmail.com"
              className="rounded-full bg-[#14b8a6] px-8 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:opacity-90 hover:shadow-lg"
            >
              Hubungi Saya
            </a>
          </div>

          <div
            className="w-full self-end px-4 lg:right-0 lg:mt-10 lg:w-1/2"
            data-aos="fade-left"
          >
            <div className="relative mt-10">
              <img
                src={Me}
                alt="Yayan Faturrohman"
                className="z relative z-10 mx-auto max-w-full"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="500"
                  height="500"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14b8a6"
                    d="M57.7,-17C63.8,0.1,50.3,25.3,30.2,39.4C10.1,53.5,-16.6,56.5,-33.7,44.5C-50.7,32.6,-58.2,5.6,-51,-13C-43.8,-31.6,-21.9,-41.9,1.9,-42.5C25.8,-43.1,51.6,-34.1,57.7,-17Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
