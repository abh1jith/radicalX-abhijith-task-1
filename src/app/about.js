import { useRouter } from "next/router";

function About(){
    const router = useRouter();
    // router.query.id
    return <h1>About page and ID is { router.query.id }</h1>
}

export default About;