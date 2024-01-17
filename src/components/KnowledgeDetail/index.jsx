import React from "react";

const KnowledDetail = () => {
  return (
    <>
      <section className="mt-20">
        <div className="container">
          <div className="artikel-detail_content">
            <div className="artikel-detail_header">
              <h1 className="artikel-detail_tittle coodiv-text-4 mb-10">
                {" "}
                Media/Substrate
              </h1>
              <div className="the_breadcrumb_conatiner_page">
                <div className="the_breadcrumb">
                  <div className="breadcrumbs">
                    <i className="fas fa-home"></i>
                    <a href="index.html">beranda</a> /{" "}
                    <a href="knowledge.html">knowledge</a> / Media/Substrate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="artikel-detail_hero">
            <img
              src="img/img-bs/knowladge/fedrigoni.jpg"
              className="content-img-detail"
              data-src="img/img-bs/knowladge/fedrigoni.jpg"
              srcset="img/img-bs/knowladge/fedrigoni.jpg"
              alt="Inilah 3 UMKM Terpilih dalam Acara 101 Coaching dari PT Bintang Sempurna"
              type="image/jpeg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowledDetail;
