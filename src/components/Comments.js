import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Box, Grid, IconButton, Typography } from "@material-ui/core"

export const query = graphql`
  {
    allStrapiComments {
      nodes {
        id
        name
        comment
      }
      totalCount
    }
  }
`

const Comments = () => {
  const {
    allStrapiComments: { nodes: comments, totalCount },
  } = useStaticQuery(query)

  const [active, setActive] = React.useState(0)

  return (
    <Box component="article" marginY={10}>
      <Grid container>
        <Grid xs={12} className="text-center">
          <Box component="h5" marginBottom={5}>
            <Typography variant="h5">Riječi naših klijenata</Typography>
          </Box>
        </Grid>
        <Grid item direction="row" container alignItems="center">
          <Box clone order={{ xs: 2, sm: 1 }} marginTop={{ xs: 3, sm: 0 }}>
            <Grid item direction="column" xs={6} sm={2} className="text-center">
              <IconButton
                className="comment-btn"
                alignItems="center"
                onClick={() =>
                  setActive(active > 0 ? active - 1 : totalCount - 1)
                }
              >
                <FiChevronLeft size={28} />
              </IconButton>
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, sm: 2 }} paddingX={3}>
            <Grid
              item
              direction="column"
              xs={12}
              sm={8}
              className="text-center"
            >
              <Box component="article" paddingY={5} className="comment-card">
                <Box component="h3" marginBottom={3}>
                  {comments[active].name}
                </Box>
                <p>"{comments[active].comment}"</p>
              </Box>
            </Grid>
          </Box>
          <Box clone order={{ xs: 3, sm: 3 }} marginTop={{ xs: 3, sm: 0 }}>
            <Grid item direction="column" xs={6} sm={2} className="text-center">
              <IconButton
                className="comment-btn"
                onClick={() =>
                  setActive(active < totalCount - 1 ? active + 1 : 0)
                }
              >
                <FiChevronRight size={28} />
              </IconButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Comments
