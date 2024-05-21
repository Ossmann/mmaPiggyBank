import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Portfolio for 7822ICT
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a>
            By Jakob Ossmann
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="z-10 text-center">
          <div className="text-4xl font-bold">
            My WIL Project
          </div>
          <div className="text-xl">
            With fluxguide and the Culture Software Group
          </div>
          
          <div className="">
          <Image
          src="/Fluxguide-Logo.svg" 
          alt="fluxguide Logo"
          width={100}
          height={100}
          >
        </Image>
        </div>
          
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-5 lg:text-left">
        <Link href="/placement">
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-xl font-semibold">
              My WIL{" "}
              <div className="group">
                <div className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none animate-bounce-horizontal group-hover:animate-none">
                  -&gt;
                </div>
              </div>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-90">
              In-depth critical reflection of my placement experience.
            </p>
          </div>
        </Link>

        <Link href="/placement">
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-xl font-semibold">
              Technical Skills{" "}
              <div className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </div>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-90">
              Description of the technical skills honed through my placement.
            </p>
          </div>
        </Link>

        <Link href="/placement">
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-xl font-semibold">
              Ethical Conduct{" "}
              <div className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </div>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-90">
              Examples how I dealt with ethical challenges.
            </p>
          </div>
        </Link>

        <Link href="/placement">
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-xl font-semibold">
              Extra-Curricular{" "}
              <div className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </div>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-90">
              Reflection on the knowledge gained through extra-curricular holistic experiences.
            </p>
          </div>
        </Link>

        <Link href="/placement">
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-xl font-semibold">
              About Me{" "}
              <div className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </div>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-90">
              Get to know me and my career aspirations.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
