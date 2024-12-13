import { useEffect } from "react";
import { Tooltip } from "@material-tailwind/react";

export default function YesModal({ isModalOpen, onClose, children }) {
  useEffect(() => {
    if (isModalOpen) {
      // Disable body scroll when modal is open
      document.body.classList.add("body-no-scroll");
    } else {
      // Ensure the class is removed when modal is closed
      document.body.classList.remove("body-no-scroll");
    }

    // Cleanup function to remove the class if the component unmounts
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="px-2 text-xl text-red-500 absolute top-0 right-0"
          onClick={onClose}
        >
          <Tooltip
            content="Close"
            className="px-3 bg-black text-white py-1 z-50"
          >
            x
          </Tooltip>
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
