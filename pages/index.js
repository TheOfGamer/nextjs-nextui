import {title, subtitle} from "@/components/primitives";
import {Code} from "@nextui-org/react";
import React from "react";

export default function Home() {
  return (
    <main className="dark">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-3">
            <div className="mt-44 inline-block max-w-lg text-center justify-center flex-col items-center justify-center gap-4 py-8 md:py-3">
                <h1 className={title()}>Example app&nbsp;</h1><h1 className={title({ color: "violet" })}>installed&nbsp;</h1>
               <br />
                <h1 className={title()}>
                    successfully!
                </h1>
                <h2 className={subtitle({ class: "mt-4" })}>
                    You can now edit project name via <Code>npm init</Code> or edit contents of site in <Code>public</Code> & <Code>components</Code> folders.
                </h2>
            </div>
        </section>
        <center>
            <div className="mt-80"></div>
        <Code>Made with ♥ by <a href="https://github.com/TheOfGamer">TheOfGamer</a></Code>
        </center>
    </main>
  );
}