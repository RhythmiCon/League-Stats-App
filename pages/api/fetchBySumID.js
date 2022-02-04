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
