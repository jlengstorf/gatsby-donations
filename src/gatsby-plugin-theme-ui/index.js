import { merge } from "theme-ui"
import baseTheme from "gatsby-theme-stripe-non-profit/src/gatsby-plugin-theme-ui"

const theme = merge(baseTheme, {
  colors: {
    background: "powderblue",
    primary: "hotpink",
    muted: "white",
    text: "black",
  },
})

export default theme
