import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const {params} = router?.query
  console.log({params});
  
  return (
    <div>
        <h1>Docs home page</h1>
    </div>
  )
}

export default Doc