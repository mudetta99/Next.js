import Link from "next/link"
import { useRouter } from "next/router"



export default function Seconde(){

    const route = useRouter();
    var studentName = "Mohamed";
    var studentSchool = "HighSchool";


    var studentName = "Emad";
    var studentSchool = "College";

    

    return (

        <>
            <h1> Welcome To seconde page </h1>

            <Link style={{textDecoration:"none"}} href={"/"}> Index </Link>
            <br></br>
            <button onClick={()=>{route.push('/')}}> Index </button>
             <button onClick={()=>{route.push('/posts')}} > Click To Post </button>

             <button  onClick={()=>{route.push(`ppl/${studentName}/${studentSchool}`)}}> Student Button </button>



        </>

    )

}