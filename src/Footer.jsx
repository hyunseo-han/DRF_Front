import React, { useState } from "react";
import styled from "styled-components";
import logo from "./img/Logo.png";
import data from "./data.json";

const FooterDiv = styled.div`
  position: absolute;
  width: 1512px;
  height: 790px;
  left: 0px;
  right: 0px;
  top: 1751px;
  bottom: 109px;
  background: #d2d8c7;
  width: 1512px;
`;

const ShowList = styled.div`
  width: 1405px;
  height: 697px;
  left: 0px;
  top: 1900px;
  bottom: 109px;
`;

const Post = styled.div`
  position: absolute;
  width: 416px;
  height: 443px;
  left: 42px;
  top: 108px;
  background: #ffffff;
  border-radius: 65px;
`;

const PostPic = styled.div`
  position: absolute;
  width: 343.33px;
  height: 247.4px;
  left: 36.18px;
  right: 36.48px;
  top: 44.6px;
  bottom: 151px;
  background: #dfdfdf;
  border-radius: 14px;
`;

const PostTitle = styled.div`
  position: absolute;
  width: 236px;
  height: 29px;
  left: 41px;
  right: 139px;
  bottom: 100px;
  top: 314px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const PostDay = styled.div`
  position: absolute;
  width: 117px;
  height: 29px;
  left: 41px;
  right: 258px;
  bottom: 60px;
  top: 354px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const Post2 = styled.div`
  position: absolute;
  width: 416px;
  height: 443px;
  left: 502px;
  top: 108px;
  background: #ffffff;
  border-radius: 65px;
`;

const Post3 = styled.div`
  position: absolute;
  width: 416px;
  height: 443px;
  left: 962px;
  top: 108px;
  background: #ffffff;
  border-radius: 65px;
`;

const FFooterDiv = styled.div`
  position: absolute;
  width: 1512px;
  height: 198px;
  left: 0px;
  top: 2384px;
  background: #707365;
`;

const FFooterImg = styled.div`
  position: absolute;
  width: 367px;
  height: 111px;
  left: 572px;
  right: 573px;
  top: 53px;
  bottom: 34px;
`;

function Footer() {
  return (
    <>
      <FooterDiv>
        <ShowList>
          <Post>
            <PostPic>
              <img
                src={data[1].picture}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </PostPic>
            <PostTitle>{data[1].title}</PostTitle>
            <PostDay>{data[1].day}</PostDay>
          </Post>
          <Post2>
            <PostPic>
              <img
                src={data[2].picture}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </PostPic>
            <PostTitle>{data[2].title}</PostTitle>
            <PostDay>{data[2].day}</PostDay>
          </Post2>
          <Post3>
            <PostPic>
              <img
                src={data[3].picture}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </PostPic>
            <PostTitle>{data[3].title}</PostTitle>
            <PostDay>{data[3].day}</PostDay>
          </Post3>
        </ShowList>
      </FooterDiv>
      <FFooterDiv>
        <FFooterImg>
          <img src={logo} />
        </FFooterImg>
      </FFooterDiv>
    </>
  );
}

export default Footer;
