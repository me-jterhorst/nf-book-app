import "./AllEntries.css";
import Entry from "../components/Entry";

export default function AllEntries() {
  return (
    <main>
      <ul className="AllEntries">
        <Entry bookTitle="Alex Book" authorName="Jakob" isReadStatus={true} />
        <Entry bookTitle="Jakob" authorName="My Mum" isReadStatus={true} />
        <Entry bookTitle="Bible" authorName="God" isReadStatus={false} />
        <Entry
          bookTitle="I don't have a book"
          authorName="Boris"
          isReadStatus="false"
        />
        <Entry
          bookTitle="How to Learn JavaScript without learning to fail"
          authorName="Evi"
          isReadStatus={true}
        />
      </ul>

      <button className="btn btnNav">Add +</button>
    </main>
  );
}
