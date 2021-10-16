import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import "../Css/dist/App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Container } from "@material-ui/core";

function Category() {
    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      };
      return (
        <Container className="category">
          <div className="category_header">
            <p className="logo_name">Green House</p>
            <p className="header">DANH MỤC SẢN PHẨM</p>
          </div>
          <Slider {...settings}>
            <a className="category_item">
              <img className="image" src="https://picsum.photos/200" alt="" />
              <div className="content">
                <p className="header">Rau củ quả</p>
                <p className="subcontent">Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an toàn thực phẩm</p>
              </div>
            </a>
            <a className="category_item">
              <img className="image" src="https://picsum.photos/200" alt="" />
              <div className="content">
                <p className="header">Trái cây Việt</p>
                <p className="subcontent">Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an toàn thực phẩm</p>
              </div>
            </a>
            <a className="category_item">
              <img className="image" src="https://picsum.photos/200" alt="" />
              <div className="content">
                <p className="header">Thịt nhập khẩu</p>
                <p className="subcontent">Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an toàn thực phẩm</p>
              </div>
            </a>
            <a className="category_item">
              <img className="image" src="https://picsum.photos/200" alt="" />
              <div className="content">
                <p className="header"> Thực phẩm khô</p>
                <p className="subcontent">Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an toàn thực phẩm</p>
              </div>
            </a>
            <a className="category_item">
              <img className="image" src="https://picsum.photos/200" alt="" />
              <div className="content">
                <p className="header"> Hải sản</p>
                <p className="subcontent">Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an toàn thực phẩm</p>
              </div>
            </a>
            <a className="category_item">
              <img className="image" src="https://picsum.photos/200" alt="" />
              <div className="content">
                <p className="header"> Cá hồi</p>
                <p className="subcontent">Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an toàn thực phẩm</p>
              </div>
            </a>
            <a className="category_item">
              <img className="image" src="https://picsum.photos/200" alt="" />
              <div className="content">
                <p className="header">Nấm nhật khẩu</p>
                <p className="subcontent">Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an toàn thực phẩm</p>
              </div>
            </a>
            <a className="category_item">
              <img className="image" src="https://picsum.photos/200" alt="" />
              <div className="content">
                <p className="header"> Bò Cube</p>
                <p className="subcontent">Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an toàn thực phẩm</p>
              </div>
            </a>
            <a className="category_item">
              <img className="image" src="https://picsum.photos/200" alt="" />
              <div className="content">
                <p className="header"> Gia vị Việt</p>
                <p className="subcontent">Thực phẩm 100% sạch, an toàn thực phẩm.Thực phẩm 100% sạch, an toàn thực phẩm</p>
              </div>
            </a>
          </Slider>
        </Container>
      );
}

export default Category
