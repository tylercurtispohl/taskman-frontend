import { getBoard } from "@/app/lib/data";
import { BoardT } from "@/app/types";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = params;
  const board = await getBoard(id);

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
}
