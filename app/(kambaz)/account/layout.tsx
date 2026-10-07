import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz-account" className="flex flex-row">
      <div className="flex flex-col">
        <AccountNavigation />
      </div>
      <div className="flex flex-col flex-grow">
        {children}
      </div>
    </div>
  );
}