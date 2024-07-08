const onChangeHandlerForForm = (setForm, form) => {
  return (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
};

export default onChangeHandlerForForm;
