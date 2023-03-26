import React, { useState } from "react";

const Tabs = ({ shopData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="mt-14">
      <div className="flex justify-evenly space-x-3 border-b ">
        {/* create button for each data. */}
        {shopData.map((tab, index) => {
          return (
            <button
              type="button"
              key={tab.label}
              className={`py-2 border-b-4 font-bold transition-colors duration-300 ${
                index === activeTabIndex
                  ? "border-yellow-700 text-yellow-700"
                  : "border-transparent hover:border-gray-200"
              }`}
              // toggle the active tab on click.
              onClick={() => {
                // setIsLoading(true);
                setActiveTabIndex(index);
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* active tab content starts. */}
      <div className="py-4">{shopData[activeTabIndex].content}</div>
      {/* active tab content ends. */}
    </div>
  );
};

export default Tabs;