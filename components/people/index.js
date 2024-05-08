import useSWR from "swr";
import { StyledList, StyledListItem } from "./styledPeople";

export default function PeopleList({ people }) {
  return (
    <>
      <StyledList>
        {people.map((person) => (
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
