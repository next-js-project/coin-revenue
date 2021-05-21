import Head from "next/head";
import { PlainTemplate } from "@/base/template";
import { HeaderContainer } from "@/containers/header";
import { FooterContainer } from "@/containers/footer";

const Home = (props) => {
  return (
    <>
      <PlainTemplate
        header={<HeaderContainer />}
        footer={<FooterContainer />}
      />
    </>
  );
};

export default Home;
