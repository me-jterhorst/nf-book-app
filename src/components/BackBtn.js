import "./BackBtn.css";

export default function BackBtn({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn--back">
      Go Back
    </button>
  );
}
