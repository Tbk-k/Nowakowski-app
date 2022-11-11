import Hero from "../../components/templates/hero/Hero";
import Rewir from "../../components/templates/rewir/Rewir";
import WebsiteLinks from "../../components/templates/websiteLinks/WebsiteLinks";
import { GlobalStyle } from "../../assets/styles/GlobalStyle";
import NavBar from "../../components/organisms/navBar/NavBar";
import { ThemeProvider } from "styled-components";
import { theme } from "../../assets/styles/theme";
import Footer from "../../components/templates/footer/Footer";
import Files from "../../components/templates/files/Files";
import Repay from "../../components/templates/repay/Repay";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <WebsiteLinks />
      <Repay />
      <Rewir />
      <Files />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
