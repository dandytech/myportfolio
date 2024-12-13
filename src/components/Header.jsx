import { useState } from "react";

import logo from "../assets/dandyLogo.png";
import { CiMenuFries } from "react-icons/ci";
import Modal from "../ui/Modal";
import SampleProjects from "./SampleProjects";
import ContinuousZoom from "./home/ContinuousZoom";
import { Tooltip } from "@material-tailwind/react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    console.log("i was clicked");

    setOpenMenu(!openMenu);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (openMenu) setOpenMenu(false);
  };

  // https://drive.google.com/file/d/1t2elhLDtDHPVKDluR1iihgHDwpfTvOjb/view?usp=sharing

  const cvUrl =
    "https://drive.google.com/uc?export=download&id=1t2elhLDtDHPVKDluR1iihgHDwpfTvOjb";

  return (
    <div className="w-full md:px-5 md:p-3 bg-gradient-to-t from-gray-0 to-red-50 border-b border-b-red-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between gap-3 px-2">
          <div>
            <img src={logo} alt="logo" width={100} />
          </div>
          <div className="md:text-xl  font-bold font-lato md:hidden lg:block ">
            DANIEL<span className="text-white ">_</span>AMAECHI
            <span className="text-white">_</span>NWANKWO
          </div>
        </div>

        <div className="px-3">
          <div>
            <button
              className="text-xl rounded-full md:hidden border p-2 font-bold font-lato"
              onClick={handleMenu}
            >
              <CiMenuFries />
            </button>
          </div>
          <div
            className={`text-center font-lato font-semibold bg-white pb-10 rounded-b-xl md:pb-0 md:rounded-b-0 h-[100vh] md:h-auto  ${
              !openMenu
                ? "md:flex hidden justify-between items-center gap-3"
                : " flex-col flex items-end absolute top-[60px] px-3 z-[1000] right-0"
            } `}
          >
            <button
              className="px-4 py-1 border border-b-black hover:bg-white hover:border-b-red-600"
              onClick={handleModal}
            >
              <ContinuousZoom>Sample_Projects</ContinuousZoom>
            </button>
            <button className="px-4 py-1 border border-b-black hover:bg-white hover:border-b-red-600">
              <a href={cvUrl} download="DANIEL_AMAECHI_CV.pdf">
                <Tooltip content="Download my CV" className="z-[1000]">
                  Resume
                </Tooltip>
              </a>
            </button>

            <button className="px-4 py-1 border border-b-black hover:bg-white hover:border-b-red-600">
              <a href="https://wa.me/2347065123746" target="_blank">
                <Tooltip content="Chat me on WhatsApp" className="z-[1000]">
                  Chat
                </Tooltip>
              </a>
            </button>
          </div>
        </div>
      </div>

      <Modal isModalOpen={isModalOpen} onClose={handleModal}>
        <SampleProjects />
      </Modal>
    </div>
  );
}
