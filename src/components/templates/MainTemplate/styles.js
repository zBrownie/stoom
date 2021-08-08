import styled from "styled-components";
import breakpoints from "./../../../utils/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const AppBar = styled.div`
  width: 100%;
  height: 14rem;
  background: ${(props) => props.theme.blueDark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  position: relative;
`;

export const LogoAppBar = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 2rem;
  left: 35rem;
  ${breakpoints("left", "rem", [
    { 1440: 25 },
    { 1024: 15 },
    { 768: 5 },
    { 425: 1 },
  ])}
`;

export const UserAppBar = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 2rem;
  right: 35rem;
  ${breakpoints("right", "rem", [
    { 1440: 25 },
    { 1024: 15 },
    { 768: 5 },
    { 425: 1 },
  ])}
`;

export const IconPizza = styled.img`
  width: 100%;
  max-width: 4rem;
  height: auto;
`;

export const SpaceWhite = styled.div`
  width: 100%;
  height: 12.5rem;
`;

export const TitleAppBar = styled.h1`
  color: white;
  font-size: 1.5rem;
`;

export const SubTitleAppBar = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.secondary};
  line-height: 0.5rem;
`;
export const TextAppBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.3rem;
`;

export const IconStoomPoins = styled.img`
  width: 100%;
  max-width: 4rem;
  height: auto;
`;
export const UserTextAppBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.4rem;
`;

export const TitleUserAppBar = styled.h4`
  font-weight: 600;
  color: ${(props) => props.theme.secondary};
`;

export const PointsRow = styled.div`
  display: flex;
  align-items: center;
`;
export const PointsUserAppBar = styled.p`
  color: white;
  margin-left: 1.7rem;
`;
export const SubTitleUserAppBar = styled.p`
  color: ${(props) => props.theme.secondary};
  margin-left: 0.5rem;
`;
export const Content = styled.div`
  width: 100%;
  height: calc(100%-7rem);
`;
