import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import * as React from 'react';
import "../Css/dist/App.css";
const useStyles = makeStyles((theme) => ({
  root:{
  }
}))
export default function Banner() {
  const classes = useStyles();
  
  return (
    <div className = "banner" className={classes.root}>
      <img className="image_banner" src="/images/bannerMain.png" alt="" />
      <div className="content_banner">
        <h1 className="header">
            Thực phẩm <br /><span className="highlight">XANH - TƯƠI - SẠCH </span>
        </h1>
        <p className="description">
        Hiện tại vùng nguyên liệu chúng tôi cung cấp 100% sản phẩm sạch, đảm bảo chất lượng và số lượng do nguồn cung ứng xuất khẩu trên cả nước
        </p>
        <Button className="button button-effect">Xem thêm</Button>
      </div>
    </div>
  );
}
