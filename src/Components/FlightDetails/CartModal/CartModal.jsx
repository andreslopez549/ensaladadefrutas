import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { BsChevronUp } from "react-icons/bs";
import { useState } from "react";

const CartModal = ({ totalAmount, items, cartSubmit, buttonText, Submit }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          right: { xs: "0%", sm: "15%",md:"10%" },
          width: { xs: "100%", sm: "500px" },
        }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              background: "#fff",
              position: "fixed",
              bottom: "11.2%",
              right: { xs: "0%", sm: "15%",md:"10%" },
              width: { xs: "100%", sm: "500px" },
              outline: "none",
              borderRadius: "10px 10px 0 0",
              p: 2,
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Carrito de compras
            </Typography>
            <Divider />
            <Box sx={{ my: 3 }}>
              <Typography variant="h6">TARIFA AÉREA</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Tarifa de adulto</Typography>
                <Typography>X{items}</Typography>
                <Typography>{totalAmount}COP</Typography>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ my: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">TOTAL</Typography>
                <Typography variant="h6">{totalAmount}COP</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography className="text-muted">
                  Incluye impuestos y tasas
                </Typography>
                <Typography variant="h6">COP</Typography>
              </Box>
            </Box>
          </Box>
        </Modal>
        <Box
          sx={{
            backgroundColor: "#3c3c3c",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "10px 10px 0 0",
            color: "white",
            py: 2,
            px: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <GiShoppingCart style={{ fontSize: "30px" }} />
            <Typography sx={{ mx: 1 }}>{items} items</Typography>
            <BsChevronUp onClick={() => setOpen(!open)} />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ mx: 1 }}>{totalAmount} COP</Typography>
            <Button
              variant="contained"
              type={`${Submit && "Submit"}`}
              onClick={(e) => cartSubmit(e)}
              sx={{
                backgroundColor: "#ff8200",
                borderRadius: "20px",
                padding: "7px 30px",
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartModal;
