
export default function InputArea({addItem, handleChange, inputText}) {


    return(
        <div className="input-area">
            <label>Enter Title</label>
            <input name="title" type="text" onChange={handleChange} value={inputText.title}></input>
            <label>Enter Description</label>
            <input name="description" type="text" onChange={handleChange} value={inputText.description}></input>
            <button onClick={addItem}>Add</button>
        </div>
    )
}