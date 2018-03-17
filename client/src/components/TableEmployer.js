
module.exports = function (props) {
  if (props.employees.lenght === 0) return;
  return (
    <div class="panel-body">
      <table class="table table-stripe">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last name</th>
            <th>Perceteges</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(employer =>
            <tr key={employer._id}>
              <td>{employer.name}</td>
              <td>{employer.lastName}</td>
              <td>{employer.perceteges}%</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}