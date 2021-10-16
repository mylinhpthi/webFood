import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import "../Css/dist/HotDeals.css";
import { Avatar, Button, Container, Grid } from "@material-ui/core";
import { Paper } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { yellow } from "@material-ui/core/colors";
import HomeIcon from "@mui/icons-material/Home";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: '3em'
  },
}));
export default function HotDeals() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className="hot-deals">
        <div className="header">
        <div className="title">
          <h2>
            <FlashOnIcon sx={{ color: yellow[500] }} /> HOT DEALS
          </h2>
          <p> Kết thúc trong: </p>
        </div>
        <p className="button-more">Xem tất cả</p>
        </div>
        <Grid
          className="product"
          container
          rowSpacing={1}
          columns={{ xs: 5, md: 2 }}
        >
          <Grid className="product-item" item xs={6} sm={2}>
            <div className="product-main">
              <p className="hot-sale">-27%</p>
              <div
                className="image"
                style={{ backgroundImage: "url(/images/bg.png)" }}
              ></div>
              <div className="function">
                <AddShoppingCartIcon color="success" fontSize="large" />
                <VisibilityIcon color="success" fontSize="large" />
              </div>
            </div>

            <div className="product-content">
              <h3 className="name">1kg thịt bò Cube</h3>
              <div className="price">
                <p className="price-new">107.000đ</p>
                <p className="price-old">150.000đ</p>
              </div>
            </div>
          </Grid>
          <Grid className="product-item" item xs={6} sm={2}>
            <div className="product-main">
              <p className="hot-sale">-27%</p>
              <div
                className="image"
                style={{ backgroundImage: "url(/images/bg.png)" }}
              ></div>
              <div className="function">
                <AddShoppingCartIcon color="success" fontSize="large" />
                <VisibilityIcon color="success" fontSize="large" />
              </div>
            </div>

            <div className="product-content">
              <h3 className="name">1kg thịt bò Cube</h3>
              <div className="price">
                <p className="price-new">107.000đ</p>
                <p className="price-old">150.000đ</p>
              </div>
            </div>
          </Grid>
          <Grid className="product-item" item xs={6} sm={2}>
            <div className="product-main">
              <p className="hot-sale">-27%</p>
              <div
                className="image"
                style={{ backgroundImage: "url(/images/bg.png)" }}
              ></div>
              <div className="function">
                <AddShoppingCartIcon color="success" fontSize="large" />
                <VisibilityIcon color="success" fontSize="large" />
              </div>
            </div>

            <div className="product-content">
              <h3 className="name">1kg thịt bò Cube</h3>
              <div className="price">
                <p className="price-new">107.000đ</p>
                <p className="price-old">150.000đ</p>
              </div>
            </div>
          </Grid>
          <Grid className="product-item" item xs={6} sm={2}>
            <div className="product-main">
              <p className="hot-sale">-27%</p>
              <div
                className="image"
                style={{ backgroundImage: "url(/images/bg.png)" }}
              ></div>
              <div className="function">
                <AddShoppingCartIcon color="success" fontSize="large" />
                <VisibilityIcon color="success" fontSize="large" />
              </div>
            </div>

            <div className="product-content">
              <h3 className="name">1kg thịt bò Cube</h3>
              <div className="price">
                <p className="price-new">107.000đ</p>
                <p className="price-old">150.000đ</p>
              </div>
            </div>
          </Grid>
          <Grid className="product-item" item xs={6} sm={2}>
            <div className="product-main">
              <p className="hot-sale">-27%</p>
              <div
                className="image"
                style={{ backgroundImage: "url(/images/bg.png)" }}
              ></div>
              <div className="function">
                <AddShoppingCartIcon color="success" fontSize="large" />
                <VisibilityIcon color="success" fontSize="large" />
              </div>
            </div>

            <div className="product-content">
              <h3 className="name">1kg thịt bò Cube</h3>
              <div className="price">
                <p className="price-new">107.000đ</p>
                <p className="price-old">150.000đ</p>
              </div>
            </div>
          </Grid>
          <Grid className="product-item" item xs={6} sm={2}>
            <div className="product-main">
              <p className="hot-sale">-27%</p>
              <div
                className="image"
                style={{ backgroundImage: "url(/images/bg.png)" }}
              ></div>
              <div className="function">
                <AddShoppingCartIcon color="success" fontSize="large" />
                <VisibilityIcon color="success" fontSize="large" />
              </div>
            </div>

            <div className="product-content">
              <h3 className="name">1kg thịt bò Cube</h3>
              <div className="price">
                <p className="price-new">107.000đ</p>
                <p className="price-old">150.000đ</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
