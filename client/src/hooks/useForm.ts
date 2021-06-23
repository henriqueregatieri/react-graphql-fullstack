import { useState } from 'react';

export type IChangeElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

export const useForm = <T>(initialState: T, handleAction: Function) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<IChangeElement>) => {
    const { tagName, name, value } = event.target;
    const parsedValue = tagName === 'SELECT' && value === '' ? null : value;
    setFormState({ ...formState, [name]: parsedValue });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAction(formState);
  };

  return { formState, setFormState, handleChange, handleSubmit };
};
