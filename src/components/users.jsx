import { CiSearch } from "react-icons/ci";
import Button from './button'

const iconStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '8px', // Adds some space between the text and the icon
    color:'gray'
  };

  
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

function Users() {


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

    Users({users})


export default Users;


