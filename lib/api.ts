// lib/api.ts

import axios from "axios";

export interface Note {
  completed: boolean;
  createdAt: number;
  id: string;
  text: string;
}

export type NoteListResponse = Note[];

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getNotes = async () => {
  await delay(2000);
  const res = await axios.get<NoteListResponse>("/tasks");
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/tasks/${id}`);
  return res.data;
}