import React from "react";

const PlainTemplate = (props) => {
  const { header: Header, main: Main, footer: Footer } = props;

  return (
    <>
      <header className="PlainTemplate__header">{Header}</header>
      <main className="PlainTemplate__main">{Main}</main>
      <footer className="PlainTemplate__footer">{Footer}</footer>
    </>
  );
};

export default PlainTemplate;
