const handleScroll = (e) => {
    const element = listBoxComponentRef?.current;
    devConsolelog('height of scroll', element.scrollHeight - element.scrollTop === element.clientHeight);
};

<Autocomplete
options={Array(100).fill(2)}
ListboxComponent={React.forwardRef((props, ref) => (
    <ul {...props} ref={listBoxComponentRef} onScroll={handleScroll} />
))}
renderInput={(params) => <TextField {...params} />}
/>