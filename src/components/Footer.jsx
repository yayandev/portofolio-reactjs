import React from "react";

const Footer = () => {
  return (
    <footer className="pt-24 sm:fixed sm:bottom-0 w-full">
      <div className="w-full">
        <div className="w-full pt-10">
          <p className="text-center text-[0.75rem] font-medium text-slate-500">
            Dibuat dengan <span className="text-pink-500">❤</span> Oleh{" "}
            <a
              href="https://yayanfaturrohman.my.id"
              className="font-bold text-sky-500"
            >
              Yayan
            </a>
            , Menggunakan{" "}
            <span className="text-sky-500">Tailwind & Reactjs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
