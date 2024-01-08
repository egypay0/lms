 
 const Page = () =>{

    const handelform = async (formData)=>{
   "use server"
   console.log(formData.get("user"))
   
}
    return (
        <div>
        <form action={handelform}>
        <input type="text" name="user" ></input>
        <button o >Send</button>
        </form>
        </div>
    )
}
export default Page;