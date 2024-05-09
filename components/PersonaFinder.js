import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import styled from "styled-components";

const SwipeableContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  height: 50vh;
  background-color: antiquewhite;
`;

const TypeOfMusicBox = styled.li`
  background-color: hotpink;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  border: solid black 5px;
  font-size: 50px;
  width: 50vw;
  cursor: pointer;
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
`;

const LeftArrow = styled(ArrowIcon)`
  left: 10px;
`;

const RightArrow = styled(ArrowIcon)`
  right: 10px;
`;

const GenreInfoBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightblue;
  padding: 20px;
  border: 2px solid black;
`;

export default function PersonaFinder({ people }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showGenreInfo, setShowGenreInfo] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < people.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    },
  });

  const toggleGenreInfo = () => {
    setShowGenreInfo(!showGenreInfo);
  };

  const closeGenreInfo = () => {
    if (showGenreInfo) {
      setShowGenreInfo(false);
    }
  };

  return (
    <>
      <SwipeableContainer {...handlers} onClick={closeGenreInfo}>
        {currentIndex > 0 && (
          <LeftArrow onClick={() => setCurrentIndex(currentIndex - 1)}>
            &lt;
          </LeftArrow>
        )}
        <h1>All the types of music</h1>
        <ul>
          <TypeOfMusicBox
            key={people[currentIndex]._id}
            onClick={toggleGenreInfo}
          >
            {people[currentIndex].music}
          </TypeOfMusicBox>
        </ul>
        {currentIndex < people.length - 1 && (
          <RightArrow onClick={() => setCurrentIndex(currentIndex + 1)}>
            &gt;
          </RightArrow>
        )}
        {showGenreInfo && (
          <GenreInfoBox>
            <h2>{people[currentIndex].music}</h2>
            <p>{people[currentIndex].name}</p>
            <p>{people[currentIndex].city}</p>
          </GenreInfoBox>
        )}
      </SwipeableContainer>
    </>
  );
}
