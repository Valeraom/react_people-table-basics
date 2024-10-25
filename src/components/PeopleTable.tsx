import { FC } from 'react';
import { Person } from '../types';
import { PersonItem } from './PersonItem';

type Props = {
  people: Person[];
};

export const PeopleTable: FC<Props> = ({ people }) => {
  return (
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
        {people.map(person => {
          const personWithParents = { ...person };

          personWithParents.mother = people.find(
            personItem => personItem.name === person.motherName,
          );

          personWithParents.father = people.find(
            personItem => personItem.name === person.fatherName,
          );

          return <PersonItem person={personWithParents} key={person.slug} />;
        })}
      </tbody>
    </table>
  );
};
