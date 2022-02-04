import React from "react";

export default function Result({ result }) {
   return (
      <div>
         {result.accInfo ? (
            <div>
               <h1>{result.accInfo.name}</h1>
               <h2>Level: {result.accInfo.summonerLevel}</h2>
            </div>
         ) : null}
      </div>
   );
}
