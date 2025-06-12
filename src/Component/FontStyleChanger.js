// FontStyleChanger.jsx
import React, { useState } from 'react';
import { CaseUpper } from 'lucide-react';

function FontStyleChanger() {
  const [fontFamily, setFontFamily] = useState('Arial');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const textStyle = {
    fontFamily: fontFamily,
    fontWeight: isBold ? 'bold' : 'normal',
    fontStyle: isItalic ? 'italic' : 'normal',
    fontSize: '20px',
  };

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <label>Font Family: </label>
        <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>

        <label style={{ marginLeft: '15px' }}>
          <input
            type="checkbox"
            checked={isBold}
            onChange={() => setIsBold(!isBold)}
          /> Bold
        </label>

        <label style={{ marginLeft: '10px' }}>
          <input
            type="checkbox"
            checked={isItalic}
            onChange={() => setIsItalic(!isItalic)}
          /> Italic
        </label>
      </div>

      <p style={textStyle}>
        
      </p>
    </div>
  );
}

export default FontStyleChanger;
