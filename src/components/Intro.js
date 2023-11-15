import Button from "./Button";

export default function Intro({ setIsPlaying }) {
  return (
    <div className="intro-screen">
      <p>can you guess these operations correctly? 🤯</p>
      <Button onClick={() => setIsPlaying(true)}>start</Button>
    </div>
  );
}
