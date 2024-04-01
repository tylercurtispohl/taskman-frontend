import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="py-6 flex w-full justify-center">
      <div className="flex flex-col">
        <Image
          src="/Taskman_transparent_icon.png"
          alt="Taskman Logo"
          height={150}
          width={150}
        />
        <Link href="/boards">
          <span className="text-xl font-medium tracking-wide text-blue-500">
            Go to my boards
          </span>
          <ChevronRightIcon className="h-8 w-8 text-blue-500" />
        </Link>
      </div>
    </div>
  );
}
