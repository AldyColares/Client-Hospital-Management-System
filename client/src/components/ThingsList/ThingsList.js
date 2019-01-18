import React, {PropTypes} from 'react';
import ThingsListRow from './ThingsListRow';

const ThingsList = ({things}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {things.map(thing => 
            <ThingsListRow key={thing.id} thing={thing} />
          )}
        </tbody>
      </table>
    </div>
  );
};

HobbyList.propTypes = {
  hobbies: PropTypes.array.isRequired
};

export default ThingsList;