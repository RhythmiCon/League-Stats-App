// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const APIKEY = process.env.APIKEY;
console.log(APIKEY);

export default async function handler(req, res) {
   const data = async function () {
      const request = await fetch(
         `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.headers.name}`,
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
   res.status(200).json(result);
}
