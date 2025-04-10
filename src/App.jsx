//import { useState } from "react";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles";

import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Modal from "./ui/Modal";
import PageLayout from "./pages/PageLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "../context/DarkModeContext";

function App() {
  //animation
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS library
  // }, []);

  // Function to handle modal open close
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  // Function to handle the "Yes" action
  // const handleYes = () => {
  //   toast.success("This has been done, thnaks");
  //   if (1 === 3) setIsModalOpen(false);
  // };

  return (
    <>
      <DarkModeProvider>
        <GlobalStyles />

        <div>
          {/* <button
          onClick={handleModal}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button> */}

          <BrowserRouter>
            <Routes>
              <Route element={<PageLayout />}>
                <Route index element={<Home />} />

                <Route path="/" element={<Home />} />

                <Route path="*" element={<PageNotFound />} />
              </Route>

              {/* <Route path="verifyemail" element={<VerifyEmail />} /> */}
            </Routes>
          </BrowserRouter>

          {/* <Modal isModalOpen={isModalOpen} onClose={handleModal}>
          <h2 className="text-lg font-bold">Confirm Action</h2>
          <p>Are you sure you want to proceed with this action?</p>
          <div className="flex justify-end gap-2 mt-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={handleModal}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
             
            >
              Yes
            </button>
          </div>
        </Modal> */}
        </div>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </DarkModeProvider>
    </>
  );
}

export default App;
