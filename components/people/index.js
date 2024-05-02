import useSWR from "swr";
import { StyledList, StyledListItem } from "./styledPeople";

export default function PeopleList() {
  const { data, isLoading } = useSWR("api/people");

  if (isLoading) {
    return <h2>Still Loading...</h2>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <StyledList>
        {data.map((person) => (
          <StyledListItem key={person.id}>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.address.city}</p>
          </StyledListItem>
        ))}
      </StyledList>
    </>
  );
}
