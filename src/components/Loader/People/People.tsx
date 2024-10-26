import { useEffect, useState } from 'react';
import { getPeople } from '../../../api';
import { Person } from '../../../types';
import { Loader } from '../Loader';
import { PeopleTab } from '../PeopleTab/PeopleTab';

export enum ErrorFetching {
  none = 'none',
  fetchingPeople = 'fetchingPeople',
}

export const People = () => {
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
      {isLoading ? (
        <Loader />
      ) : (
        <PeopleTab peopleArray={peopleArray} error={error} />
      )}
    </>
  );
};
