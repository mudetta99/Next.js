import { useRouter } from "next/router"

export default function carid(){

    const route = useRouter();

    return (

        <>
        <h1> Car type: {route.query.cars} </h1>
        <h1> Car Number: {route.query.carid} </h1>
        </>

    )


}