import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Main>{children}</Main> */}
      <Footer />
    </>
  );
};

export default Layout;
