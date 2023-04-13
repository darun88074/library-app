import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import InputGroup from "../../components/InputGroup"
import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { title, author, discription } = existingUser[0];
  const [values, setValues] = useState({
    title, author, discription
  });

  const handleEditUser = () => {
    setValues({ title: '', author: '', discription: '' });
    dispatch(editUser({
      id: params.id,
      title: values.title,
      author: values.author,
      discription: values.discription
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <InputGroup
        label="Title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
      />
      <br />
      <InputGroup
        label="Author"
        value={values.author}
        onChange={(e) => setValues({ ...values, author: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'jhondoe@mail.com' }}
      />
      <InputGroup
        label="Discription"
        value={values.discription}
        onChange={(e) => setValues({ ...values, discription: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'jhondoe@mail.com' }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser