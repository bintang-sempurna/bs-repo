import React from "react";

const VideoProduct = () => {
  return (
    <>
      <section className="py-1">
        <div className="container">
          <div className="detail-vidio-product">
            <div className="row justify-content-between">
              <div className="col-lg-5 col-12">
                <img
                  className="video-img"
                  src="img/img-bs/Product/sticker_label.png"
                />
              </div>
              <div className="col-lg-7 col-12">
                <h2 className="coodiv-text-4 font-weight-bold mt-6">
                  Cetak Stiker "Timbul" dalam sekejap! Bintang Sempurna
                </h2>
                <p className="content_text_author_description_p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
                <div className="row justify-content-center mt-10">
                  <div className="col">
                    <a
                      href="#"
                      className="btn coodiv-text-11 m-2  rounded-pill "
                    >
                      <i className="far fa-shopping-bag" />
                      Order sekarang
                    </a>
                    <a href="#" className="btn coodiv-text-11 m-2 ">
                      <i className="fas fa-tags" /> Minta Penawaran
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoProduct;
