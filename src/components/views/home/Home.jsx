import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux";
import classes from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Ashirvadh Atta / Godhihitu Whole wheat",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/126903_8-aashirvaad-atta-whole-wheat.jpg",
    },
    {
      id: 2,
      name: "Tasties Rusk",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/40106015_11-tasties-rusk-suji-elaichi.jpg",
    },
    {
      id: 3,
      name: "Ashirvadh Atta / Godhihitu Whole wheat",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/126903_8-aashirvaad-atta-whole-wheat.jpg",
    },
    {
      id: 4,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/40106015_11-tasties-rusk-suji-elaichi.jpg",
    },
    {
      id: 5,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/126903_8-aashirvaad-atta-whole-wheat.jpg",
    },
    {
      id: 6,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/126903_8-aashirvaad-atta-whole-wheat.jpg",
    },
    {
      id: 7,
      name: "Ashirvadh Atta / Godhihitu Whole wheat",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/40106015_11-tasties-rusk-suji-elaichi.jpg",
    },
    {
      id: 8,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/126903_8-aashirvaad-atta-whole-wheat.jpg",
    },
    {
      id: 9,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/40106015_11-tasties-rusk-suji-elaichi.jpg",
    },
    {
      id: 14,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/40106015_11-tasties-rusk-suji-elaichi.jpg",
    },
    {
      id: 10,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/126903_8-aashirvaad-atta-whole-wheat.jpg",
    },
    {
      id: 11,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/126903_8-aashirvaad-atta-whole-wheat.jpg",
    },
    {
      id: 12,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/126903_8-aashirvaad-atta-whole-wheat.jpg",
    },
    {
      id: 13,
      name: "Ashirvadh Atta",
      pdcode: "11324",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/l/126903_8-aashirvaad-atta-whole-wheat.jpg",
    },
  ]);

  const addToCartHandler = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Autocomplete
          size="small"
          freeSolo
          sx={{ width: "93%" }}
          id="free-solo-2-demo"
          disableClearable
          options={["hi", "hello"]}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <Button
          variant="contained"
          sx={{
            marginLeft: 5,
            background: "#489A3B",
            color: "black",
          }}
        >
          <Search color="black" />
        </Button>
      </div>
      <Grid container sx={{ marginTop: 1 }} spacing={1}>
        {items.slice(0, cart.length > 0 ? 10 : items.length).map((i) => {
          return (
            <Grid item xs={cart.length > 0 ? 12 / 5 : 12 / 7} key={i.id}>
              <Card
                className={classes.card}
                variant="outlined"
                sx={{
                  boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2) ",
                }}
              >
                <CardMedia
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: 100,
                    width: "100%",
                  }}
                >
                  <img src={i.img} alt="pi" />
                </CardMedia>
                <CardContent sx={{ pb: 0 }}>
                  <div style={{ height: 45 }}>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: 12,
                        padding: 0,
                        marginBottom: 2,
                      }}
                    >
                      {i.name}
                    </p>
                    <p
                      style={{
                        padding: 0,
                        margin: 0,
                        color: "grey",
                        fontSize: 11,
                      }}
                    >
                      Product Code:{i.pdcode}
                    </p>
                  </div>
                  <p
                    style={{
                      padding: 0,
                      marginTop: 3,
                      marginBottom: 0,
                      color: "lightgreen",
                    }}
                  >
                    {i.price}$
                  </p>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      addToCartHandler(i);
                    }}
                    sx={{ background: "#489A3B" }}
                    fullWidth
                    variant="contained"
                  >
                    <Typography variant="button">Add to Cart</Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
