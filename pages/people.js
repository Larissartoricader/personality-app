import PeopleList from "@/components/people";
import useSWR from "swr";

export default function PeoplePage() {
  return (
    <>
      <h1>People</h1>
      <PeopleList />
    </>
  );
}
