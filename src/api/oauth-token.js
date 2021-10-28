const petFinderKey = "c8CiKEI1WZbFyRSzWVhIoAlQUsYdUGaDAsJBrWMlW2LTD0SYGx";
const petFinderSecret = "vOw4xA1qfoRqeIOeQjB8U9oRHwfy3PIk5WeVQ5bT";

const fetchOauthToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", petFinderKey);
  params.append("client_secret", petFinderSecret);
  const petfinderRes = await fetch(
    "https://api.petfinder.com/v2/oauth2/token",
    {
      method: "POST",
      body: params,
    }
  );
  const data = await petfinderRes.json();
  return data;
};

export default fetchOauthToken;
