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
          "X-Riot-Token": "RGAPI-6e07d583-d2fc-4e04-8d5d-72c8b46cd5d1",
        },
      }
    );
    const response = await request.json();
    return response;
  };
  const result = await data();
  res.status(200).json({ name: req.headers.name, payload: result });
}
