import { Meta, Navbar, Footer, SubFooter } from "..";
import styles from "../../public/css/Signup.module.scss";
import { SideIcons } from "./SideIcons";

export const Layout = ({
  children,
  title,
  keywords,
  description,
  subFooter = false,
  defaultMarginTop,
}) => {
  return (
    <>
      <Meta title={title} keywords={keywords} description={description} />
      <Navbar />
      <main className={defaultMarginTop && styles.layoutMargin}>
        <SideIcons>{children}</SideIcons>
      </main>
      {subFooter && <SubFooter />}
      <Footer />
    </>
  );
};
