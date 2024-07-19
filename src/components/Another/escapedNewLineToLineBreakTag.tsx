// escapedNewLineToLineBreakTag.tsx
import React from 'react';

interface Props {
  string: string;
}

const EscapedNewLineToLineBreakTag: React.FC<Props> = ({ string }) => {
  return (
    <>
      {string.split('\n').map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br/>} {/* Thêm <br> sau dòng thứ nhất */}
          <p>{item}</p>
        </React.Fragment>
      ))}
    </>
  );
}

export default EscapedNewLineToLineBreakTag;
