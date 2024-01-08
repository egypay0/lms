 
 const Page = () =>{

    const handelform = async (formData)=>{
   "use server"
   console.log(formData.get("user"))
   console.log("hello")
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