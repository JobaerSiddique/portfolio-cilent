"use server";



export const AllProjects = async () => {
  const res = await fetch(
    `http://localhost:5000/api/v1/project`
    ,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
      cache: "no-store",
    }
  );
  const projectInfo = await res.json();
  return projectInfo;
};