

export default function ListItem(props){
    //props.deleteItem
    function handleDelete(){
        props.deleteitem(props.id);
    }
    function handleCompletion(){
        props.toggleCompletion(props.id);
    }
    return (
        <li className={props.completed ? "completed" : ""}>
            {props.task} <button className="completeMe" onClick={handleCompletion}>{props.completed ? "Undo" : "Complete"}</button> <button className="deleteMe" onClick={handleDelete}>Delete</button>
        </li>
    );
}