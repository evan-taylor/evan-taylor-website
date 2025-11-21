import CardStack from "../../components/card-stack";

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <CardStack initialActiveId="about" />
    </main>
  );
}
