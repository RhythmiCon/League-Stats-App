import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Search({ setResult, result }) {
  const [input, setInput] = useState("");
  const [sumID, setSumID] = useState("");
  const [sumPUUID, setSumPUUID] = useState("");

  async function getID() {
    const req = await fetch(`./api/fetchID`, {
      method: "GET",
      headers: {
        name: input,
      },
    });
    const res = await req.json();
    setResult(res);
    setSumID(res.payload.id);
    setSumPUUID(res.payload.puuid);
    return res.payload.puuid;
  }

  useEffect(() => {
    if (sumPUUID === "") return;
    async function getBasicData() {
      console.log(sumPUUID);
      const req = await fetch(`./api/fetchByPUUID`, {
        method: "GET",
        headers: {
          puuid: sumPUUID,
        },
      });
      const res = await req.json();
      console.log(res);
      return res;
    }
    const data = getBasicData();
    return data;
  }, [sumPUUID]);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    getID();
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
