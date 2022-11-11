import {
  BtnWrapper,
  Card,
  InnerWrapper,
  StyledSection,
  Wrapper,
} from "./Modal.style";
import XMark from "../../../assets/img/lightXMark.png";
import { modalData } from "../../../data/ModalData";
import ModalItem from "../../atoms/modalItem/ModalItem";

const Modal = ({ modalIsOpen, onClick }) => {
  return (
    <StyledSection modalIsOpen={modalIsOpen}>
      <Wrapper>
        <InnerWrapper>
          <BtnWrapper>
            <button onClick={onClick}>
              <img src={XMark} alt="" />
            </button>
          </BtnWrapper>
          <Card>
            {modalData.map(({ title, content, id }) => (
              <ModalItem key={id} title={title} content={content} />
            ))}
          </Card>
        </InnerWrapper>
      </Wrapper>
    </StyledSection>
  );
};

export default Modal;
