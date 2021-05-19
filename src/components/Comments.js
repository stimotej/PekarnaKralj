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
        <Grid item xs={12} className="text-center">
          <Box marginBottom={5}>
            <Typography variant="h5" component="h3">
              Riječi naših klijenata
            </Typography>
          </Box>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Box clone order={{ xs: 2, sm: 1 }} marginTop={{ xs: 3, sm: 0 }}>
            <Grid item xs={6} sm={2} className="text-center">
              <IconButton
                className="comment-btn"
                aria-label="Pogledaj prethodni komentar"
                onClick={() =>
                  setActive(active > 0 ? active - 1 : totalCount - 1)
                }
              >
                <FiChevronLeft size={28} />
              </IconButton>
            </Grid>
          </Box>
          <Box clone order={{ xs: 1, sm: 2 }} paddingX={3}>
            <Grid item xs={12} sm={8} className="text-center">
              <Box
                component="article"
                paddingY={5}
                paddingX={3}
                className="comment-card"
              >
                <Box marginBottom={3}>
                  <Typography variant="h6" component="h4">
                    {comments[active].name}
                  </Typography>
                </Box>
                <Typography variant="body1" component="p">
                  "{comments[active].comment}"
                </Typography>
              </Box>
            </Grid>
          </Box>
          <Box clone order={{ xs: 3, sm: 3 }} marginTop={{ xs: 3, sm: 0 }}>
            <Grid item xs={6} sm={2} className="text-center">
              <IconButton
                className="comment-btn"
                aria-label="Pogledaj sljedeći komentar"
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
