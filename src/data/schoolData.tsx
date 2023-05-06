// import { getData } from "@/pages/api/axios";
// import { useEffect, useState } from "react";

import { getData } from "@/pages/api/axios";

// // export default [
// //   {
// //     schoolCode: "12",
// //     schoolName: "St. abc",
// //     subdomain: "johns",
// //     contactPerson: "adm",
// //     email: "johns@gmail.com",
// //     phone: "+919876543210",
// //     location: "Chennai",
// //     isActive: "true",
// //   },
// //   {
// //     schoolCode: "12",
// //     schoolName: "St. Johns",
// //     subdomain: "johns",
// //     contactPerson: "adm",
// //     email: "johns@gmail.com",
// //     phone: "+919876543210",
// //     location: "haj",
// //     isActive: "false",
// //   },
// //   {
// //     schoolCode: "12",
// //     schoolName: "St. Johns",
// //     subdomain: "johns",
// //     contactPerson: "adm",
// //     email: "johns@gmail.com",
// //     phone: "+919876543210",
// //     location: "Chennai",
// //     isActive: "true",
// //   },
// //   {
// //     schoolCode: "12",
// //     schoolName: "St. Johns",
// //     subdomain: "johns",
// //     contactPerson: "adm",
// //     email: "johns@gmail.com",
// //     phone: "+919876543210",
// //     location: "Chennai",
// //     isActive: "false",
// //   },
// //   {
// //     schoolCode: "12",
// //     schoolName: "St. Johns",
// //     subdomain: "johns",
// //     contactPerson: "adm",
// //     email: "johns@gmail.com",
// //     phone: "+919876543210",
// //     location: "Chennai",
// //     isActive: "false",
// //   },
// //   {
// //     schoolCode: "12",
// //     schoolName: "St. Johns",
// //     subdomain: "johns",
// //     contactPerson: "adm",
// //     email: "johns@gmail.com",
// //     phone: "+919876543210",
// //     location: "Chennai",
// //     isActive: "false",
// //   },
// //   {
// //     schoolCode: "12",
// //     schoolName: "St. Johns",
// //     subdomain: "johns",
// //     contactPerson: "adm",
// //     email: "johns@gmail.com",
// //     phone: "+919876543210",
// //     location: "Chennai",
// //     isActive: "false",
// //   },
// // ];
// // interface schoolObj {
// //   schoolCode: string;
// //   schoolName: string;
// //   subdomain: string;
// //   contactPerson: string;
// //   email: string;
// //   phone: string;
// //   location: string;
// //   isActive: string;
// // }
let path: string = `/allSchools`;
// let data: [] = [];
// const getSchool = async () => {
//   // let [schoolss, setSchools] = useState([]);
//   let res = await getData({ path });
//   console.log(res.data.message);
//   // setSchools(res.data.message);
//   data = res.data.message;
//   return res.data.message;
// };
// getSchool()
// // useEffect(() => {
// //   getSchool();
// // }, []);
// export default data;

const getSchool = async () => {
  let res = await getData({ path });
  // console.log(res.data.message);
  return res.data.message;
};
export default getSchool;
