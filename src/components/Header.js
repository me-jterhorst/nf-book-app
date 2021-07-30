import "./Header.css";

export default function Header({ title }) {
  return (
    <header className="top">
      <h1>{title}</h1>
    </header>
  );
}
