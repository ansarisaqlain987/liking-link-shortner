"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import React, { useState } from "react";
import { Dialog } from "./Dialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const closeDailog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <header
        className="flex justify-between items-center p-5 2xl:text-4xl lg:text-3xl md:text-2xl text-lg"
        style={{ color: "var(--primaryText)" }}
      >
        <h1>Link Shortener</h1>
        <nav>
          <SignedOut>
            <div className="bg-primaryColor hover:bg-primaryHover p-2 rounded ">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className=" focus:outline-none"
                style={{ color: "var(--primaryText)" }}
              >
                {/* Hamburger Icon */}
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-5 justify-center items-center cursor-pointer hover">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Reviews</li>
              <li onClick={() => setDialogOpen(true)}>Signout</li>
            </ul>

            {/* Mobile Menu */}
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } flex flex-col gap-3 mt-3 md:hidden bg-primaryColor p-5 rounded-md absolute right-0 m-4 text-primaryText`}
            >
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Reviews</li>
              <li onClick={() => setDialogOpen(true)}>Signout</li>
            </ul>
          </SignedIn>
        </nav>
      </header>
      <Dialog
        open={dialogOpen}
        title="Confirm Logout"
        message="Do you really want to logout !!!"
        positive={() => <SignOutButton />}
        negative={() => closeDailog()}
        positiveLabel="Signout"
      />
    </div>
  );
};

export default Header;
