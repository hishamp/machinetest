import { Add, Delete, DeleteOutline, Remove } from "@mui/icons-material";
import {
  Typography,
  Card,
  Container,
  Box,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, deleteItem, addItem } from "../../redux";
import classes from "./cart.module.css";
import PayDialog from "./diologue/paydialogue";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container style={{ height: 700 }}>
      <div
        className={classes.headerdiv}
        style={{
          borderRadius: 3,
          height: 46,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
          }}
        >
          Cart
        </Typography>
      </div>
      <Box
        sx={{
          marginTop: 2,
          background: "#ebebe0",
          paddingTop: 2,
          height: "78%",
          position: "relative",
        }}
      >
        <div className={classes.scroll}>
          {cart.map((item) => {
            return (
              <Card
                key={item.id}
                variant="outlined"
                sx={{
                  display: "flex",
                  margin: 1,
                  position: "relative",
                }}
              >
                <CardMedia
                  sx={{
                    width: "25%",
                    height: "auto",
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img style={{ width: "100%" }} src={item.img} alt="pi" />
                </CardMedia>
                <CardContent sx={{ paddingTop: 0.5, maxWidth: "60%" }}>
                  <Typography fontSize={12} fontWeight={600}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: "grey" }} fontSize={10}>
                    product code : {item.pdcode}
                  </Typography>
                  <Typography
                    sx={{ color: "green" }}
                    fontSize={10}
                    fontWeight={"bold"}
                  >
                    {item.price}$
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <IconButton
                      disableRipple
                      size="small"
                      onClick={() => {
                        dispatch(removeItem(item));
                      }}
                      sx={{
                        borderRadius: 1,
                        background: "lightgreen",
                        height: 20,
                        color: "green",
                        width: 20,
                      }}
                    >
                      <Remove fontSize="small" sx={{ padding: 0 }} />
                    </IconButton>
                    <p style={{ margin: 0, marginLeft: 3, marginRight: 3 }}>
                      {item.count}
                    </p>
                    <IconButton
                      onClick={() => {
                        dispatch(addItem(item));
                      }}
                      disableRipple
                      size="small"
                      sx={{
                        borderRadius: 1,
                        background: "lightgreen",
                        color: "green",
                        height: 20,
                        width: 20,
                      }}
                    >
                      <Add fontSize="2" />
                    </IconButton>
                  </div>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "15%",
                    position: "absolute",
                    padding: 0,
                    right: 1,
                  }}
                >
                  <Button
                    onClick={() => {
                      dispatch(deleteItem(item.id));
                    }}
                  >
                    <DeleteOutline sx={{ color: "red" }} />
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
        <Box sx={{ padding: 1, position: "absolute", bottom: 0, width: "95%" }}>
          <Grid container rowSpacing={1}>
            <Grid item xs={6}>
              <p style={{ margin: 0 }}> Sub total </p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <p style={{ margin: 0, fontWeight: "bold" }}> {totalPrice}$ </p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ margin: 0 }}> Tax </p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <p style={{ margin: 0, fontWeight: "bold" }}> 20$ </p>
            </Grid>
            <Grid item xs={12}>
              <hr></hr>
            </Grid>
            <Grid item xs={6}>
              <p style={{ margin: 0 }}> Total </p>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <p style={{ margin: 0, fontWeight: "bold", color: "green" }}>
                {totalPrice + 20}$
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                onClick={() => {
                  setOpen(true);
                }}
                variant="outlined"
                sx={{
                  background: "blue",
                  color: "white",
                  width: "90%",
                  marginTop: 1,
                  ":hover": {
                    background: "blue",
                  },
                }}
              >
                Pay Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <PayDialog total={totalPrice} open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Cart;
