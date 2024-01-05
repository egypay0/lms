export default async function RegisterPage(){
    return (
        <div className="container">
        <from className="flex flex-col gap-2 mx-auto max-w-sm">
        <input type="email" className=" border border-black "/>
        <input type="password" className=" border border-black "/>
        <button type="submit">Register</button>
        
        </from>
        </div>
    )
}