import React from 'react';
import { PersonTab } from '../PersonTab/PersonTab';
import { Person } from '../../../types';
import { ErrorFetching } from '../../../pages/PeoplePage';

interface Props {
  peopleArray: Person[];
  error: ErrorFetching;
  selectedPersonId: string;
}

export const PeopleTab: React.FC<Props> = ({
  peopleArray,
  error,
  selectedPersonId,
}) => {
  return (
    <>
      {error === ErrorFetching.none ? (
        <table
          data-cy="peopleTable"
          className="table is-striped is-hoverable is-narrow is-fullwidth"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Sex</th>
              <th>Born</th>
              <th>Died</th>
              <th>Mother</th>
              <th>Father</th>
            </tr>
          </thead>

          <tbody>
            {peopleArray.length > 0 ? (
              <PersonTab
                peopleArray={peopleArray}
                selectedPersonId={selectedPersonId}
              />
            ) : (
              <p data-cy="noPeopleMessage">There are no people on the server</p>
            )}
          </tbody>
        </table>
      ) : (
        <p data-cy="peopleLoadingError" className="has-text-danger">
          Something went wrong
        </p>
      )}
    </>
  );
};
