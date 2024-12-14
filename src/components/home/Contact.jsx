import {
  FaFacebook,
  FaGithubSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { Tooltip } from "@material-tailwind/react";

export default function Contact() {
  return (
    <div className="absolute left-0 lg:top-[100px] md:top-[100px] top-[190px] flex flex-col md:gap-5 gap-2 md:text-2xl text-lg border p-3 border-slate-500 z-10 text-gray-200 bg-slate-800">
      <a
        href="https://www.linkedin.com/in/daniel-amaechi-nwankwo-880880334/"
        target="-blank"
      >
        <Tooltip
          content="Linkedln"
          className="px-3 bg-black text-white py-1 z-50"
        >
          <button>
            <FaLinkedin />
          </button>
        </Tooltip>
      </a>

      <a href="https://github.com/dandytech" target="_blank">
        <Tooltip
          content="Github"
          className="px-3 bg-black text-white py-1 z-50"
        >
          <button>
            <FaGithubSquare />
          </button>
        </Tooltip>
      </a>

      <a href="https://twitter.com/ADamaechi" target="_blank">
        <Tooltip
          content="Twitter (X)"
          className="px-3 bg-black text-white py-1 z-50"
        >
          <button>
            <FaXTwitter />
          </button>
        </Tooltip>
      </a>

      <a href="https://facebook.com/danielamaechi.nwankwo" target="_blank">
        <Tooltip
          content="Facebook"
          className="px-3 bg-black text-white py-1 z-50"
        >
          <button>
            <FaFacebook />
          </button>
        </Tooltip>
      </a>

      <a href="mailto:dannkwoamaechi@gmail.com" target="_blank">
        <Tooltip content="Email" className="px-3 bg-black text-white py-1 z-50">
          <button>
            <MdEmail />
          </button>
        </Tooltip>
      </a>

      <a href="https://wa.me/2347065123746" target="_blank">
        <Tooltip
          content="WhatsApp"
          className="px-3 bg-black text-white py-1 z-50"
        >
          <button>
            <FaWhatsapp />
          </button>
        </Tooltip>
      </a>
    </div>
  );
}
