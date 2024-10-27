import { useEffect, useState } from 'react';
import { getPeople } from '../api';
import { Person } from '../types';
import { Loader } from '../components/Loader/Loader';
import { PeopleTab } from '../components/Loader/PeopleTab/PeopleTab';
import { useParams } from 'react-router-dom';

export enum ErrorFetching {
  none = 'none',
  fetchingPeople = 'fetchingPeople',
}

export const PeoplePage = () => {
  const { personId } = useParams();
  const selectedPersonId = personId || '';

  const [peopleArray, setPeopleArray] = useState<Person[]>([]);
  const [error, setError] = useState<ErrorFetching>(ErrorFetching.none);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    getPeople()
      .then(people => setPeopleArray(people))
      .catch(() => setError(ErrorFetching.fetchingPeople))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="box table-container">
          {isLoading ? (
            <Loader />
          ) : (
            <PeopleTab
              peopleArray={peopleArray}
              error={error}
              selectedPersonId={selectedPersonId}
            />
          )}
        </div>
      </div>
    </>
  );
};
