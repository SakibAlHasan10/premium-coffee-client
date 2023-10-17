import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
const Users = () => {
  const loaderUsers = useLoaderData();
  const [users, setUsers] = useState(loaderUsers);
  console.log(users)
  const handleDelete=(e)=>{
    fetch(`https://premium-coffee-sever.vercel.app/users/${e}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount>0){
            alert('user delete successfully')
            const reminder = users.filter(user => user._id !== e)
            setUsers(reminder)
        }
    })
  }
  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Create Time</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => 
              <tr key={i}>
                <th >1</th>
                <td>{user.email}</td>
                <td>{user.createTime}</td>
                <td>
                    <button className="btn mr-3">
                        <AiFillEdit/>
                    </button>
                    <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                </td>
              </tr>
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
