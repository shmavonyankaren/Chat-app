const onSubmitHandlerForForm = (form) => {
  return (e) => {
    e.preventDefault();
    console.log(form);
  };
};

export default onSubmitHandlerForForm;
