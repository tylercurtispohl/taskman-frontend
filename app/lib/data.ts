import { auth } from "@clerk/nextjs";
import { BoardT } from "../types";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const getToken = async () => {
  const { getToken } = auth();

  return await getToken();
};

export const getBoards = async () => {
  const token = await getToken();

  const response = await fetch(`${baseUrl}/api/board`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (await response.json()) as BoardT[];
};

export const getBoard = async (id: number) => {
  const token = await getToken();

  const response = await fetch(`${baseUrl}/api/board/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (await response.json()) as BoardT;
};
