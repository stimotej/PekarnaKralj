import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core"
import ImageModal from "./ImageModal"

const Gallery = ({
  title,
  description,
  backgroundImage,
  images,
  categoryList,
}) => {
  const gatsbyImage = getImage(backgroundImage)

  const [categorySelected, setCategorySelected] = React.useState("")

  const handleCategorySelect = event => {
    setCategorySelected(event.target.value)
  }

  const [imageModal, setImageModal] = React.useState(null)

  const handleImageModalClose = () => setImageModal(null)
  const handleImageModal = img => setImageModal(getImage(img.image))

  return (
    <>
      <GatsbyImage
        image={gatsbyImage}
        className="about-image"
        imgStyle={{
          objectFit: "cover",
          objectPosition: "50% 10%",
        }}
      />
      <Grid container className="about-content padding">
        <Grid item>
          <Typography variant="h4">{title}</Typography>

          <Box paddingY={4}>
            <Typography variant="body1">{description}</Typography>
          </Box>

          {categoryList && (
            <Box paddingBottom={4}>
              <FormControl>
                <Select
                  inputProps={{ "aria-label": "Without label" }}
                  value={categorySelected}
                  displayEmpty
                  onChange={handleCategorySelect}
                >
                  {categoryList.map(category => {
                    return (
                      <MenuItem value={category.value}>
                        {category.name}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Box>
          )}
        </Grid>
        <Grid item container spacing={3}>
          {images.map(img => {
            return (
              <>
                {(img.category === categorySelected ||
                  categorySelected === "") && (
                  <Grid item xs={12} sm={6} lg={4}>
                    <div
                      onClick={() => handleImageModal(img)}
                      onKeyDown={() => handleImageModal(img)}
                      role="button"
                      tabIndex="0"
                    >
                      <GatsbyImage
                        image={getImage(img.image)}
                        className="about-images"
                        style={{
                          gridArea: "1/1",
                        }}
                        layout="fullWidth"
                      />
                    </div>
                  </Grid>
                )}
              </>
            )
          })}
        </Grid>
        <ImageModal
          imageState={imageModal}
          handleClose={handleImageModalClose}
        />
      </Grid>
    </>
  )
}

export default Gallery
