import React from "react";
import whatsAppSupport from "../../public/images/quick-contact.svg";
import chat from "../../public/images/chat.svg";
import Image from "next/image";
import styles from "../../public/css/Signup.module.scss";

const SideIcons = ({ children }) => {
  return (
    <section className={styles.container}>
      <a
        className={`${styles.icon} ${styles.boxOne}`}
        href="https://wa.me/+2349016324945"
      >
        <Image
          src={whatsAppSupport}
          width="64"
          height="64"
          className="whatsapp"
        />
      </a>
      {children}
      <div className={`${styles.icon} ${styles.boxTwo}`}>
        <Image src={chat} width="64" height="54" />
      </div>
    </section>
  );
};

export { SideIcons };
