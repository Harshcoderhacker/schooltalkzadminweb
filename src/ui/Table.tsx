import { ReactNode, useState } from "react";
import { useTable } from "react-table";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Link from "next/link";
import Switch from "./Switch";
import data from "@/data/schoolData";
import UpdateModal from "@/components/UpdateSchool";

type IsActiveProp = { isActive: any; onClick: any };

// const a =async ()=>{
//   let res = await data()
//   console.log(res)
// }
// a()
// console.log(data);

const RenderIsActive = ({ isActive }: IsActiveProp) => {
  // console.log(isActive?.props.cell.value)
  return (
    <div
      className={`h-2 w-2 rounded-full ${
        isActive?.props.cell.value === "true" ? "bg-green-400" : "bg-red-400"
      }`}
    ></div>
  );
};
const handleEdit = () => {};

function Table({ columns, data }: any) {
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
  const handleUpdateModal = () => {
    setModalUpdateOpen(!modalUpdateOpen);
  };
  // Use the state and functions returned from useTable to build your UI
  const RenderMore = ({ isActive, onClick }: IsActiveProp) => {
    // console.log(isActive.isActive)
    // console.log(schoolData[5])
    // return
    return (
      <Menu
        menuButton={
          <MenuButton>
            <div className="w-max flex justify-between items-center font-open cursor-pointer">
              ...
            </div>
          </MenuButton>
        }
        transition
      >
        <button className="pl-6" onClick={handleUpdateModal}>
          Edit
        </button>
        <MenuItem>
          <span className="mr-3">Active </span>
          <Switch active={isActive === "false"} />
        </MenuItem>
        {/* <MenuItem>Hi</MenuItem>
        <MenuItem>
          <div className="w-full h-max">Log out</div>
        </MenuItem> */}
      </Menu>
    );
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <div className="mt-2 flex flex-col items-center justify-start border-2 overflow-y-auto min-h-[200px] max-h-[400px] ">
      {/* <button onClick={a}>click me</button> */}
      <table
        {...getTableProps()}
        className="relative divide-y divide-gray-200  "
      >
        <thead className="bg-light-grey sticky top-0">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <>
                  {/* {console.log(column)} */}
                  <th
                    {...column.getHeaderProps()}
                    key={column.id}
                    className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
                  >
                    {column.render("Header")}
                  </th>
                </>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="" {...getTableBodyProps()}>
          {rows.map((row, rowNumber) => {
            prepareRow(row);
            console.log(row);
            return (
              <tr {...row.getRowProps()} key={rowNumber}>
                {row.cells.map((cell, i) => {
                  return (
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      {...cell.getCellProps()}
                      key={i}
                    >
                      <>
                        {i === 0 ? (
                          <>
                            {/* {console.log(rows)} */}
                            <RenderIsActive isActive={cell.render("Cell")} onClick={()=>{}} />
                          </>
                        ) : i !== 8 ? (
                          cell.render("Cell")
                        ) : (
                          // <></>
                          <RenderMore
                            isActive={data[rowNumber].isActive}
                            onClick={() => {
                              console.log(data[rowNumber]);
                            }}
                          />
                        )}
                      </>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="absolute m-auto top-[10%] bottom-0 left-0 right-0 ">
        {modalUpdateOpen ? (
          <UpdateModal handleUpdateModal={handleUpdateModal} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Table;
