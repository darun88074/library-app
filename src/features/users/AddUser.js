import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import InputGroup from "../../components/InputGroup"
import { addUser } from "./userSlice"

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '', author: '', discription: ''
  });

  const handleAddUser = () => {
    setValues({ title: '', author: '', discription: '' });
    dispatch(addUser({
      id: uuidv4(),
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
        inputProps={{ type: 'text', placeholder: 'title' }}
      />
      <br />
      <InputGroup
        label="Author"
        value={values.author}
        onChange={(e) => setValues({ ...values, author: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Author' }}
      />
      <br />
      <InputGroup
        label="Discription"
        value={values.discription}
        onChange={(e) => setValues({ ...values, discription: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'discription' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser