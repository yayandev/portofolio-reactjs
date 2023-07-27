import React from "react";

const ProjectComponent = () => {
  return (
    <section id="portfolio" className="pb-5 pt-5">
      <div>
        <div className="w-full px-4" data-aos="fade-down">
          <div className="mx-auto mb-5 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold">Portfolio</h4>
            <h2 className="mb-4 text-3xl font-bold">Project</h2>
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-5 p-4 md:w-1/2" data-aos="fade-up-right">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src="https://via.placeholder.com/200x200"
                alt="Gambar project"
                className="w-full"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-dark mb-5 dark:text-white">
              Test
            </h3>

            <a
              href="/demo"
              className="rounded-full bg-[#14b8a6] px-8 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:opacity-90 hover:shadow-lg"
            >
              Demo
            </a>
          </div>
          <div className="mb-5 p-4 md:w-1/2" data-aos="fade-up-left">
            <div className="overflow-hidden rounded-md shadow-md">
              <img
                src="https://via.placeholder.com/200x200"
                alt="gambar"
                className="w-full"
              />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-dark mb-5 dark:text-white">
              Test
            </h3>

            <a
              href="/demo"
              className="rounded-full bg-[#14b8a6] px-8 py-3 text-base font-bold text-white transition duration-300 ease-in-out hover:opacity-90 hover:shadow-lg"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;
