export default function Usercard(props){

return(
    <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", width: "250px", height:"fit-content", margin: "20px auto", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center" }}>
   <div>
        <h1>{props.name}</h1>
        <p>{props.personalinfo}</p>
        {props.email}
        </div>
    </div>
)

}