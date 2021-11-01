const path = require('path');
require('dotenv').config({
  path: `.env`
});

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'lifefix',
        apis: [
          {
            endpoint: "hp-news",
          },
        ],
      },
    },
  ],
}
