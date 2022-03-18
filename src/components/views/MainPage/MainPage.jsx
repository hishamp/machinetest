import {
  Box,
  createTheme,
  Grid,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Cart from "../cart/cart";
import "./mainpage.css";
import classes from "./mainpage.module.css";
import Home from "../home/Home";
import { Outlet, useNavigate } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: "100%",
          background: "#489A3B",
          opacity: 0.2,
          borderRadius: 8,
          color: "black",
        },
        root: {
          background: "#ebebe0",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "black !important",
          fontWeight: "bold",
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ marginTop: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MainPage = () => {
  const cart = useSelector((state) => state.cart);
  const Navigate = useNavigate();
  console.log(cart);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    Navigate("/home", { replace: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={2}
        padding={3}
        paddingTop={0}
      >
        <Grid item xs={12}>
          <Typography variant="h4">B MART SUPERMARKET</Typography>
          <Typography variant="h6">Ontario, London</Typography>
        </Grid>
        <Grid
          item
          xs={cart.length > 0 ? 8.5 : 12}
          xl={cart.length > 0 ? 9 : 12}
        >
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                indicatorColor="secondary"
                value={value}
                onChange={handleChange}
              >
                <Tab
                  onClick={() => {
                    Navigate("/home");
                  }}
                  sx={{
                    width: "25%",
                  }}
                  label="Home"
                  {...a11yProps(0)}
                />
                <Tab
                  onClick={() => {
                    Navigate("/transactions");
                  }}
                  sx={{ width: "25%" }}
                  label="Transactions"
                  {...a11yProps(1)}
                />
                <Tab
                  onClick={() => {
                    Navigate("/cashier");
                  }}
                  sx={{ width: "25%" }}
                  label="Cashier"
                  {...a11yProps(2)}
                />
                <Tab
                  onClick={() => {
                    Navigate("/settings");
                  }}
                  sx={{ width: "25%" }}
                  label="Settings"
                  {...a11yProps(3)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Outlet />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Outlet />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Outlet />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Outlet />
            </TabPanel>
          </Box>
        </Grid>
        {cart.length > 0 && (
          <Grid item xs={3.5} xl={3} className={classes.cart}>
            <Cart />
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default MainPage;
