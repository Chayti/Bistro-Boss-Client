import React, { useState } from "react";

const Tabs = ({ shopData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="mt-14">
      <div className="flex justify-evenly space-x-3 border-b ">
        {shopData.map((tab, index) => { /* create button for each data. */
          return (
            <button
              type="button"
              key={tab.label}
              className={`py-2 border-b-4 font-bold transition-colors duration-300 ${index === activeTabIndex
                  ? "border-yellow-700 text-yellow-700"
                  : "border-transparent hover:border-gray-200"
                }`}

              onClick={() => { // toggle the active tab on click.
                setActiveTabIndex(index); // setIsLoading(true);
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