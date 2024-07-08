const onSearchHandler = (setQuery, getChannels, setLoading) => {
  return (e) => {
    e.preventDefault();

    setLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);
  };
};

export default onSearchHandler;
