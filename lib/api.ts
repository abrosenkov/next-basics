// lib/api.ts

import axios from "axios";

export interface Note {
  id: "string";
  title: "string";
  content: "string";
}


export interface Category {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
};

export type NoteListResponse = {
  notes: Note[]
};

axios.defaults.baseURL = "https://next-docs-9f0504b0a741.herokuapp.com/";


export const getNotes = async (categoryId?: string) => {
  const res = await axios.get<NoteListResponse>("/notes", {
    params: { categoryId },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
}


export const getCategories = async () => {
  const res = await axios<Category[]>('/categories');
  return res.data;
};