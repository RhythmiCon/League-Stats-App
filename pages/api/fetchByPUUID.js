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
          "X-Riot-Token": "RGAPI-6e07d583-d2fc-4e04-8d5d-72c8b46cd5d1",
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
