const petFinderKey = "FH0CmnptF93sqY2kbZXkd9G3IjyBRcv37z3f2YBRY9SfOcVqca";
const petFinderSecret = "oll8WTBxeeKYoEjFjdA1wYeMup0OjKWpLWq1pqQi";

const token = async (req, res) => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', petFinderKey);
  params.append('client_secret', petFinderSecret);
  const petfinderRes = await fetch(
    "https://api.petfinder.com/v2/oauth2/token",
    {
      method: "POST",
      body: params
    }
  );
  const data = await petfinderRes.json();
  res.send(data);
}

export default token;