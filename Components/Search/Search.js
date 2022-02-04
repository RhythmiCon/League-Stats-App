import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Search({ setResult, result }) {
   const [input, setInput] = useState("");
   const [sumID, setSumID] = useState("");
   const [sumPUUID, setSumPUUID] = useState("");
   const [matchID, setMatchID] = useState("");

   async function getID() {
      const req = await fetch(`./api/fetchID`, {
         method: "GET",
         headers: {
            name: input,
         },
      });
      const res = await req.json();
      setResult({ ...result, accInfo: res });
      setSumID(res.id);
      setSumPUUID(res.puuid);
   }

   useEffect(() => {
      if (sumPUUID === "") return;
      async function getBasicData() {
         const req = await fetch(`./api/fetchMatchIDByPUUID`, {
            method: "GET",
            headers: {
               puuid: sumPUUID,
            },
         });
         const matchIDs = await req.json();

         setResult({ ...result, matchIDs });
      }
      getBasicData();
      console.log(result);
   }, [sumPUUID]);

   function handleInput(e) {
      setInput(e.target.value);
   }

   function handleClick(e) {
      e.preventDefault();
      getID();
      setInput("");
   }

   return (
      <>
         <form action="">
            <input
               value={input}
               onChange={(e) => handleInput(e)}
               type="text"
               placeholder="Search for a summoner..."
            ></input>
            <button onClick={(e) => handleClick(e)}>Search</button>
         </form>
      </>
   );
}
