import Link from "next/link";

const ProductList = ({products}) => {
    return (
      <>
      <h1>list of products</h1>
      {
          products.map((post) =>
          <div key={post.id}>
            <h2>  
                <Link href={`/products/${post.id}`}>
                {post.id} :{post.title}
                </Link>
            </h2>
           
              <hr />
          </div>
          )
      }
      
      </>
    )
  }
  
  export default ProductList;
  
  export async function getStaticProps () {
      const response = await fetch(`http://localhost:4000/products`)
      const data = await response.json();
      return {
          props: {
              products: data
          }
      }
  }