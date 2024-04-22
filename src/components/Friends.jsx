import { NavLink } from "react-router-dom";

const TabeRow = (props) => {
  return (
      <tr>
      <th scope="row">{props.index + 1}</th>
      <td> 
        <NavLink to={"/profile/" + props.id}>
        {props.name} {props.lastname}
        </NavLink>
        </td>
      <td>{props.email}</td>
    </tr>
  )
}

export const Friends = (props) => {
  let users = props.function();
  console.log(users);
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TabeRow key={i} index={users[i].id} id={users[i].id} name={users[i].name} lastname={users[i].lastname} email={users[i].email}/>);
  }
  return (
    <>
    <h2 className="text-center">список друзей</h2>
    <div className="row">
    <table className="table table-striped">
    <thead>
    <tr>
      <th scope="col">#</th>
      <td scope="col">фамилия и имя</td>
      <td scope="col">email</td>
    </tr>
  </thead>
  <tbody>{userRow}</tbody>
    </table>
    </div>
    </>
  )
};