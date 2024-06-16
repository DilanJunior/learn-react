import { CiSearch } from "react-icons/ci";
import Button from './button'

const iconStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '8px', // Adds some space between the text and the icon
    color:'gray'
  };

function Users({users}) {


    return (
        <>
        <h3>Colaboradores:</h3>
          {users.map((user, id) => (
            <div key={id}>
              <h5>{user.userName} | {user.name} <a href="#" > <CiSearch style={iconStyle} size={22} /> </a> </h5>
            </div>
          ))}

          <Button />

        </>
      );
    }


export default Users;


