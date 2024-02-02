import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {

  const route = useRouter();
  const carName = 'Toyota Corolla';
  const carNo = '123456789';


  return (
    <>
      <h1>Hello Mohamed Emad</h1>

      {/* <a href="/muhammed"> Muhammed </a>  ==> Reload Page  */}   

      <Link href="/muhammed"> Muhammed </Link> <br></br>
      <Link href="/aboutme"> About me </Link> <br></br>
      <Link href="/users"> Users </Link><br></br>
      <br></br>
      <Link href={"/seconde"}> Seconde Page </Link>
      <br></br>



      <button onClick={()=>{route.push('/posts')}} > Click To Post </button>
      <button onClick={()=> {route.push( `/services/${carName}/${carNo}` )}} > Click To Car </button>
      <button onClick={()=>{route.push('/seconde')}} > To seconde page </button>


    </>
  )
}
