import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import G5 from "./img/Group5.png";

const Repl = styled.div`
  display: flex;
  position: absolute;
  width: 1365px;
  height: 135px;
  background: #eeeeee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 68px;
`;

const ReplPhoto = styled.div`
  position: absolute;
  width: 82px;
  height: 82px;
  left: 54px;
  right: 1229px;
  top: 30px;
  bottom: 23px;
`;

const ReplNameDiv = styled.div`
  position: absolute;
  width: 190.69px;
  height: 31.78px;
  left: 153px;
  top: 19.85px;
  background: #dfdfdf;
  border-radius: 11px;
`;

const ReplName = styled.div`
  position: absolute;
  width: 72px;
  height: 37px;
  left: 158.35px;
  top: 17px;
  color: #53a62d;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  display: flex;
`;

const ReplDate = styled.div`
  position: absolute;
  width: 72px;
  height: 37px;
  left: 268.35px;
  top: 17px;
`;

const ReplInput = styled.div`
  position: absolute;
  width: 356px;
  height: 37px;
  left: 158px;
  right: 851px;
  bottom: 26px;
  top: 72px;
`;

function CommentWrapper() {
  return (
    <Repl>
      <ReplPhoto>
        <img src={G5} />
      </ReplPhoto>
      <ReplNameDiv />
      <ReplName>동동삼</ReplName>
      <ReplDate>2022.07.23</ReplDate>
      <ReplInput>댓글댓글</ReplInput>
    </Repl>
  );
}

export default CommentWrapper;
