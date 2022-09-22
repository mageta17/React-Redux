function AddNinja () {
    const state = {
        name: null,
        age: null,
        belt: null
    }
    function handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(state)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={handleChange} />
                <label htmlFor="name">Age:</label>
                <input type="text" id="age" onChange={handleChange} />
                <label htmlFor="name">Belt:</label>
                <input type="text" id="belt" onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddNinja;