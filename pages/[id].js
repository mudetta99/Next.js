import { useRouter } from "next/router";


export default function myId() {

    const route = useRouter();

    return (

        <>
        
        <h1> ID page {route.query.id} </h1>
        
        </>


    )


}