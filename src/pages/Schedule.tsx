// import  { useState } from 'react';

import { Table, Tag } from "antd";
import type { TableProps } from "antd";
interface DataType {
  time: string;
  title: string;
 
  tags: string[];
}

const App = () => {
  // const [open, setOpen] = useState(true);

//   const downloadQRCode = () => {
//     const canvas = document
//       .getElementById("myqrcode")
//       ?.querySelector<HTMLCanvasElement>("canvas");
//     if (canvas) {
//       const url = canvas.toDataURL();
//       const a = document.createElement("a");
//       a.download = "QRCode.png";
//       a.href = url;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
// //     }
//   };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (text) => <a>{text}</a>,
    },
   {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "geekblue";
            if (tag === "PENDING") {
              color = "volcano";
            }
            if (tag === "DONE") {
                color = "green";
             
            } 

            // return (
            //     <div className="items-center"><Tag color={color} key={tag}>
            //     {tag.toUpperCase()}
            //   </Tag></div>
              
            // );
            return (
                <div className="flex justify-center items-center">
                  {tags.map(tag => (
                    <Tag color={color} key={tag} className="m-1">
                      {tag.toUpperCase()}
                    </Tag>
                  ))}
                </div>
              );
          })}
        </>
      ),
    },
   
  ];

  const data: DataType[] = [
    {
      time: "7.30am",
      title: "Registration",
      tags: ["DONE"],
    },
    {
        time: "8.00am",
        title: "Innauguration and Introduction",
        tags: ["DONE"],
      },
      {
        time: "8.30am",
        title: "Welcome address by the Conference Chair",
        tags: ["DONE"],
      },
      {
        time: "8.35am",
        title: "Welcome address by UCSC Director",
        tags: ["DONE"],
      },
      {
        time: "8.40am",
        title: "Welcome address by Vice Chancellor",
        tags: ["ON GOING"],
      },
      {
        time: "8.50am",
        title: "Welcome address by the Chief Guest",
        tags: ["PENDING"],
      },
      {
        time: "9.00am",
        title: "Keynote speech by Dr.Ruvan Weerasingha ",
        tags: ["PENDING"],
      },
      {
        time: "10.00am",
        title: "Tea Break",
        tags: ["PENDING"],
      },
      {
        time: "10.30am",
        title: "TECH TALK:Cambio Software Engineering",
        tags: ["PENDING"],
      },
      {
        time: "10.50am",
        title: "Paper Presentation (Session 01)",
        tags: ["PENDING"],
      },
      {
        time: "11.50am",
        title: "TECH TALK:Altria Consulting & WIA Systems Inc.",
        tags: ["PENDING"],
      },
      {
        time: "12.10am",
        title: "Keynote speech by Prof.Thimothy Baldwin ",
        tags: ["PENDING"],
      },
      {
        time: "01.10am",
        title: "Lunch Break",
        tags: ["PENDING"],
      },
      {
        time: "02.10am",
        title: "TECH TALK:Softlogic Information Technologies(pvt) Ltd & Dell Technologies",
        tags: ["PENDING"],
      },
      {
        time: "02.30am",
        title: "Paper Presentation (Session 02)",
        tags: ["PENDING"],
      },
      {
        time: "03.35am",
        title: "Keynote speech by Italo Vignoli",
        tags: ["PENDING"],
      },
      {
        time: "04.35am",
        title: "Tea Break & Reception",
        tags: ["PENDING"],
      },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full mt-10 ml-50">
      <h1 className="text-2xl font-semibold text-center text-sky-700">
        ICTer Conference 2024
      </h1>
      <h2 className="text-2xl font-semibold text-center">Welcome Sponsors!</h2>
      <br></br>
      <p> Conference Schedule </p>
      <p> DAY 01 - 2024/11/06</p><br></br>
    <div className="h-full">
      <Table columns={columns} dataSource={data} /></div>
    </div>
  );
};

export default App;
