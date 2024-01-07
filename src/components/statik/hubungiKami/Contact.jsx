import React from "react";
import FormContact from "./FormContact";
import {Helmet} from "react-helmet";

const Contact = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Hubungi Kami </title>
                <link rel="canonical" href="#" />
            </Helmet>
      <div
        id="coodiv-header"
        className="d-flex mx-auto flex-column subpages-header moon-edition mt-20"
      >
        <main className="container">
          <div className="row">
            <div className="col-md-5 pt-15">
              <span className="main-header-top-title text-white">
                Perlu Penjelasan Lebih Lanjut?
              </span>
              <h3 className="mt-3 contact-us-hero-title coodiv-text-5">
                Langsung Konsultasi Dengan Tim Bintang Sempurna
              </h3>
              <div className="line-color-50%" />
              <section className="padding-20-0 mob-display-none mt-15">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-md-5">
                      <div className="contact-sales">
                        <h5 className="immediate-help-center-title text-danger">
                          Sales Corporate
                        </h5>
                        <address>
                          <strong>Rachmat</strong>
                          <br />
                          rachmat.april@bintangsempurna.co.id
                          <br />
                          <abbr>Phone :</abbr> (+62) 8111 9079 520
                        </address>
                        <address>
                          <strong>Bagas</strong>
                          <br />
                          bagas@bintangsempurna.co.id
                          <br />
                          <abbr>Phone :</abbr> (+62) 8111 9079 517
                        </address>
                        <address>
                          <strong>Miranti</strong>
                          <br />
                          miranti@bintangsempurna.co.id
                          <br />
                          <abbr>Phone :</abbr> (+62) 8138 7681578
                        </address>
                      </div>
                      <div className="contact-crm mt-20">
                        <h5 className="immediate-help-center-title text-danger">
                          Customer Relationship Marketing
                        </h5>
                        <address>
                          <strong>Hariansyah</strong>
                          <br />
                          Harianysah@bintangsempurna.co.id
                          <br />
                          <abbr>Phone :</abbr> (+62) 8119 8875 00
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* form */}
            <FormContact />
          </div>
        </main>
      </div>
      <div id="mobile-form-contact-height" />

      {/* <section className="py-10 position-relative">
        <div className="container">
          <h2 className="coodiv-text-4 font-weight-bold">Q &amp; A </h2>
          <p>Tanya Jawab dengan Bintang Sempurna untuk solusi cetak terbaik.</p>
          <div className="line-color-100%-2grid" />
          <div
            className="row justify-content-center nav our-help-center-tabs-nav"
            id="nav-tab"
            role="tablist"
          >
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col mb-4">
                <div className="support-contact-us-box h-100 ">
                  <div className="card-body">
                    <h5 className="card-title">Penawaran harga</h5>
                    <p className="card-text">
                      Temukan anggaran yang tepat sesuai kebutuhan cetak Anda.
                    </p>
                    <p className="text-left">
                      <a href="#" className="text-danger text-left">
                        Lihat Semua
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="support-contact-us-box h-100">
                  <div className="card-body">
                    <h5 className="card-title">Kunjungan ke Lokasi </h5>
                    <p className="card-text">
                      Kenal lebih dekat dengan teknologi cetak terkini Bintang
                      Sempurna. Anda bisa langsung berkunjung ke rumah Kami.
                    </p>
                    <p className="text-left">
                      <a href="#" className="text-danger text-left">
                        Lihat Semua
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="support-contact-us-box h-100">
                  <div className="card-body">
                    <h5 className="card-title">kritik &amp; Saran</h5>
                    <p className="card-text">
                      Respon Anda, dukungan bagi Kami. Utarakan saran dan
                      masalah Anda di sini.{" "}
                    </p>
                    <p className="text-left">
                      <a href="#" className="text-danger text-left">
                        Lihat Semua
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="support-contact-us-box h-100">
                  <div className="card-body">
                    <h5 className="card-title">Bintang Sempurna Peduli</h5>
                    <p className="card-text">
                      Bersama Kita Bisa! Buat kegiatan bersama Bintang Sempurna
                      demi meningkatkan kepedulian sosial disekitar kita.
                    </p>
                    <p className="text-left">
                      <a href="#" className="text-danger text-left">
                        Lihat Semua
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="py-20 maps-live">
        <div className="container">
          <div
            style={{ width: "100%", height: 450, padding: 5, marginTop: 30 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3775716195414!2d106.81165241476909!3d-6.213834295501808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6a35906e8e7%3A0xb43a8e7ccfc42463!2sPT.+Bintang+Sempurna!5e0!3m2!1sen!2sid!4v1566196997394!5m2!1sen!2sid"
              width="100%"
              height="100%"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
