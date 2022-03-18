import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import exc from "./exclamation.png";
import classes from "./paydialog.module.css";

// slider added for animation
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PayDialog = (props) => {
  return (
    <Dialog
      fullWidth
      TransitionComponent={Transition}
      //className={classes.paydiv} {made for animation}
      sx={{ maxWidth: 430, position: "fixed", left: "30%" }}
      open={props.open}
      onClose={props.handleClose}
    >
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 6 }}>
        <img style={{ height: 60, width: 60 }} src={exc} alt="exclm" />
      </div>
      <DialogTitle
        sx={{
          paddingTop: 0,
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 4,
        }}
      >
        Payment Confirmation
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2">Sub Total</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Typography>{props.total}$</Typography>
          </Grid>
          <Grid item xs={6}>
            Tax
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            20$
          </Grid>
          <Grid item xs={12}>
            <hr></hr>
          </Grid>
          <Grid item xs={6}>
            Total
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right", color: "green" }}>
            220$
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ padding: "20px" }}>
        <Button
          onClick={props.handleClose}
          sx={{ width: "40%", border: "1px solid red", color: "red" }}
        >
          Discard
        </Button>
        <Button
          onClick={props.handleClose}
          sx={{
            width: "60%",
            color: "white",
            background: "blue",
            ":hover": {
              background: "blue",
            },
          }}
        >
          Pay Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayDialog;
