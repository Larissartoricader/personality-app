import PeopleList from "@/components/people";

export default function PeoplePage({ people }) {
  return (
    <>
      <h1>People</h1>
      <PeopleList people={people} />
    </>
  );
}
