import {Box, Modal} from "@mui/material";
import {ReactNode} from "react";

export const ModalWrapper = ({open, onClose,children}: { open: boolean, onClose: () => void, children: ReactNode }) => {
  return (
      <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      >
        <Box sx={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '8px',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          // Si el contenido no entra en la pantalla, el modal tiene scroll: así
          // se llega a todos sus botones. border-box hace que el 90vh incluya
          // el padding.
          boxSizing: 'border-box',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}>
          {children}
        </Box>
      </Modal>
  )
}
