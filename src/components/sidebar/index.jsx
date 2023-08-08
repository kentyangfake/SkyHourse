/* eslint-disable */
import { HiX } from "react-icons/hi";
import { SiFitbit } from "react-icons/si";
import Links from "./components/Links";

import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full w-60 flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`-ml-8 mt-8 flex items-center justify-center`}>
        <SiFitbit className="h-6 w-6 text-brand-700" />
        <div className="ml-2 text-2xl font-bold tracking-widest text-brand-700 dark:text-white">
          天馬<span className=" font-light">儲能</span>
        </div>
      </div>
      <div class="mt-8 mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      {/* <div className="flex justify-center">
        <SidebarCard />
      </div> */}

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
