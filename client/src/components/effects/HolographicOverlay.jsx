const HolographicOverlay = ({ intensity = 'low' }) => {
  const intensityMap = {
    low: 0.02,
    medium: 0.05,
    high: 0.08
  };

  const opacityValue = intensityMap[intensity] || intensityMap.low;

  return (
    <>
      <style>
        {`
          @keyframes holographic-shift {
            0%, 100% {
              background-position: 0% 0%;
            }
            25% {
              background-position: 100% 0%;
            }
            50% {
              background-position: 100% 100%;
            }
            75% {
              background-position: 0% 100%;
            }
          }
        `}
      </style>
      <div
        className="fixed inset-0 pointer-events-none z-5"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(34, 211, 238, ${opacityValue}) 2px,
              rgba(34, 211, 238, ${opacityValue}) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(59, 130, 246, ${opacityValue}) 2px,
              rgba(59, 130, 246, ${opacityValue}) 4px
            )
          `,
          backgroundSize: '100px 100px',
          animation: 'holographic-shift 20s ease-in-out infinite',
          mixBlendMode: 'screen'
        }}
      />
    </>
  );
};

export default HolographicOverlay;
