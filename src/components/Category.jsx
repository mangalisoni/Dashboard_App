import React, { useState } from "react";
import WidgetCard from "./WidgetCard";
import AddWidgetModal from "./CategoryModal";

const Category = ({ category }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>{category.name}</h3>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          + Add Widget
        </button>
      </div>
      <div className="d-flex flex-wrap justify-content-start">
        {category.widgets.map((widget) => (
          <WidgetCard key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
      {showModal && <AddWidgetModal categoryId={category.id} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Category;
