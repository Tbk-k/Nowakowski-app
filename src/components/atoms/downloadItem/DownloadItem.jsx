import React from "react";
import styled from "styled-components";
import DownloadImg from "../../../assets/img/download.svg";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 30px;
  max-width: 300px;
  gap: 20px;
  div {
    width: 230px;
  }
  h3 {
    margin: 0 auto 10px;
    font-size: 16px;
  }
  a {
    color: ${({ theme }) => theme.colors.txtLight};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.pBold};
    cursor: pointer;
    &:hover {
      color: black;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin: 20px auto 30px;
    max-width: 450px;
    div {
      width: 300px;
    }
    h3 {
      font-size: 20px;
    }
    a {
      font-size: 18px;
    }
  }
`;

const DownloadIcon = styled.a`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 20px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100px;
    height: 100px;
    img {
      height: 30px;
    }
  }
`;

const DownloadItem = ({ name, url }) => {
  //   const onClickHandler = (fileName) => {
  //     fetch(`${fileName}.pdf`).then((response) => {
  //       response.blob().then((blob) => {
  //         const fileURL = window.URL.createObjectURL(blob);
  //         let alink = document.createElement("a");
  //         alink.href = fileURL;
  //         alink.download = `${fileName}.pdf`;
  //         alink.click();
  //       });
  //     });
  //   };
  return (
    <ItemWrapper>
      <DownloadIcon name={name} href={url} download={`${name}.zip`}>
        <img src={DownloadImg} alt="" />
      </DownloadIcon>
      <div>
        <h3>{name}</h3>
        <a name={name} href={url} download={`${name}.zip`}>
          Pobierz
        </a>
      </div>
    </ItemWrapper>
  );
};

export default DownloadItem;
