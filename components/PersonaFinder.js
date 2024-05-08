export default function PersonaFinder({ people }) {
  return (
    <>
      <h1>All the type of music</h1>
      <ul>
        {people.map((person) => (
          <li key={person._id}>{person.music}</li>
        ))}
      </ul>
    </>
  );
}
