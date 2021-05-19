import { Grid } from "@material-ui/core"
import React from "react"
import Card from "./Card"

const Cards = ({ cards }) => {
  return (
    <section>
      <Grid container alignItems="center">
        {cards.map((card, index) => {
          return (
            <div key={card.id}>
              {index % 2 === 0 ? (
                <Card index={index} {...card} />
              ) : (
                <Card index={index} {...card} reverse />
              )}
            </div>
          )
        })}
      </Grid>
    </section>
  )
}

export default Cards
