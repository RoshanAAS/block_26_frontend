import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [data,setData]=useState([])
  const getNotes = () => {
    const token = localStorage.getItem("token") || null;
    axios
      .get(`https://lilac-boa-hem.cyclic.app/notes`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return <>
  
  <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",marginTop:"100px",justifyContent:"space-evenly"}}>
    {
      data?.map((note)=>{
        return <div style={{padding:"15px",boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px"}} key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <h3>{note.categorey}</h3>
            <button style={{padding:"10px 20px",fontWeight:"bold",backgroundColor:"#5A002C",border:"none",color:"white"}}>Edit Note</button>
        </div>
      })
    }
    </div>
  </>;
};

export default Home;
