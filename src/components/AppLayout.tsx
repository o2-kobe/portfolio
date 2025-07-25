interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="grid grid-cols-[8rem_1fr_8rem]">
      <div className="border border-r-gray-200 h-full"></div>
      <div className="mx-4">{children}</div>
      <div className="border border-l-gray-200 h-full"></div>
    </div>
  );
};
export default AppLayout;
