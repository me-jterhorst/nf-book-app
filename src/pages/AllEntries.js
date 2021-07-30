import "./AllEntries.css";
import Entry from "../components/Entry";
import { NavLink } from "react-router-dom";

export default function AllEntries() {
  const mockApi = [
    {
      id: "1",
      bookTitle: "Alex Book",
      authorName: "Evi",
      isRead: true,
      bookGenre: "Science Fiction",
      createdAt: "30.07.2021-past",
      updatedAt: "30.07.2021-later",
    },
    {
      id: "2",
      bookTitle: "Evis Book",
      authorName: "Jakob",
      isRead: true,
      bookGenre: "Science Fiction",
      createdAt: "30.07.2021-past",
      updatedAt: "30.07.2021-later",
    },
    {
      id: "3",
      bookTitle: "Boris Book",
      authorName: "Jakob",
      isRead: true,
      bookGenre: "Science Fiction",
      createdAt: "30.07.2021-past",
      updatedAt: "30.07.2021-later",
    },
  ];

  return (
    <main>
      <ul className="AllEntries">
        {mockApi.map((object) => {
          return (
            <Entry
              key={object.id}
              entryId={object.id}
              bookTitle={object.bookTitle}
              authorName={object.authorName}
              isReadStatus={object.isRead}
            />
          );
        })}
      </ul>

      <NavLink to="/newEntry" className="btn btnNav">
        Add +
      </NavLink>
    </main>
  );
}
