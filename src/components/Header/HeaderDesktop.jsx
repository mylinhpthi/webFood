import { Box } from "@material-ui/core";
import {
  PersonOutline,
  PhoneInTalkOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import "../Css/dist/Header.css";
import { Link } from "react-router-dom";
function HeaderDesktop() {
  return (
    <Box className="desktop">
      <div className="topHeader">
        <div className="contact">
          <PhoneInTalkOutlined className="icon" />
          <p className="content">
            Hotline: <Link to="">1900 6750</Link>
          </p>
        </div>
        <div className="function">
          <div className="search">
            <SearchOutlined className="icon" />
            <p>
              <Link to="" className="content">
                Search
              </Link>
            </p>
          </div>
          <div className="account">
            <PersonOutline className="icon" />
            <p>
              <Link to="" className="content">
                Account
              </Link>
            </p>
          </div>
          <div className="cart">
            <ShoppingCartOutlined className="icon" />
            <p>
              <Link to="" className="content">
                Cart
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="mainHeader">
        <nav className="leftHeader">
            <Link to="" className="item_header">
              Trang chủ
            </Link>
            <Link to="" className="item_header">
              Giới thiệu
            </Link>
          <div className="product">
              <Link to="" className="item_header">
                Sản phẩm
              </Link>
            <nav className="subProduct">
                <Link to="" className="item_product">
                  Thịt
                </Link>
                <Link to="" className="item_product">
                  Cá và hải sản
                </Link>
                <Link to="" className="item_product">
                  Rau, củ, quả
                </Link>
                <Link to="" className="item_product">
                  Lương thực
                </Link>
                <Link to="" className="item_product">
                  Đồ ăn vặt
                </Link>
                <Link to="" className="item_product">
                  Gia vị
                </Link>
            </nav>
          </div>
        </nav>
        <img src="/images/logo_desktop.png" alt="Logo" className="logo" />
        <nav className="rightHeader">
            <Link to="" className="item_header">
              Tin tức
            </Link>
            <Link to="" className="item_header">
              Thực đơn
            </Link>
            <Link to="" className="item_header">
              Liên hệ
            </Link>
        </nav>
      </div>
    </Box>
  );
}
export default HeaderDesktop;
