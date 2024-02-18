import { useState } from "react";
import { User } from "../types";
interface FormState {
  inputValue: User;
}

interface FormProps {
    onNewSub: React.Dispatch<React.SetStateAction<User[]>>
}

const Form = ({onNewSub}: FormProps) => {
  const [inputValue, setInputValue] = useState<FormState["inputValue"]>({
    id: 0,
    name: "",
    role: "",
    avatar: "",
  });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onNewSub(users => [...users, inputValue]);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="number"
          name="id"
          placeholder="id"
        />
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="role"
          placeholder="role"
        />
        <textarea onChange={handleChange} name="avatar" placeholder="avatar" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Form;
