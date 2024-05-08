import PersonaFinder from "@/components/PersonaFinder";

export default function HomePage({ people }) {
  return (
    <div>
      <h1>Personalities</h1>
      <PersonaFinder people={people} />
    </div>
  );
}
