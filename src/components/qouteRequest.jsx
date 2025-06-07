import { useState } from "react";
import React from "react";
import axios from "axios";

const initialState = {
  company: "",
  email: "",
  project: "",
  quantity: "",
  deadline: "",
};

const QuoteRequest = () => {
  const [{ company, email, project, quantity, deadline }, setState] =
    useState(initialState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => {
    setState({ ...initialState });
    setError("");
  };

  const validateForm = () => {
    if (!company.trim()) return "Company name is required.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return "Valid email is required.";
    if (!project.trim()) return "Project description is required.";
    if (!quantity || quantity <= 0) return "Quantity must be greater than 0.";
    if (!deadline) return "Deadline is required.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("company", company);
      formData.append("email", email);
      formData.append("project", project);
      formData.append("quantity", quantity);
      formData.append("deadline", deadline);
      formData.append("attachment", e.target.attachment.files[0]);

      const res = await axios.post("https://neuronile-backend.onrender.com/api/quote", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        clearState();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div id="quote">
      <div className="container">
        <div className="col-md-8">
          <div className="section-title">
            <h2 className="heading">Request a Quote</h2>
            <p>
              Fill out the form below to request a quote. We'll get back to you
              as soon as possible.
            </p>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder="Company Name"
                  value={company}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="project"
                className="form-control"
                rows="4"
                placeholder="Project Description"
                value={project}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  placeholder="Quantity Required"
                  value={quantity}
                  onChange={handleChange}
                  min="1"
                />
              </div>
              <div className="col-md-6 form-group">
                <input
                  type="date"
                  name="deadline"
                  className="form-control"
                  value={deadline}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="file"
                name="attachment"
                className="form-control"
                accept=".pdf,.doc,.docx,.jpg,.png"
              />
              <small className="text-muted">
                Upload project specs or schematics (optional)
              </small>
            </div>

            <button type="submit" className="btn btn-custom btn-lg">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;
