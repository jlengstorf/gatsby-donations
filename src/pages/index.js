/** @jsx jsx */
import { jsx } from "theme-ui"
import Donation from "gatsby-theme-stripe-non-profit/src/components/pay-selection"

const IndexPage = () => {
  return (
    <div
      sx={{
        mx: "auto",
        my: "2rem",
        maxWidth: 500,
      }}
    >
      <h1>Keep us going with a donation!</h1>
      <Donation />
    </div>
  )
}

export default IndexPage
