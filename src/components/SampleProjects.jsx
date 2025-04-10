import projects from "../projectsData";

export default function SampleProjects() {
  return (
    <div className="bg-white p-3 mt-3 rounded-lg  h-auto bg-style text-style">
      <p className="font-lato font-bold text-center md:text-xl text-lg w-[100%] mt-5 ">
        My Sample Projects
      </p>

      <div className="grid lg:grid-cols-2 grid-col-1 mt-3 gap-5 w-full bg-style text-style">
        {projects.map((project) => (
          <div key={project.id} className="w-full border p-3  items-center">
            <p className="w-full text-center md:text-xl text-lg font-lato border-b font-[600]">
              {project.name}
            </p>
            <p className="flex justify-between items-center mt-5 gap-3 w-full">
              <a href={project.site} target="_blank">
                <button className="border py-1 bg-red-500 bg-gradient-to-t to-red-800 from-black px-3 font-inter font-[400] rounded-full text-white text-sm md:text-lg">
                  {" "}
                  View Site
                </button>
              </a>
              <a href={project.code} target="_blank">
                <button className="border py-1 bg-red-500 bg-gradient-to-t to-red-800 from-black px-3 font-inter font-[400] rounded-full text-white text-sm md:text-lg">
                  {" "}
                  View Code
                </button>
              </a>
            </p>
            <p className="w-full mt-5">
              <img
                src={project.photo}
                alt="photo"
                width="100"
                className="w-full"
              />
            </p>

            <div className="flex justify-between items-center gap-1 mt-5 px-3 w-full">
              {project.stack.map((stack, index) => (
                <p key={index} className="flex justify-center items-center">
                  <span className="block md:w-14 md:h-14 h-10 w-10 sm:w-24 sm:h-24">
                    <img
                      src={stack}
                      alt="photo"
                      className="w-full h-full object-contain"
                    />
                  </span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
