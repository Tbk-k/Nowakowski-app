import React from "react";
import { BtnWraper, FilesWrapper, StyledSection } from "./Files.style";
import { downloadFilesData } from "../../../data/DownloadFilesData";
import DownloadItem from "../../atoms/downloadItem/DownloadItem";
import HeaderUnderLine from "../../atoms/headerUnderline/HeaderUnderLine";
import FilesZip from "../../../assets/downloads/wnioski.zip";

const Files = () => {
  return (
    <StyledSection id="files-link">
      <h2>Wnioski do pobrania</h2>
      <HeaderUnderLine />
      <FilesWrapper>
        {downloadFilesData.map(({ id, fileName, url }) => (
          <DownloadItem key={id} name={fileName} url={url} />
        ))}
      </FilesWrapper>
      <BtnWraper>
        <a href={FilesZip} download="wnioski">
          <button>Pobierz wszystkie</button>
        </a>
      </BtnWraper>
      <div></div>
    </StyledSection>
  );
};

export default Files;
