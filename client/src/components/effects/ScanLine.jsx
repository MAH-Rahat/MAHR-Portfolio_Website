const ScanLine = ({ speed = 4, opacity = 0.1 }) => {
  return (
    <>
      <style>
        {`
          @keyframes scanline {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100vh);
            }
          }
        `}
      </style>
      <div
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgba(34, 211, 238, ${opacity}) 50%,
            transparent 100%
          )`,
          height: '100px',
          animation: `scanline ${speed}s linear infinite`,
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
};

export default ScanLine;
