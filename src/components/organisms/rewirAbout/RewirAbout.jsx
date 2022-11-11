import React from "react";
import { useState } from "react";
import HeaderUnderLine from "../../atoms/headerUnderline/HeaderUnderLine";
import { FirstLine, SecondLine, Wrapper } from "./RewirAbout.style";

const RewirAbout = () => {
  const [showMore, setShowState] = useState(false);

  const onClickHandler = () => {
    setShowState(!showMore);
  };

  return (
    <Wrapper>
      <h2>Rewir komorniczy</h2>
      <HeaderUnderLine />
      <FirstLine isShow={showMore}>
        <p>
          Komornik Sądowy działa na konkretnym rewirze, określanym dla danego
          sądu rejonowego, do którego przynależy. Warto zaznaczyć, że istnieją
          okoliczności, w których zakres działalności komornika może wykraczać
          poza zakres terytorialny sądu. Art 10 ustawy o komornikach sądowych
          wskazuje, że wierzyciel ma prawo wyboru komornika na obszarze
          właściwości sądu apelacyjnego, na którym znajduje się siedziba
          kancelarii komornika właściwego zgodnie z przepisami ustawy z dnia 17
          listopada 1964 r. – Kodeks postępowania cywilnego, z wyjątkiem spraw
        </p>
        <div>
          <button onClick={onClickHandler}>Pokaż więcej</button>
        </div>
      </FirstLine>
      <SecondLine isShow={showMore}>
        <ul>
          <li>o egzekucję z nieruchomości;</li>
          <li>o wydanie nieruchomości;</li>
          <li>o wprowadzenie w posiadanie nieruchomości;</li>
          <li>
            o opróżnienie pomieszczeń, w tym lokali mieszkalnych, z osób lub
            rzeczy, w których przepisy o egzekucji z nieruchomości stosuje się
            odpowiednio.
          </li>
        </ul>
        <p>
          Tutejsza Kancelaria znajduje się w obszarze właściwości Sądu
          Apelacyjnego w Gdańsku. Obecnie nie istnieją przesłanki do odmowy
          wszczęcia egzekucji przez Komornika zgodnie z art. 10 ust. 4 ustawy o
          komornikach sądowych.
        </p>
        <div>
          <button onClick={onClickHandler}>Pokaż mniej</button>
        </div>
      </SecondLine>
    </Wrapper>
  );
};

export default RewirAbout;
