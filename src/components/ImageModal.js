import { IconButton, Modal } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { FiX } from "react-icons/fi"

const ImageModal = ({ imageState, handleClose }) => {
  return (
    <Modal
      open={imageState}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="Image modal"
    >
      <>
        <GatsbyImage
          className="modal-image"
          image={imageState}
          imgStyle={{ borderRadius: "1rem" }}
          imgClassName="modal-image-img"
        />
        <IconButton
          className="modal-image-close-btn"
          aria-label="Zatvori pregled slike"
          onClick={handleClose}
        >
          <FiX size={28} color="white" />
        </IconButton>
      </>
    </Modal>
  )
}

export default ImageModal
