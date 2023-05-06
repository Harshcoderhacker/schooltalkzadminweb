import { postData } from "@/pages/api/axios";
import InputSchool from "@/ui/AddSchoolInput";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
type Props = {
  handleOpenModal: () => void;
};
interface obj {
  // code: string;
  name: string;
  subdomain_requested: string;
  location: string;
  email: string;
  contact_name: string;
  phone: string;
  password: string;
}
const path: string = "/createSchool";
const Demo = ({ handleOpenModal }: Props) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const obj = {
      // code: code,
      name: name,
      subdomain_requested: domain,
      location: location,
      email: email,
      contact_name: contactName,
      phone: phone,
      password: password,
    };
    console.log(obj);

    try {
      let res = await postData({ path, obj });
      console.log(res);
      alert("School Added Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" absolute backdrop-blur-[2px] w-full h-[70%]">
      <div className="absolute top-0 bottom-0 right-0 left-0 m-auto   w-[70%] bg-black p-5 overflow-y-scroll">
        <div className=" text-4xl bold text-white p-4">
          <h3 className=" text-center  ">Add School</h3>
          <div
            className="absolute top-4 right-8 cursor-pointer "
            onClick={handleOpenModal}
          >
            <IoCloseOutline />
          </div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
            {/* <InputSchool
              name={"schoolCode"}
              value={code}
              label={"School Code"}
              placeholder="Enter School Code"
              type="text"
              onChange={(e: any) => {
                setCode(e.target.value);
              }}
            /> */}
            <InputSchool
              name={"schoolName"}
              value={name}
              label={"School name"}
              placeholder="Enter School Name"
              type="text"
              onChange={(e: any) => {
                setName(e.target.value);
              }}
            />
            <InputSchool
              name={"domain"}
              value={domain}
              label={"Domain"}
              placeholder="Enter Domain"
              type="text"
              onChange={(e: any) => {
                setDomain(e.target.value);
              }}
            />
            <InputSchool
              name={"name"}
              value={contactName}
              label={"Contact Name"}
              placeholder="Enter Contact name"
              type="text"
              onChange={(e: any) => {
                setContactName(e.target.value);
              }}
            />
            <InputSchool
              name={"location"}
              value={location}
              label={"Location"}
              placeholder="Enter Location"
              type="text"
              onChange={(e: any) => {
                setLocation(e.target.value);
              }}
            />

            <InputSchool
              name={"email"}
              value={email}
              label={"Email ID"}
              placeholder="Enter Email Id"
              type="email"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
            <InputSchool
              name={"password"}
              value={password}
              label={"Password"}
              placeholder="Enter Password"
              type="password"
              onChange={(e: any) => {
                setpassword(e.target.value);
              }}
            />

            <InputSchool
              name={"phone"}
              value={phone}
              label={"Phone Number"}
              placeholder="Enter Phone Number"
              type="tel"
              onChange={(e: any) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="text-white font-bold text-center">
            <input
              className=" bg-gradient-to-b from-[#FAA501] to-[#FA5E01]  rounded-md  w-28 p-3 cursor-pointer"
              type="submit"
              value={"Submit"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Demo;
