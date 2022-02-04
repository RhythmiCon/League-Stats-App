import React from "react";
import Image from "next/image";

export default function Result({ result }) {
   return (
      <div>
         {result.accInfo ? (
            <div>
               <h1>{result.accInfo.name}</h1>
               <Image
                  src={`https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${result.accInfo.profileIconId}.png`}
                  alt={"profile icon"}
                  height={80}
                  width={80}
               />
               <h2>Level: {result.accInfo.summonerLevel}</h2>
            </div>
         ) : null}
      </div>
   );
}
