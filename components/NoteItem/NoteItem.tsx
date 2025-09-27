// components/NoteItem/NoteItem.tsx

import { Note } from "@/lib/api";
import Link from "next/link";

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  // const date = new Date(item.createdAt).toLocaleDateString();

  return (
    <>
      <li>
        <Link href={`/notes/${item.id}`}>{item.text}</Link>
        {/* <p>{item.text}</p>
        <br />
        <p>{date}</p> */}
      </li>
      <br />
      <hr />
    </>
  );
};

export default NoteItem;
