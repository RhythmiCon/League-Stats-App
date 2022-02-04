const APIKEY = process.env.APIKEY;

export default async function handler(req, res) {
   const data = async function () {
      const request = await fetch(
         `https://europe.api.riotgames.com/lol/match/v5/matches/${req.headers.matchID}`,
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
