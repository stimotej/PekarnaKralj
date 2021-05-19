import { IconButton, Modal } from "@material-ui/core"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { FiX } from "react-icons/fi"

const ImageModal = props => {
  return (
    <Modal
      open={props.imageState}
      onClose={props.handleClose}
      closeAfterTransition
      aria-labelledby="image-modal"
    >
      <>
        <GatsbyImage
          className="modal-image"
          image={props.imageState}
          imgStyle={{ borderRadius: "1rem" }}
          imgClassName="modal-image-img"
        />
        <IconButton
          className="modal-image-close-btn"
          aria-label="Zatvori pregled slike"
          onClick={props.handleClose}
        >
          <FiX size={28} color="white" />
        </IconButton>
      </>
    </Modal>
  )
}

export default ImageModal
