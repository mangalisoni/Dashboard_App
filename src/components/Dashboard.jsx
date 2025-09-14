import React, { useState } from "react";
import useDashboardStore from "../context/store.js";
import WidgetCard from "./WidgetCard.jsx";
import CategoryModal from "./CategoryModal.jsx";

const Dashboard = () => {
  const categories = useDashboardStore((s) => s.categories);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="dashboard">
      {categories.map((cat) => (
        <div key={cat.id} className="category">
          <div className="category-header">
            <h2>{cat.categoryName}</h2>
            <button
              className="edit-btn"
              onClick={() => setActiveCategory(cat.id)}
            >
              ✏️ Edit
            </button>
          </div>
          <div className="widgets">
            {cat.widgets.map((w) => (
              <WidgetCard key={w.id} categoryId={cat.id} widget={w} />
            ))}
          </div>
        </div>
      ))}

      {activeCategory && (
        <CategoryModal
          category={categories.find((c) => c.id === activeCategory)}
          close={() => setActiveCategory(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;
