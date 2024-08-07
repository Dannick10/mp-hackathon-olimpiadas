import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex my-8 text-center flex-col gap-2">
      <h2 className="text-xl text-primary">CODANTESPORTS</h2>
      <p className="text-base-200 bg-primary p-2">Sobre o projeto</p>
      <div className="container mx-auto p-4 text-left">
        <h1 className="text-3xl font-bold mb-4">
          Hackathon das Olimpíadas Paris 2024 do
          <Link href="https://codante.io" className="text-secondary underline">
            Codante
          </Link>
        </h1>
        <p>
          Nós disponibilizamos uma
          <Link href="https://docs.apis.codante.io/olympic-games" className="text-secondary underline">
            API com os dados oficiais das Olimpíadas Paris 2024
          </Link>
          e agora é com você!
        </p>
        <p>Crie uma aplicação que consuma esses dados e concorra a prêmios.</p>

        <h2 className="text-2xl font-bold mt-6 mb-2">🤔 Como participar?</h2>
        <p>
          📅 <strong>Data de início:</strong> 29/07/2024
        </p>
        <p>
          📅 <strong>Data limite para submissão:</strong> 07/08/2024 às 23:59
        </p>
        <p>
          📅 <strong>Data para divulgação dos resultados:</strong> até
          12/08/2024
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">
          👉🏽 Registre sua participação
        </h3>
        <p>
          Do dia <strong>29/07/2024</strong> ao dia <strong>07/08/2024</strong>
          qualquer pessoa poderá participar gratuitamente desse hackathon. Basta
          entrar no site do Codante, acessar a
          <Link href="https://codante.io/mini-projetos/hackathon-olimpiadas" className="text-secondary underline">
            página oficial do hackathon
          </Link>
          e seguir o passo-a-passo:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li>Se cadastrar com o seu GitHub no Codante</li>
          <li>
            Clicar em <strong>"Participar"</strong> do projeto
          </li>
          <li>
            Fazer o fork do repositório oficial 
            <Link href="https://github.com/codante-io/mp-hackathon-olimpiadas/fork" className="text-secondary underline">
              https://github.com/codante-io/mp-hackathon-olimpiadas/fork
            </Link>
            
          </li>
          <li>
            Clicar em <strong>"Verificar fork"</strong>
          </li>
          <li>Implementar a sua solução no seu fork do repositório oficial</li>
          <li>
            Fazer deploy e submeter o link da sua resolução no site do Codante
          </li>
        </ol>
        <p className="mb-4">
          📺 Você pode ver um
          <Link href="https://codante.io/workshops/resolucao-pagina-de-faq/participando-do-mini-projeto-no-codante" className="text-secondary underline">
            tutorial em vídeo sobre esse passo-a-passo aqui
          </Link>
          .
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">
          🔨 Desenvolva seu projeto
        </h3>
        <p>
          Você deverá criar uma aplicação que utilize os dados das olimpíadas
          por meio da nossa API.
        </p>
        <p>
          🔗 Link da API aqui:
          <Link href="https://docs.apis.codante.io/olympic-games" className="text-secondary underline">
            https://docs.apis.codante.io/olympic-games
          </Link>
        </p>
        <p>
          Use sua criatividade para pensar em uma solução interessante. Temos
          algumas sugestões 
          <em>mas fique à vontade para criar o que você quiser</em>
          :
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Bolão de resultados</li>
          <li>Quadro de medalhas filtrando por países</li>
          <li>Agenda de jogos</li>
          <li>Quizz olímpico</li>
        </ul>
        <p>
          Você pode utilizar a tecnologia que quiser, desde que você
          disponibilize e submeta no nosso site um link com a aplicação
          funcionando. Se for um app mobile, pode ser o link da Play Store ou
          App Store.
        </p>
        <p>
          Você obrigatoriamente deverá usar nossa API, mas pode utilizar outras
          fontes de dados também.
        </p>

        <h3 className="text-xl font-bold mt-4 mb-2">🏆 Premiação</h3>
        <p>
          Nosso principal objetivo com esse hackathon é estimular que vocês
          pratiquem programação. O mais valioso é aprender e se divertir um
          pouco no processo. Então entrem com o <em>espírito olímpico</em> de
          uma competição saudável.
        </p>
        <p>
          Pra tornar as coisas mais divertidas, vamos dar uma premiação para as
          3 melhores soluções.
        </p>
        
        <h3 className="text-xl font-bold mt-4 mb-2">❓ Perguntas frequentes</h3>
        <details className="collapse collapse-plus mb-4 bg-base-200 border-base-300 border-2">
          <input type="radio" name="my-accordion-3" />
          <summary className="collapse-title font-semibold">
            Quais tecnologias posso usar no desenvolvimento da minha aplicação?
          </summary>
          <div className="collapse-content mt-2">
            <p>
              Você tem a liberdade de usar qualquer tecnologia para criar a sua
              aplicação, desde que ela seja acessível online. Se você
              desenvolver um aplicativo mobile, forneça o link da Play Store ou
              App Store.
            </p>
          </div>
        </details>

        <details className="collapse collapse-plus mb-4 bg-base-200 border-base-300 border-2">
          <input type="radio" name="my-accordion-3" />
          <summary className="collapse-title font-semibold">
            Posso usar outras fontes de dados além da API fornecida?
          </summary>
          <div className="collapse-content">
            <p>
              Sim, você pode integrar outras fontes de dados externas à sua
              aplicação, além da API que fornecemos. No entanto, lembre-se que o
              uso da nossa API é obrigatório para participar do hackathon.
            </p>
          </div>
        </details>
        <details className="collapse collapse-plus mb-4 bg-base-200 border-base-300 border-2">
          <input type="radio" name="my-accordion-3" />
          <summary className="collapse-title font-semibold">
            Posso fazer em dupla ou com mais pessoas?
          </summary>
          <div className="collapse-content">
            <p>
              Sim. Porém somente uma resolução deverá ser submetida. O grupo
              será responsável em dividir a premiação internamente, tendo que
              escolher uma pessoa para ganhar o Codante PRO.
            </p>
          </div>
        </details>
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
        <Link href={'https://github.com/Dannick10'} target="_blank">
          <div className="btn btn-primary">GITHUB</div>
        </Link>
        <Link href={'https://www.linkedin.com/in/futurodevdaniel/'} target="_blank">
          <div className="btn btn-primary">LINKEDIN</div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
