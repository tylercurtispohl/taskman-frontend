import { BoardT } from "@/app/types";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default withPageAuthRequired(async function Page({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;

  const response = await fetch(`${baseUrl}/api/board/${id}`);
  const board = (await response.json()) as BoardT;

  return (
    <div className="flex flex-row flex-nowrap overflow-y-scroll gap-4">
      {board.cardLists?.length &&
        board.cardLists.map((l) => (
          <div key={`list_container_${l.id}`} className=" bg-slate-200 ">
            {l.name}
          </div>
        ))}
    </div>
  );
} as any);
