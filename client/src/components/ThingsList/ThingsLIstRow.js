import React, {PropTypes} from 'react';

const ThingsListRow = ({thing}) => {
  return (
    <tr>
      <td>{thing.name}</td>
    </tr>
  );
};

ThingsListRow.propTypes = {
  thing: PropTypes.object.isRequired
};

export default ThingsListRow;