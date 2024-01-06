import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import Swal from "sweetalert2";

const FormContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [yourNeeds, setYourNeeds] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setPhone("");
    setCompany("");
    setEmail("");
    setYourNeeds("");
    setMessage("");
  };

  const saveToDataApi = async () => {
    try {
      setLoading(true);

      // Basic form validation
      if (!name || !phone || !company || !email || !yourNeeds || !message) {
        setNotification("error");
        console.error("All fields are required");
        return;
      }

      // Additional validation checks can be added here

      const response = await axios.post(
        "https://testrapi.bintangsempurna.co.id/api/forms",
        {
          data: {
            name,
            phone,
            company,
            email,
            your_needs: yourNeeds,
            message,
          },
        }
      );

      console.log(response.data);
      setNotification("success");
      resetForm(); // Clear the form after success
    } catch (error) {
      console.error("Error saving to API:", error.response.data);
      setNotification("error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveToDataApi();
  };

  const handleDone = () => {
    Swal.fire({
      title: "Good job!",
      text: "Your data has been sent, we will contact you shortly.Thanks You",
      icon: "success",
    });
  };

  return (
    <>
      <div className="col-md-7 mt-5">
        {notification === "success" && (
          <div className="notification success">
            {/* <div className="alert alert-success" role="alert">
              A simple success alert with{" "}
              <a href="#" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </div> */}
            {handleDone()}
          </div>
        )}
        {notification === "error" && (
          <div className="notification error">
            <div className="alert alert-danger" role="alert">
              A simple danger alert with{" "}
              <a href="#" className="alert-link">
                an example link
              </a>
              . Give it a click if you like.
            </div>
          </div>
        )}

        <form
          className="row form-contain-home contact-page-form-send"
          id="ajax-contact"
          onSubmit={handleSubmit}
        >
          <h5>
            Hubungi Bintang Sempurna
            <span>
              Isi form di bawah ini agar tim Kami dapat langsung melayani
              kebutuhan Anda.
            </span>
          </h5>

          <div className="col-12">
            <div className="field input-field">
              <input
                className="form-contain-home-input"
                type="text"
                name="name"
                placeholder="Name"
                required="required"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <i className="fas fa-user" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="field input-field">
              <input
                className="form-contain-home-input"
                type="text"
                id="phone"
                name="phone" // Changed from email to phone
                placeholder="Phone"
                required="required"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <i className="fad fa-mobile" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="field input-field">
              <input
                className="form-contain-home-input"
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                required="required"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <i className="fad fa-building" />
            </div>
          </div>

          <div className="col-md-12">
            <div className="field input-field">
              <input
                className="form-contain-home-input"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required="required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="far fa-envelope" />
            </div>
          </div>

          <div className="col-md-12">
            <div className="field input-field">
              <select
                className="col-md-12 form-contain-home-input-dropdown "
                id="yourNeeds"
                name="yourNeeds"
                required="required"
                value={yourNeeds}
                onChange={(e) => setYourNeeds(e.target.value)}
              >
                <option className="text__opsi" value="" disabled>
                  Pilih Kebutuhan Anda
                </option>
                <option value="Bisnis">Bisnis</option>
                <option value="UMKM">UMKM</option>
                <option value="Personal">Personal</option>
              </select>
              <i className="far fa-envelope" />
            </div>
          </div>

          <div className="col-md-12">
            <div className="field input-field">
              <textarea
                className="form-contain-home-input"
                id="message"
                name="message"
                placeholder="Message"
                required="required"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className="btn-holder-contect">
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Kirim"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormContact;
