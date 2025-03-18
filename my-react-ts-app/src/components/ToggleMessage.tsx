import React, { useState } from "react";

const ToggleMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
        <button onClick={() => setIsVisible(prev => !prev)}>
            {isVisible ? "Hide" : "Show"}
        </button>

        {isVisible && (
            <>
                <div>Toggle Messages Here</div>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </>
        )}
    </>
  );
};

export default ToggleMessage;
