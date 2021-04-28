const axios = require('axios').default;

exports.handler = async function(event, context) {
  const { email, honey } = JSON.parse(event.body);

  if (honey !== '') {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Bot submission', type: 'BOT' }),
    };
  }

  const url = `https://emailoctopus.com/api/1.5/lists/${process.env.EMAIL_LIST_ID}/contacts`;
  const payload = {
    api_key: process.env.EMAIL_OCTOPUS_API_KEY,
    email_address: email,
  };

  console.log(url);
  console.log(payload);

  try {
    const resp = await axios.post(url, payload);
    console.log(resp.data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'failed', err }),
    };
  }
};
