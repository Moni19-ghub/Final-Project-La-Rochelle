import { useState } from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import Newsletter from '../components/Newsletter'

function Home() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-forest">
          Welcome to La-Rochelle!
        </h1>

        <p className="text-forest mt-3">
          Your new favourite stationery store.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <div className="flex-1">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>

          <input
            id="product-search"
            type="text"
            placeholder="Search for stationery..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-soft-green bg-white text-forest rounded-lg px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
          />
        </div>

        <div>
          <label htmlFor="category-filter" className="sr-only">
            Filter by category
          </label>

          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border border-soft-green bg-white text-forest rounded-lg px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2"
          >
            <option value="All">All Categories</option>
            <option value="Pens & Markers">Pens & Markers</option>
            <option value="Notebooks">Notebooks</option>
            <option value="Desk Accessories">Desk Accessories</option>
            <option value="Art Supplies">Art Supplies</option>
          </select>
        </div>

      </div>

      <section aria-labelledby="products-heading">

        <h2
          id="products-heading"
          className="text-2xl font-bold text-forest mb-6"
        >
          Our Products
        </h2>

        <p className="sr-only" role="status" aria-live="polite">
          {filteredProducts.length} products found.
        </p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <p
            role="status"
            aria-live="polite"
            className="text-center text-forest py-12"
          >
            No products found. Try another search!
          </p>
        )}

      </section>

      <Newsletter />

    </div>
  )
}

export default Home