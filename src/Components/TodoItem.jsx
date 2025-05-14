export default function TodoItem({title, description, id, onChecked}) {
    return(
        <div className="note-handler-box" onClick={() => onChecked(id)}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}