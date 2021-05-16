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
        <div className="modal-image-container">
          <GatsbyImage className="modal-image" image={props.imageState} />
        </div>
        <IconButton
          className="modal-image-close-btn"
          onClick={props.handleClose}
        >
          <FiX size={28} color="white" />
        </IconButton>
      </>
    </Modal>
  )
}

export default ImageModal
