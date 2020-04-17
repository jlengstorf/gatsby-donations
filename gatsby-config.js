require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-theme-stripe-non-profit",
      options: {
        stripePublicKey: process.env.STRIPE_API_PUBLIC,
        successUrl: "http://localhost:8000/thank-you",
      },
    },
  ],
}
