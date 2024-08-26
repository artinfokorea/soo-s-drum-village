import React, { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  isBarOpen: boolean;
  handleBar: () => void;
}

const DropDownMenu = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <MenuItem>
      <Link
        href={href}
        className={`w-full py-2 font-semibold ${isActive && "text-main"}`}
      >
        {label}
      </Link>
    </MenuItem>
  );
};

const MobileDropDown = ({ handleBar, isBarOpen }: Props) => {
  return (
    <Menu as={Fragment}>
      {({ open }) => (
        <>
          <MenuButton
            className="flex focus:outline-none md:hidden"
            onClick={handleBar}
          >
            <img src="/icons/hamburger_icon.png" alt="mobile_menu_icon" />
          </MenuButton>
          <Transition
            show={open}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <MenuItems
              static
              className="mobile-dropdown absolute -left-3 top-8 z-30 mt-3 px-6 flex w-screen flex-col gap-3 bg-white p-4 shadow-sm focus:outline-none"
            >
              <DropDownMenu href="/tutor" label="소개" />
              <DropDownMenu href="/inquiry" label="상담게시판" />
              <DropDownMenu href="/direction" label="오시는길" />
            </MenuItems>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default MobileDropDown;
