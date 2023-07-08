import React from "react";

const ContactComponent = () => {
  return (
    <section id="contact" className="pb-5 pt-5">
      <div>
        <div className="w-full px-4" data-aos="fade-up">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold">Contact</h4>
            <h2 className="mb-4 text-3xl font-bold">Hubungi Saya</h2>
            <p className="text-sm font-medium">
              Hubungi saya lewat form dibawah untuk busines!
            </p>
          </div>
        </div>
        <div className="mb-8 w-full px-4" data-aos="fade-up">
          <form action="">
            <div className="w-full lg:mx-auto lg:w-2/3">
              <div className="mb-5 w-full">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-[#14b8a6]"
                >
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="mb-5 w-full">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-[#14b8a6]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-[#14b8a6]"
                >
                  Pesan
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="h-32 w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                ></textarea>
              </div>

              <div className="mt-5 w-full">
                <button className="w-full rounded-full bg-[#14b8a6] px-5 py-3 text-center text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
