import React from "react";
import { FaTimes } from "react-icons/fa";
import useDashboardStore from "../context/store.js";

const WidgetCard = ({ categoryId, widget }) => {
  const removeWidget = useDashboardStore((s) => s.removeWidget);

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h4>{widget.name}</h4>
        <FaTimes
          onClick={() => removeWidget(categoryId, widget.id)}
          className="remove-icon"
          title="Remove widget"
        />
      </div>
      <p>{widget.text}</p>
    </div>
  );
};

export default WidgetCard;
