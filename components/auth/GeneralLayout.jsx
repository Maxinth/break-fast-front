import Image from "next/image";
import { Layout } from "..";
import { FacebookBtn, GoogleBtn } from "../../utils";
import styles from "./GeneralLayout.module.scss";
import FacebookLogin from "react-facebook-login";
import { useRouter } from "next/router";

export const GeneralLayout = ({
  Form,
  formTitle,
  socialBtn = true,
  title,
  keywords,
  description,
  subTitle,
  subTitleOpacity = false,
  formStyle,
  signupStyle,
  isForm = true,
}) => {
  const router = useRouter();
  const responseFacebook = (response) => {
    console.log(response);
  };

  const componentClicked = () => console.log("fb button clicked!");
  return (
    <Layout title={title} keywords={keywords} description={description}>
      <div className={`${signupStyle} ${styles.signup} `}>
        {!isForm && <Form />}
        {isForm && (
          <div className={`${formStyle} ${styles.formContainer}`}>
            <div className={styles.form}>
              <h5 className={styles.formTitle}>{formTitle}</h5>

              <p className={subTitleOpacity ? styles.opacity : styles.continue}>
                {subTitle}
              </p>

              {socialBtn && (
                <>
                  <p className={styles.continue}>Continue with</p>

                  <div className={styles.socialBtn}>
                    <div className={styles.google}>
                      <Image src={GoogleBtn} alt="sign up with google" />
                    </div>
                    <div className="cursor">
                      {/* <Image src={FacebookBtn} alt="sign up with facebook" /> */}
                      <FacebookLogin
                        appId="1308158836325927" // initial
                        // appId="429932695011083" // kreatesell login
                        // autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}
                        render={(renderProps) => (
                          // <Image
                          //   src={FacebookBtn}
                          //   onClick={renderProps.onClick}
                          //   alt="sign up with facebook"
                          // />
                          <button onClick={renderProps.onClick}>
                            This is my custom FB button
                          </button>
                        )}
                      />
                    </div>
                  </div>

                  <div className={styles.midline}>
                    <span className={styles.lineA}></span>
                    <p className={styles.text}>or</p>
                    <span className={styles.lineB}></span>
                  </div>
                </>
              )}

              <Form />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
