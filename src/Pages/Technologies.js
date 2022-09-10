import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    java,
    springboot,
    python,
    js,
    react,
    kubernetes,
    docker,
    actions,
    jenekins,
    terraform,
    mongodb,
    firebase,
    aws,
    npm,
    postman,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={js} title="JavaScript" alt="" />
        <img src={react} title="React" alt="" />
        <img src={java} title="Java" alt="" />
        <img src={springboot} title="SpringBoot" alt="" />
        <img src={python} title="Python" alt="" />

      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={npm} title="NPM" alt="" />
        <img src={postman} title="Postman" alt="" />
        <img src={docker} title="Docker" alt="" />
        <img src={kubernetes} title="Kubernets" alt="" />
        <img src={actions} title="Actions" alt="" />
        <img src={jenekins} title="Jenekins" alt="" />
        <img src={terraform} title="Terraform" alt="" />
        <img src={aws} title="aws" alt="Postman" />
        <img src={mongodb} title="MongoDB" alt="" />
        <img src={firebase} title="Firebase" alt="" />


      </section>
    </main>
  );
}

export default Technologies;
