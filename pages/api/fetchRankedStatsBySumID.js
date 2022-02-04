// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const APIKEY = process.env.APIKEY;

export default async function handler(req, res) {
   console.log(req.headers.id);
   const data = async function () {
      const request = await fetch(
         `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.headers.id}`,
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
