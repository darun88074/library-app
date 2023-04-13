import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider, Rating } from '@mui/material';
import { deleteUser } from "./userSlice";
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const UserList = () => {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }

  const renderCard = () => users.map(user => (
    <>
      <div key={user.id}>
        <div>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <div className="flex justify-between">
                    <div className="whitespace-nowrap	max-w-xs	overflow-hidden	text-ellipsis	">{user.title}</div>
                    <div>
                      <Link to={`edit-user/${user.id}`}>
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                      </Link>
                      <button
                        onClick={() => handleRemoveUser(user.id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div className="whitespace-nowrap	max-w-xs		overflow-hidden	text-ellipsis	"> {user.author}</div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div className="whitespace-nowrap	max-w-xs	overflow-hidden	text-ellipsis		">   {user.discription}</div>
                </Typography>
                <Divider className="py-1" />
                <div className="flex pt-1 items-center justify-between">
                  <div>
                    <Typography variant="body2" color="text.secondary" >
                      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    </Typography>
                  </div>
                  <div>
                    <ToggleButtonGroup
                      color="primary"
                      size="small"
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      aria-label="Platform"
                    >
                      <ToggleButton value="web">Read</ToggleButton>
                      <ToggleButton value="android">Unread</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>

              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="flex gap-4">

        </div>
      </div>
    </>
  ))

  return (
    <div>
      <Link to="/add-user"><Button>Add Book</Button></Link>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? renderCard() : <div className="text-center col-span-2 text-gray-700 font-semibold">
          No books
        </div>}
      </div>
    </div>
  )
}

export default UserList