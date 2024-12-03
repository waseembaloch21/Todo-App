function TodoInput({ onChange, onClick,value }) {
    return (
        <div className='my-3'>
            <input
                onChange={onChange}
                value={value}
                className='border font-serif rounded-sm p-2' type="text"placeholder='Add Todo'
            />
            <button
                onClick={onClick}
                disabled={value === ""}
                style={{backgroundColor:value === '' && "gray"}}
                className='p-2 px-3 ml-2 font-serif rounded-sm bg-cyan-500'>
                Add
            </button>
        </div>
    )
}

export default TodoInput;