const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
};

export default Container;
