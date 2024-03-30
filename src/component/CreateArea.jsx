import React  ,{useState} from "react";

function CreateArea(props) {

const [note,setNote]=useState({title:"",content:""});

function handelChange(event){
const {name,value}=event.target;
setNote(prevNote =>{

return {
  ...prevNote,
  [name] :value
};
})
}
  return (
    <div>
      <form>
        <input onChange={handelChange} name="title" placeholder="Title" value={note.title}  />
        <textarea onChange={handelChange} name="content" placeholder="Take a note..." rows="3"value={note.content} />
        <button onClick={(event)=>{
          event.preventDefault();
        props.onAdd(note);
        setNote({title:"",content:""});
         }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
