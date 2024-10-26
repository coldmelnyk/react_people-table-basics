import React from 'react';
import { Person } from '../../../types';
import cn from 'classnames';

interface Props {
  peopleArray: Person[];
}

const findPersonInArray = (peopleArray: Person[], personName: string) => {
  return peopleArray.find(person => person.name === personName);
};

export const PersonTab: React.FC<Props> = ({ peopleArray }) => {
  const renderPerentName = (name: string) => {
    if (name) {
      if (findPersonInArray(peopleArray, name)) {
        return (
          <a
            className={cn({
              'has-text-danger':
                findPersonInArray(peopleArray, name)!.sex === 'f',
            })}
            href={`/test#/people/${findPersonInArray(peopleArray, name)!.slug}`}
          >
            {name}
          </a>
        );
      } else {
        return name;
      }
    }

    return '-';
  };

  return (
    <>
      {peopleArray.map(person => (
        <tr key={person.slug} data-cy="person">
          <td>
            <a
              className={cn({
                'has-text-danger': person.sex === 'f',
              })}
              href={`#/people/${person.slug}`}
            >
              {person.name}
            </a>
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
