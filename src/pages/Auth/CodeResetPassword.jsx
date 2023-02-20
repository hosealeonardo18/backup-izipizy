import React, { useState, useEffect } from "react";
import style from "./auth.module.css";
import ButtonAuth from "../../components/ButtonAuth/ButtonAuth";
import InputAuth from "../../components/InputAuth/InputAuth";
import { LineWave } from "react-loader-spinner";

const CodeResetPassword = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return (
      <div
        style={{
          paddingLeft: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#efc81a",
        }}
      >
        <LineWave
          height="145"
          width="140"
          color="white"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      </div>
    );
  }
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`${style.bgImage} col-md-6 bg-image align-items-center`}
          >
            <div>
              <img
                className={style.logoCustom}
                src={require("../../assets/images/auth/barbecue 1.png")}
                alt=""
              />
              <p className="text-center mt-2 fw-semibold text-white">
                Mama Recipe.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`${style.login} login d-flex align-items-center py-5`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <form>
                      <InputAuth
                        TypeInput="password"
                        Label="Code 6 Digit"
                        PlaceHolder=""
                      />
                      <div className="mb-3 form-group">
                        <input
                          id=""
                          type="checkbox"
                          className={style.checkboxCustom}
                        />
                        <label
                          style={{ color: "#696f79" }}
                          className="ms-1 form-check-label mb-3"
                        >
                          I agree to terms &amp; conditions
                        </label>
                      </div>
                      <div className="mb-3 form-group d-flex justify-content-center">
                        <ButtonAuth Button="Reset Password" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeResetPassword;
