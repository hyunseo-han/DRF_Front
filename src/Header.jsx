import styled from "styled-components";
import proIMG from "./img/Group4.png";
import polygon from "./img/Polygon.png";
import logo from "./img/Logo.png";
import data from "./data.json";

const HeaderDiv = styled.div`
  position: absolute;
  width: 1512px;
  height: 147px;
  left: 0px;
  top: 0px;
  background: #ffffff;
`;

const LogoDiv = styled.div`
  position: absolute;
  width: 392px;
  height: 98px;
  left: 20px;
  right: 1171.15px;
  bottom: 22.38px;
  top: 30.19px;
`;

const LogImg = styled.div`
  position: absolute;
  width: 78px;
  height: 78px;
  left: 1345px;
  top: 34px;
  right: 89px;
  bottom: 35px;
`;

const Tri = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 1450px;
  right: 50px;
  bottom: 65px;
  top: 65px;
`;

const Name = styled.div`
  position: absolute;
  width: 182px;
  height: 34px;
  left: 1073px;
  right: 257px;
  top: 57px;
  bottom: 56px;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #53a62d;
`;

const Nim = styled.div`
  position: absolute;
  width: 33px;
  height: 34px;
  left: 1259px;
  right: 220px;
  top: 57px;
  bottom: 56px;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #000000;
`;

function Header() {
  return (
    <>
      <HeaderDiv>
        <LogoDiv>
          <img src={logo} />
        </LogoDiv>
        <Name>{data[2].name}</Name>
        <Nim>님</Nim>
        <LogImg>
          <img src={proIMG} />
        </LogImg>
        <Tri>
          <img src={polygon} />
        </Tri>
      </HeaderDiv>
    </>
  );
}

export default Header;
