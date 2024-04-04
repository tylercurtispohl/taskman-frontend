import { BoardT } from "../types";
import { BoardList } from "../components/boards/boardList";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default withPageAuthRequired(async function Page() {
  const session = await getSession();
  // const user = session?.user;
  const accessToken = session?.accessToken;

  // console.log(user);
  console.log(accessToken);
  const response = await fetch(`${baseUrl}/api/board`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(response);

  const boards = (await response.json()) as BoardT[];

  return (
    <>
      <BoardList boards={boards} />
    </>
  );
});
