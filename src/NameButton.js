import React, { useEffect, useState } from 'react';

const generateRandomColour = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

function NameButton({ people }) {
  const defaultState = { name: 'Reset', title: '', colour: 'black' };

  const [currentPerson, setCurrentPerson] = useState(defaultState);
  const [fontColour, setFontColour] = useState(defaultState.colour);
  const [isRandomColour, setIsRandomColour] = useState(false);

  useEffect(() => {
    let colour = currentPerson.colour;
    if (isRandomColour && currentPerson.name !== 'Reset') {
      colour = generateRandomColour();
    }
    setFontColour(colour);
  }, [currentPerson]);

  return (
    <>
      <p style={{ color: fontColour }}>Title: {currentPerson.title}</p>
      {[defaultState, ...people].map((person) => (
        <button key={person.name} onClick={() => setCurrentPerson(person)}>
          {person.name}
        </button>
      ))}
      <br />
      Random colour:{' '}
      <input
        type="checkbox"
        checked={isRandomColour}
        onClick={() => setIsRandomColour(!isRandomColour)}
      ></input>
    </>
  );
}

export default NameButton;
