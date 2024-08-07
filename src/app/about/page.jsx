import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex my-8 text-center flex-col gap-2">
      <h2 className="text-xl text-primary">CODANTESPORTS</h2>
      <p className="text-base-200 bg-primary p-2">Sobre o projeto</p>
      <div className="container mx-auto p-4 text-left">
        <h1 className="text-3xl font-bold mb-4">
          Hackathon das Olimpíadas Paris 2024 do Codante
        </h1>
        <p>Use sua criatividade para pensar em uma solução interessante.</p>
        <p>
          Nosso principal objetivo com esse hackathon é estimular que vocês
          pratiquem programação. O mais valioso é aprender e se divertir um
          pouco no processo. Então entrem com o espírito olímpico de uma
          competição saudável.
        </p>
      </div>
      <p className="text-base-200 bg-primary p-2">Projeto desenvolvido em </p>
      <div className="flex flex-wrap justify-center items-center">
        <span className="badge badge-primary m-2">NEXTJS</span>
        <span className="badge badge-primary m-2">JAVASCRIPT</span>
        <span className="badge badge-primary m-2">TAILWINDCSS</span>
        <span className="badge badge-primary m-2">DAISYUI</span>
        <span className="badge badge-primary m-2">SWIPERJS</span>
        <span className="badge badge-primary m-2">APICODANTE</span>
      </div>
      <div className="mt-8 flex gap-2 justify-center items-end">
        <Link href={"https://github.com/Dannick10"} target="_blank">
          <div className="btn btn-primary">GITHUB</div>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/futurodevdaniel/"}
          target="_blank"
        >
          <div className="btn btn-primary">LINKEDIN</div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
