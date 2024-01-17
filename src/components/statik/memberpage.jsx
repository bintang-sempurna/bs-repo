import React from "react";
import ImgApps from "../../assets/img/contentStatic/apps.png";
import PlayStoreImg from "../../assets/svg/playstore.svg";
import IosImg from "../../assets/svg/IOS.svg";
import "./statik.css";

const Memberpage = () => {
  return (
    <section className="py-20 bg-default-2">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-sm detail-apps">
            <div className="heading-apps ">
              <h1 className="coodiv-text-3 white-font">
                Untung Lebih Banyak <br />
                Jadi Sobat Bintang
              </h1>
            </div>
            {/* <a
              href="https://play.google.com/store/apps/details?id=id.loyal.bintangsempurna&hl=en"
              className=" btn-light rounded-pill button-member"
            >
              Jadi Member
            </a> */}
            <div className="footer-apps-download">
              <p className="content_text_author_description_p white-font mt-5">
                Member Sobat Bintang dapat diunduh di:
              </p>

              <div className="d-flex flex-row bd-highlight mb-3">
                <a href="https://play.google.com/store/search?q=sobat%20bintang&c=apps&hl=id-ID">
                  <img
                    className="IconDowloadApps"
                    src={PlayStoreImg}
                    alt="Playstore Image"
                  />
                </a>
                <a href="https://apps.apple.com/id/app/sobat-bintang/id6443689098">
                  <img
                    className="IconDowloadApps"
                    src={IosImg}
                    alt="IOS image"
                  />
                </a>
              </div>

              <div className="notif-download">
                <p className="content_text_author_description_p white-font ">
                  Download Sekarang dan Nikmati banyak keuntungan spesial untuk
                  kamu!
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="img-apps">
              <img
                src={ImgApps}
                className="apps-membership"
                alt="member-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberpage;
