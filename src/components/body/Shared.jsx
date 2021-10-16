import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import "../Css/dist/shared.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container } from "@material-ui/core";
import { Paper } from "@mui/material";
function Shared() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Container className="shared">
      <div className="shared_header">
        <p>Chia sẻ bí quyết</p>
      </div>
      <Slider {...settings}>
        <div className="shared_item">
          <img className="image" src="https://picsum.photos/200" alt="" />
          <Paper className="content">
            <p className="header">Rau củ quả Thực phẩm 100% sạch</p>
            <p className="subcontent">
              Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an
              toàn thực phẩm
            </p>
            <Button className="button button-effect">Xem chi tiết</Button>
          </Paper>
        </div>
        <div className="shared_item">
          <img className="image" src="https://picsum.photos/200" alt="" />
          <Paper className="content">
            <p className="header">Rau củ quả Thực phẩm 100% sạch</p>
            <p className="subcontent">
              Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an
              toàn thực phẩm
            </p>
            <Button className="button button-effect">Xem chi tiết</Button>
          </Paper>
        </div>
        <div className="shared_item">
          <img className="image" src="https://picsum.photos/200" alt="" />
          <Paper className="content">
            <p className="header">Rau củ quả Thực phẩm 100% sạch</p>
            <p className="subcontent">
              Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an
              toàn thực phẩm
            </p>
            <Button className="button button-effect">Xem chi tiết</Button>
          </Paper>
        </div>
        <div className="shared_item">
          <img className="image" src="https://picsum.photos/200" alt="" />
          <Paper className="content">
            <p className="header">Rau củ quả Thực phẩm 100% sạch</p>
            <p className="subcontent">
              Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an
              toàn thực phẩm
            </p>
            <Button className="button button-effect">Xem chi tiết</Button>
          </Paper>
        </div>
        <div className="shared_item">
          <img className="image" src="https://picsum.photos/200" alt="" />
          <Paper className="content">
            <p className="header">Rau củ quả Thực phẩm 100% sạch</p>
            <p className="subcontent">
              Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an
              toàn thực phẩm
            </p>
            <Button className="button button-effect">Xem chi tiết</Button>
          </Paper>
        </div>
        <div className="shared_item">
          <img className="image" src="https://picsum.photos/200" alt="" />
          <Paper className="content">
            <p className="header">Rau củ quả Thực phẩm 100% sạch</p>
            <p className="subcontent">
              Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an
              toàn thực phẩm
            </p>
            <Button className="button button-effect">Xem chi tiết</Button>
          </Paper>
        </div>
        <div className="shared_item">
          <img className="image" src="https://picsum.photos/200" alt="" />
          <Paper className="content">
            <p className="header">Rau củ quả Thực phẩm 100% sạch</p>
            <p className="subcontent">
              Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an
              toàn thực phẩm
            </p>
            <Button className="button button-effect">Xem chi tiết</Button>
          </Paper>
        </div>
      </Slider>
    </Container>
  );
}

export default Shared;
