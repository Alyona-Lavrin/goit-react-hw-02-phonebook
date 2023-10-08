const Filter = ({setState, state}) => {
    return (
        <div className="filter-wrap">
            <p className="text">Find contacts by name</p>
            <input className="inpuText" type="text" name="" id="" onChange={(e) => {
                setState({...state, filter: e.currentTarget.value})
            }}/>
        </div>
    )
}

export default Filter