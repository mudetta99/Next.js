import { useRouter } from "next/router"

export default function postId(){

    const route = useRouter();

    return (

        <>
        <h1> Post Number: {route.query.postid} </h1>
        </>

    )


}