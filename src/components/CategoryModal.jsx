import React, { useState } from "react";
import useDashboardStore from "../context/store.js";

const CategoryModal = ({ category, close }) => {
  const addWidget = useDashboardStore((s) => s.addWidget);
  const removeWidget = useDashboardStore((s) => s.removeWidget);

  const [selectedWidgets, setSelectedWidgets] = useState(
    category.widgets.map((w) => w.id)
  );

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleCheckboxChange = (id) => {
    setSelectedWidgets((prev) =>
      prev.includes(id) ? prev.filter((wid) => wid !== id) : [...prev, id]
    );
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Remove unchecked widgets
    category.widgets.forEach((w) => {
      if (!selectedWidgets.includes(w.id)) {
        removeWidget(category.id, w.id);
      }
    });

    // Add new widget
    if (name.trim() && text.trim()) {
      addWidget(category.id, { id: Date.now(), name, text });
    }

    close();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit {category.categoryName}</h3>
        <form onSubmit={handleSave}>
          <h4>Widgets</h4>
          {category.widgets.map((w) => (
            <label key={w.id} style={{ display: "block" }}>
              <input
                type="checkbox"
                checked={selectedWidgets.includes(w.id)}
                onChange={() => handleCheckboxChange(w.id)}
              />
              {w.name}
            </label>
          ))}

          <hr />
          <h4>Add New Widget</h4>
          <input
            type="text"
            placeholder="Widget Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Widget Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="modal-actions">
            <button type="submit" className="save-btn">💾 Save</button>
            <button type="button" onClick={close} className="cancel-btn">
              ❌ Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryModal;

