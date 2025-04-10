import { useEffect, useRef, useState } from "react";

import logo from "../assets/dandyLogo.png";
import { CiMenuFries } from "react-icons/ci";
import Modal from "../ui/Modal";
import SampleProjects from "./SampleProjects";
import ContinuousZoom from "./home/ContinuousZoom";
import { Tooltip } from "@material-tailwind/react";
import DarkModeToggle from "../ui/DarkModeToggle";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuRef = useRef(null);

  const handleMenu = () => {
    console.log("Menu toggled");
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup to prevent memory leaks
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenu]);

  //Modal funtiom
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (openMenu) setOpenMenu(false);
  };

  // https://drive.google.com/file/d/1TUkKY8M03Z9kUg1Np7lQZJer9aWtlV2r/view?usp=drive_link

  const cvUrl =
    "https://drive.google.com/uc?export=download&id=1TUkKY8M03Z9kUg1Np7lQZJer9aWtlV2r";

  return (
    <div className="w-full md:px-5 md:p-3 bg-gradient-to-t from-gray-0 to-red-50 border-b border-b-red-100 bg-style text-style">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between gap-3 px-2 bg-style text-style">
          <div>
            <img src={logo} alt="logo" width={100} />
          </div>
          <div className="md:text-xl   font-bold font-lato hidden lg:block text-sm ">
            DANIEL<span className="text-white ">_</span>AMAECHI
            <span className="text-white">_</span>NWANKWO
          </div>
        </div>

        <div>
          <DarkModeToggle />
        </div>

        <div className="px-3 ">
          <div>
            <button
              className="text-xl rounded-full md:hidden border p-2 font-bold font-lato"
              onClick={handleMenu}
            >
              <CiMenuFries />
            </button>
          </div>
          <div
            ref={menuRef}
            className={`text-center w-[90%]  border m-auto  mt-5 border-t-0 font-lato font-semibold bg-white bg-style text-style pb-10 rounded-b-xl md:pb-0  md:rounded-b-0 h-[100vh] md:h-auto  ${
              !openMenu
                ? "md:flex hidden justify-between items-center gap-3"
                : " flex-col flex items-end absolute top-[60px] px-3 z-[1000] right-0"
            } `}
          >
            <button
              className="px-4 py-1 border border-b-black hover:bg-white hover:border-b-red-600 bg-style text-style"
              onClick={handleModal}
            >
              <ContinuousZoom>Sample_Projects</ContinuousZoom>
            </button>
            <button className="px-4 py-1 border border-b-black hover:bg-white hover:border-b-red-600 bg-style text-style">
              <a href={cvUrl} download="DANIEL_AMAECHI_CV.pdf">
                <Tooltip content="Download my CV" className="z-[1000]">
                  Resume
                </Tooltip>
              </a>
            </button>

            <button className="px-4 py-1 border border-b-black hover:bg-white hover:border-b-red-600 bg-style text-style">
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
