import React, { useState } from "react";

export default function AcademicDetails() {
  const [formData, setFormData] = useState({
    sscPercentage: "",
    sscYear: "",
    hscPercentage: "",
    hscYear: "",
    diplomaPercentage: "",
    diplomaYear: "",
    degreePercentage: "",
    degreeCgpa: "",
    degreeYear: "",
    resumeFile: null,
  });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
const handleChange = (e) => {
    if (e.target.name === "resumeFile") {
      setFormData({ ...formData, resumeFile: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const isNumber = (value) => {
    return !isNaN(value) && value !== "";
  };

  const isValidYear = (value) => {
    return (
      /^\d{4}$/.test(value) &&
      value >= 1900 &&
      value <= new Date().getFullYear()
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({...formData,[name]:value})
    const requiredFields = [
      "sscPercentage",
      "sscYear",
      "degreePercentage",
      "degreeCgpa",
      "degreeYear",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }

    if (!formData.hscPercentage && !formData.diplomaPercentage) {
      alert("Please fill in either HSC Percentage or Diploma Percentage.");
      return;
    }

    if (!formData.hscYear && !formData.diplomaYear) {
      alert(
        "Please fill in either HSC Year of Passing or Diploma Year of Passing."
      );
      return;
    }

    if (
      (formData.hscPercentage && !formData.hscYear) ||
      (!formData.hscPercentage && formData.hscYear)
    ) {
      alert("Please fill in both HSC Percentage and HSC Year of Passing.");
      return;
    }

    if (
      (formData.diplomaPercentage && !formData.diplomaYear) ||
      (!formData.diplomaPercentage && formData.diplomaYear)
    ) {
      alert(
        "Please fill in both Diploma Percentage and Diploma Year of Passing."
      );
      return;
    }

    const percentageFields = [
      "sscPercentage",
      "hscPercentage",
      "diplomaPercentage",
      "degreePercentage",
      "degreeCgpa",
    ];

    for (let field of percentageFields) {
      if (formData[field] && !isNumber(formData[field])) {
        alert(`Please enter a valid number for ${field}.`);
        return;
      }
    }

    const yearFields = ["sscYear", "hscYear", "diplomaYear", "degreeYear"];

    for (let field of yearFields) {
      if (formData[field] && !isValidYear(formData[field])) {
        alert(`Please enter a valid year for ${field}.`);
        return;
      }
    }

    alert("Form submitted successfully");
  };

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-2xl mb-6 text-blue-500 text-center">
        Academic Details
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label
              htmlFor="sscPercentage"
              className="block text-sm font-medium text-gray-700"
            >
              SSC Percentage
            </label>
            <input
              type="text"
              id="sscPercentage"
              name="sscPercentage"
              value={formData.sscPercentage}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="sscYear"
              className="block text-sm font-medium text-gray-700"
            >
              SSC Year of Passing
            </label>
            <input
              type="text"
              id="sscYear"
              name="sscYear"
              value={formData.sscYear}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label
              htmlFor="hscPercentage"
              className="block text-sm font-medium text-gray-700"
            >
              HSC Percentage
            </label>
            <input
              type="text"
              id="hscPercentage"
              name="hscPercentage"
              value={formData.hscPercentage}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="hscYear"
              className="block text-sm font-medium text-gray-700"
            >
              HSC Year of Passing
            </label>
            <input
              type="text"
              id="hscYear"
              name="hscYear"
              value={formData.hscYear}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label
              htmlFor="diplomaPercentage"
              className="block text-sm font-medium text-gray-700"
            >
              Diploma Percentage
            </label>
            <input
              type="text"
              id="diplomaPercentage"
              name="diplomaPercentage"
              value={formData.diplomaPercentage}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="diplomaYear"
              className="block text-sm font-medium text-gray-700"
            >
              Diploma Year of Passing
            </label>
            <input
              type="text"
              id="diplomaYear"
              name="diplomaYear"
              value={formData.diplomaYear}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label
              htmlFor="degreePercentage"
              className="block text-sm font-medium text-gray-700"
            >
              Degree Percentage
            </label>
            <input
              type="text"
              id="degreePercentage"
              name="degreePercentage"
              value={formData.degreePercentage}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="degreeCgpa"
              className="block text-sm font-medium text-gray-700"
            >
              Degree CGPA
            </label>
            <input
              type="text"
              id="degreeCgpa"
              name="degreeCgpa"
              value={formData.degreeCgpa}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="degreeYear"
            className="block text-sm font-medium text-gray-700"
          >
            Degree Year of Passing
          </label>
          <input
            type="text"
            id="degreeYear"
            name="degreeYear"
            value={formData.degreeYear}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
  <div className="w-full px-3">
    <label
      htmlFor="resumeFile"
      className="block text-sm font-medium text-gray-700"
    >
      Upload Resume (PDF or Word document)
    </label>
    <input
      type="file"
      id="resumeFile"
      name="resumeFile"
      accept=".pdf,.doc,.docx"
      onChange={handleChange}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    />
  </div>
</div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md shadow-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
