"use client";
import { useState } from "react";

const LinkShortener = () => {
  const [userLink, setUserLink] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLink(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userLink === "") {
      return;
    }
    console.log(userLink.trim());
  };

  return (
    <main className="flex flex-col justify-center items-center md:min-h-[40rem] m-2 text-white text-center">
      <section>
        <h1 className="md:text-[4rem] text-[2rem] font-bold leading-none">
          Crie <span className="text-[#f57b65]">Links</span> atrativos
          <br /> com um clique
        </h1>
        <p className="npmtext-[1rem] m-5">
          Crie links curtos poderosos e reconheciveis
        </p>
      </section>
      <section>
        <form
          onSubmit={handleSubmit}
          className="flex md:flex-row flex-col md:justify-center md:items-center gap-5 md:text-2xl font-semibold md:mt-10"
        >
          <input
            type="search"
            placeholder="Cole o link original"
            className="md:w-[30rem] w-full md:p-4 p-2 md:rounded-[1rem] rounded-full text-black"
            value={userLink}
            onChange={handleChange}
          />
          <button
            className="bg-[#f57b65] md:p-4 p-2 md:rounded-[1rem] rounded-full  md:w-[8rem]"
            type="submit"
          >
            Criar
          </button>
        </form>
      </section>
    </main>
  );
};

export default LinkShortener;
