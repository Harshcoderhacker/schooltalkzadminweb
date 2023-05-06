import Layout from "@/components/Layout";
import SchoolTable from "@/components/SchoolTable";
import LoginContext from "@/context/LogContext";
import Button from "@/ui/Button";
import { Montserrat } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { getData } from "./api/axios";
import getSchool from "@/data/schoolData";
import { BiSearch } from "react-icons/bi";
import Demo from "@/components/AddSchool";
import axios from "axios";
import UpdateModal from "@/components/UpdateSchool";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [schoolData, setSchoolData] = useState([]);
  const [schoolFilteredData, setSchoolFilteredData] = useState<any>(schoolData);
  const [query, setQuery] = useState("");
  const { validateUser } = useContext(LoginContext);
  const [modalOpen, setModalOpen] = useState(false);
  
  // console.log(modalOpen)

  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
    // console.log(modalOpen);
  };
  
  const path: string = "/allSchools";
  const getSchools = async () => {
    let res = await getSchool();
    console.log(res);
    setSchoolFilteredData(res);
  };

  const handleSearch = (e: any) => {
    setQuery(e);
    console.log(query);
    const term = e.trim().toLowerCase();
    if (term == "") {
      console.log(`h`);
      setSchoolFilteredData(schoolData);
      return;
    }
    const newFilteredSchoolData = schoolFilteredData.filter((school: any) => {
      return Object.values(school).join(" ").toLowerCase().includes(term);
    });
    setSchoolFilteredData(newFilteredSchoolData);
  };

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <div style={montserrat.style}>
      <Layout>
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-between w-fit gap-10 p-2">
            <div className="flex justify-between w-full mt-4">
              <div className="flex  w-fit border border-black rounded-lg">
                <input
                  type="text"
                  className="rounded-l-lg"
                  onChange={(e) => {
                    e.preventDefault();
                    handleSearch(e.target.value);
                  }}
                />
                <span className="">
                  <button
                    className={`bg-gradient-to-b p-2 from-[#faa401] to-[#fa5f01] rounded-r-lg`}
                    type="submit"
                  >
                    <span className="text-white text-2xl font-bold">
                      <BiSearch />
                    </span>
                  </button>
                </span>
              </div>
              <div>
                <Button color="orange" onClick={handleOpenModal}>
                  Add School
                </Button>
              </div>
            </div>

            <SchoolTable schoolFilteredData={schoolFilteredData} />
            {modalOpen ? <Demo handleOpenModal={handleOpenModal} /> : <></>}
            
          </div>
        </div>
      </Layout>
    </div>
  );
}
