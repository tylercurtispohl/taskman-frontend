import { BoardT } from "../types";
import { BoardList } from "../components/boards/boardList";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function Page() {
  const response = await fetch(`${baseUrl}/api/board`);
  const boards = (await response.json()) as BoardT[];

  return (
    <>
      <BoardList boards={boards} />
    </>
  );
}
