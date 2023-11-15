export default function Button({ onClick, children }) {
  return (
    <button className="main-btn" onClick={onClick}>
      {children}
    </button>
  );
}
