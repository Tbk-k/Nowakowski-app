import React, { useState, useRef } from "react";
import { BtnWrapper, StyledHeader, StyledMain, Wrapper } from "./Contact.style";
import DarkLogo from "../../assets/img/logoDark.png";
import { GlobalStyle } from "../../assets/styles/GlobalStyle";
import HomeIcon from "../../assets/img/home.svg";
import ContactCard from "../../components/organisms/contactCard/ContactCard";
import { Link } from "react-router-dom";
import { theme } from "../../assets/styles/theme";
import { ThemeProvider } from "styled-components";
import FormInput from "../../components/atoms/formInput/FormInput";
import HeaderUnderLine from "../../components/atoms/headerUnderline/HeaderUnderLine";
import emailjs from "@emailjs/browser";

const Contact = () => {
  console.log(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    process.env.REACT_APP_PUBLIC_KEY
  );
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    loading: false,
    sucess: false,
  });

  const form = useRef();

  const onChangeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const inputs = [
    {
      id: 1,
      widget: "input",
      type: "text",
      name: "fullname",
      placeholder: "Imię i nazwisko",
      errorMessage: "Imię i nazwisko jest wymagane.",
      pattern: "^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$",
    },
    {
      id: 2,
      widget: "input",
      type: "email",
      name: "email",
      placeholder: "Adres e-mail",
      errorMessage: "Adres e-mail jest wymagany.",
    },
    {
      id: 3,
      widget: "textarea",
      name: "message",
      placeholder: "Treść wiadomości",
      errorMessage: "Treść wiadomości jest wymagana.",
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true });
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setUserData({ fullname: "", email: "", message: "" });
            setFormState({ loading: false, sucess: true });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <StyledHeader>
          <nav>
            <img src={DarkLogo} alt="" />
            <Link to="/">
              <img src={HomeIcon} alt="" />
            </Link>
          </nav>
          <StyledMain>
            <h2>Kontakt z kancelarią</h2>
            <HeaderUnderLine />
            <p>
              Wypełnij formularz kontaktowy a my skontaktujemy się z tobą tak
              szybko jak będzie to możliwe.
            </p>
            <ContactCard />
            <form onSubmit={submitHandler} ref={form}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={userData[input.name]}
                  onChange={onChangeHandler}
                  isSend={formState.sucess}
                />
              ))}
              <BtnWrapper
                style={{
                  backgroundColor: formState.sucess ? "#c9e9c9" : "white",
                }}
              >
                {formState.sucess ? (
                  <span>Dziękujemy za wysłanie wiadomości.</span>
                ) : (
                  <button>
                    {formState.loading ? "wysyłanie..." : "wyślij"}
                  </button>
                )}
              </BtnWrapper>
            </form>
          </StyledMain>
        </StyledHeader>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Contact;
