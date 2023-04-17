import * as React from "react";

export interface PageLayoutProps {
  children?: React.ReactNode;
  _site?: any;
}

const PageLayout = ({ children, _site }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default PageLayout;
