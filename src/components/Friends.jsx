
const TabeRow = (props) => {
  return (
      <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.lastname}</td>
    </tr>
  )
}

export const Friends = (props) => {
  let users = props.function();
  console.log(users);
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TabeRow key={i} index={i} name={users[i].name} lastname={users[i].lastname}/>);
  }
  return (
    <>
    <h2 className="text-center">список друзей</h2>
    <div className="row">
    <table className="table table-striped">
    <thead>
    <tr>
      <th scope="col">Номер</th>
      <td scope="col">Имя</td>
      <td scope="col">Фамилия</td>
    </tr>
  </thead>
    {userRow}
</table>
    </div>
    </>
  )
};