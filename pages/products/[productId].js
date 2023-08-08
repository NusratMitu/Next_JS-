
const ProductDetails = ({Product}) => {
    // when fallback is true
    // const router = useRouter()
    // console.log({router});
    // if(router.isFallback){
    // return  <h1>loading...</h1>
    // }
    return (
      <>
      <h1>Product Detail</h1>
      <h2>{Product.id}. {Product.title}</h2>
      <p>{Product.body}</p>
      </>
    )
  }
  
  export default ProductDetails
   export async function getStaticPaths () {
    // when fallback is true
    //   const response = await fetch(`https://jsonplaceholder.typicode.com/Products`)
    //   const data = await response.json();
      
    //  const paths = data.map(Product => {
    //   return {
    //           params: {ProductId: `${Product?.id}`}
    //   }
    //  })
  
      return {
          paths : [
              {
                  params: {ProductId: '1'}
              },
              
          ], 
          // paths,
          // fallback: false
          // fallback: true
          fallback: 'blocking'
      }
      
   }
  export async function getStaticProps(context) {
      const{ params} = context
  
      const response = await fetch(`https://localhost:4000/Products/${params.ProductId}`)
      const data = await response.json()
      console.log(`Generating page for /Product/${params.ProductId}`);
    if(!data.id){
      return {
        notFound : true
      }
    }
  
      return {
          props: {
              Product: data
          }
      }
  
  }