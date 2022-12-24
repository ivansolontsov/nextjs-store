// import React from 'react'

// import { useGetOneProductByIdQuery } from '../../rtk/api/dummyjson'

// type Props = {}

// const ProductDetail = (props: Props) => {

//   const { data, error, isLoading } = useGetOneProductByIdQuery(1)
//   if (error) {
//     return (
//       <h1>ERROR</h1>
//     )
//   }
//   if (isLoading) {
//     return (
//       <h1>Loading...</h1>
//     )
//   }

//   if (data) {
//     return (
//       <main style={{ width: '500px', margin: 'auto auto' }}>
//         <h3>{data.id}</h3>
//         <h3>{data.title}</h3>
//         <h3>{data.description}</h3>
//         <h3>{data.price}</h3>
//         <h3>{data.brand}</h3>
//         <h3>{data.category}</h3>
//         <h3>{data.thumbnail}</h3>
//       </main>
//     )
//   }
// }

// export default ProductDetail