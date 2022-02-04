// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const APIKEY = process.env.APIKEY;

export default async function handler(req, res) {
   console.log(req.headers.puuid);
   const data = async function () {
      const request = await fetch(
         `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${req.headers.puuid}/ids?start=0&count=20`,
         {
            method: "GET",
            headers: {
               Origin: "https://developer.riotgames.com",
               "X-Riot-Token": APIKEY,
            },
         }
      );
      const response = await request.json();
      return response;
   };
   const result = await data();
   console.log(result);
   res.status(200).json({ name: req.name, payload: result });
}
