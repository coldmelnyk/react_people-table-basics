import React, { useEffect, useState } from 'react';
import { Person } from '../../../types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
  peopleArray: Person[];
  selectedPersonId: string;
}

const findPersonInArray = (peopleArray: Person[], personName: string) => {
  return peopleArray.find(person => person.name === personName);
};

export const PersonTab: React.FC<Props> = ({
  peopleArray,
  selectedPersonId,
}) => {
  const [selectedSlug, setSelectedSlug] = useState('');

  const renderPerentName = (name: string) => {
    if (name) {
      if (findPersonInArray(peopleArray, name)) {
        return (
          <NavLink
            className={cn({
              'has-text-danger':
                findPersonInArray(peopleArray, name)!.sex === 'f',
            })}
            to={`/people/${findPersonInArray(peopleArray, name)!.slug}`}
          >
            {name}
          </NavLink>
        );
      } else {
        return name;
      }
    }

    return '-';
  };

  useEffect(() => {
    setSelectedSlug(selectedPersonId);
  }, [selectedPersonId]);

  return (
    <>
      {peopleArray.map(person => (
        <tr
          key={person.slug}
          data-cy="person"
          className={cn({
            'has-background-warning': selectedSlug === person.slug,
          })}
        >
          <td>
            <NavLink
              className={cn({
                'has-text-danger': person.sex === 'f',
              })}
              to={`/people/${person.slug}`}
            >
              {person.name}
            </NavLink>
          </td>

          <td>{person.sex}</td>
          <td>{person.born}</td>
          <td>{person.died}</td>
          <td>{renderPerentName(person.motherName!)}</td>
          <td>{renderPerentName(person.fatherName!)}</td>
        </tr>
      ))}
    </>
  );
};
