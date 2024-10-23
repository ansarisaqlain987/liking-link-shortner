"use client";
import { Dialog } from "@/app/components/Dialog";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { useState } from "react";

const LinkShortener = () => {
  const [userLink, setUserLink] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLink(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userLink);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#021746] font-sans text-white">
      <header className="flex justify-between p-5 text-2xl">
        <h1>Link Shortener</h1>
        <nav>
          <SignedOut>
            <div className="bg-[#142b5c] hover:bg-[#122242] p-2 rounded">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
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
            <ul className="hidden md:flex gap-5 justify-center items-center cursor-pointer">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Reviews</li>
              <li
                className="bg-[#142b5c] hover:bg-[#122242] p-2 rounded"
                onClick={() => setDialogOpen(true)}
              >
                SignOut
              </li>
            </ul>

            {/* Mobile Menu */}
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } flex flex-col gap-3 mt-3 md:hidden bg-[#142b5c] p-5 rounded-md absolute right-0 m-4`}
            >
              <li className="text-white">Home</li>
              <li className="text-white">About</li>
              <li className="text-white">Contact</li>
              <li className="text-white">Reviews</li>
              <li className="bg-[#142b5c] hover:bg-[#122242] p-2 rounded">
                <SignOutButton />
              </li>
            </ul>
          </SignedIn>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center md:min-h-[30rem] m-2">
        <section className="text-center">
          <>
            <h1 className="md:text-[4rem] text-[2rem] font-bold leading-none">
              Crie <span className="text-[#f57b65]">Links</span> atrativos{" "}
              <br /> com um clique
            </h1>
          </>
          <p className="npmtext-[1rem] m-5">
            Crie links curtos poderosos e reconheciveis
          </p>
        </section>
        <section className="flex md:flex-row flex-col gap-5 md:text-2xl font-semibold md:mt-10">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Cole o link original"
              className="md:w-[30rem] w-full md:p-4 p-2 rounded-[1rem] text-black"
              value={userLink}
              onChange={handleChange}
            />
            <button
              className="bg-[#f57b65] md:p-4 p-2 rounded-[1rem] md:w-[8rem]"
              type="submit"
            >
              Criar
            </button>
          </form>
        </section>
      </main>
      <Dialog
        open={dialogOpen}
        title="Confirm Logout"
        message="Do you really want to logout !!!"
        positive={() => <SignOutButton />}
        negative={() => setDialogOpen(false)}
        positiveLabel="Signout"
      />
    </div>
  );
};

export default LinkShortener;
