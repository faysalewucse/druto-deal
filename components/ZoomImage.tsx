const ZoomImage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden h-60 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};
export default ZoomImage;
