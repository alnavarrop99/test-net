import { Calendar, User, LogIn, LogOut } from "lucide-react";
import { Outlet } from "react-router-dom";
import { Navbar } from "~/comp";
import { NavItem } from "./nav";

export default function Home () {
  return <>
    <Navbar className="py-6 pr-3 flex-col gap-4 max-w-16 bg-gray-800 absolute -translate-y-[100%] top-1/2 left-0 text-neutral-content rounded-tl-none rounded-bl-none">
      <NavItem to='users'><User /></NavItem>
      <NavItem to='/'><Calendar /></NavItem>
      <NavItem to='auth'><LogIn /></NavItem>
      <NavItem to='auth/sigin'><LogOut /></NavItem>
    </Navbar>
    <Outlet />
  </>
}

