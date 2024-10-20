import React, { useState, useEffect } from "react";

const EditModal = ({
  isOpen,
  onClose,
  initialData = {},
  fields = [],
  onSave,
  title = "Edit Data",
}) => {
  const [formData, setFormData] = useState(initialData);
  const [isValid, setIsValid] = useState(false);

  // Reset form data when the modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
    }
  }, [isOpen, initialData]);

  // Validate form data based on the provided fields
  useEffect(() => {
    const isFormValid = fields.every(
      (field) => formData[field.name]?.trim() !== ""
    );
    setIsValid(isFormValid);
  }, [formData, fields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded shadow-md w-96 relative">

        {/* Top Close Button */}
       <div className="flex border-b border-1 p-4 justify-between">
        

          <h2 className="text-xl">{title}</h2>
          <button
            onClick={onClose}
            className="top-2 right-2 text-gray-600 hover:text-black"
          >
            ✕
          </button>
       </div>
        <form onSubmit={handleSubmit} className="">
          {fields.map((field) => (
            <div className=" flex items-center m-4 px-4" key={field.name}>
              <label
                className="text-sm font-semibold w-1/5"
                htmlFor={field.name}
              >
                {field.label} <span className="text-red-500">*</span>
              </label>
              <input
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="w-2/3 border border-gray-300 p-2 rounded"
                type={field.type || "text"}
              />
            </div>
          ))}
          <div className="flex justify-end  border-1 border-t p-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-black px-4 py-2 rounded mr-2"
            >
              Close
            </button>
            <button
              type="submit"
              className={`px-4 py-2 text-white rounded ${
                isValid ? "bg-blue-500" : "bg-blue-300 cursor-not-allowed"
              }`}
              disabled={!isValid}
            >
              Save
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default EditModal;
