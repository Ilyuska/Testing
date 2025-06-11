
import { Box, CssBaseline } from '@mui/material'
import { products } from './API/fakeAPI'
import ProductCard from './components/ProductCard/ProductCard'
import styles from './App.module.scss'

function App() {
  return (
    <CssBaseline>
      <Box className={styles.cards}>
        {products.map((product, index) => <ProductCard key={product.title + index} title = {product.title} origin = {product.origin} price= {product.price} currency = {product.currency} imageUrl={product.imageUrl}/>)}
      </Box>
     </CssBaseline>
  )
}

export default App
