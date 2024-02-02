import { useRouter } from "next/router"


export default function schoolid() {

    const route = useRouter();

    return (

        <>
            <h1> Student name is: {route.query.student} </h1>
            <h1> school is: {route.query.schoolid} </h1>
        </>

    )

}


