import React from "react";
import whatsAppSupport from "../../public/images/quick-contact.svg";
import chat from "../../public/images/chat.svg";
import scrollUp from "../../public/images/scroll-up.svg";
import Image from "next/image";
import styles from "../../public/css/Signup.module.scss";

const SideIcons = ({ children }) => {
  console.log("styles = ", styles);
  console.log("from SideIcons");
  return (
    <section className={styles.container}>
      <div className={`${styles.icon} ${styles.boxOne}`}>
        <Image
          src={whatsAppSupport}
          width="54"
          height="54"
          className="whatsapp"
        />
      </div>
      {children}
      <div className={`${styles.icon} ${styles.boxTwo}`}>
        <Image src={chat} width="54" height="54" />
        <Image src={scrollUp} width="54" height="54" />
      </div>
    </section>
  );
};

export { SideIcons };
