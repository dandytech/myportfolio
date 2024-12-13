import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex m-auto h-[90vh] flex-col-reverse items-center justify-center p-10">
        <span>
          {" "}
          <button onClick={() => navigate(-1)} className="text-[26px]">
            &larr; Go back
          </button>
        </span>
        <span>
          {" "}
          <h1 className="text-[24px]">
            The page you are looking for could not be found 😢
          </h1>
        </span>
      </div>
    </>
  );
}

export default PageNotFound;
