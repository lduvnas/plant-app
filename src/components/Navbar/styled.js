import styled from "styled-components";
import { COLORS } from "../../constants";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  min-height: 90px;
  background-color: ${COLORS.neutral_1};
  margin: 2em 0;
  margin-bottom: 10em;
  border-radius: 8px;
  padding: 0.5em 3em;
`;

export const Circle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  width: 120px;
  background-color: ${COLORS.neutral_4};
  border-radius: 50%;
  left: 50%;
  top: 120px;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: 700;
`;

export const ArrowUp = styled.div`
  position: absolute;
  left: 160px;
  width: 0;
  height: 0;
  top: -9px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 10px solid #fff;
`;

export const MenuTrigger = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  border: none;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  position: absolute;
  top: 150px;
  right: 15%;
  width: 200px;
  height: 40px;
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transform: ${(props) =>
    props.clicked ? "translateY(0px)" : "translateY(-20px)"};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`;
