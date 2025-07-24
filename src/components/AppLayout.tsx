interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="grid grid-cols-[8rem_1fr_8rem]">
      <div className="border border-r-gray-200 h-screen"></div>
      <div>{children}</div>
      <div className="border border-l-gray-200 h-screen"></div>
    </div>
  );
};
export default AppLayout;
