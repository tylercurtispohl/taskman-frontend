import { BoardT } from "../types";
import { BoardList } from "../components/boards/boardList";
import { auth } from "@clerk/nextjs";
import { getBoards } from "../lib/data";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function Page() {
  const { getToken } = auth();

  const token = await getToken();

  const response = await fetch(`${baseUrl}/api/board`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response.headers);

  console.log(response.body);

  const boards = await getBoards();

  return (
    <>
      <BoardList boards={boards} />
    </>
  );
}
