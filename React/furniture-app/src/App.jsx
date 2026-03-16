import ProductCard from './components/ProductCard';
import './App.css';

/* ────────────────────────────────────────────────────────
   Products WITH full props
   ──────────────────────────────────────────────────────── */
const products = [
  {
    image: '/images/office_chair.png',
    name: 'ErgoFlex Pro Chair',
    price: 549,
    color: 'Charcoal',
    manufacturer: 'Herman Miller',
    description: 'Breathable mesh back with lumbar support, adjustable armrests, and a polished chrome base.',
  },
  {
    image: '/images/executive_desk.png',
    name: 'Walnut Executive Desk',
    price: 1299,
    color: 'Walnut',
    manufacturer: 'Steelcase',
    description: 'Solid walnut workspace with integrated cable management and soft-close drawers.',
  },
  {
    image: '/images/velvet_sofa.png',
    name: 'Luxe Velvet Sofa',
    price: 1849,
    color: 'Navy Blue',
    manufacturer: 'West Elm',
    description: 'Three-seater velvet sofa with hand-finished brass legs and feather-blend cushions.',
  },
  {
    image: '/images/oak_bookshelf.png',
    name: 'Nordic Oak Shelf',
    price: 429,
    color: 'Natural',
    manufacturer: 'IKEA',
    description: 'Scandinavian-inspired 6-tier bookshelf in sustainably sourced European oak.',
  },
];

/* ────────────────────────────────────────────────────────
   Products WITHOUT some props → defaults will kick in
   ──────────────────────────────────────────────────────── */
const productsWithDefaults = [
  {
    /* Only name and price supplied — image, color,
       manufacturer, and description will use defaults */
    name: 'Mystery Armchair',
    price: 399,
  },
  {
    /* Completely empty — every prop uses its default value */
  },
];

function App() {
  return (
    <div className="app">
      {/* ── Hero ─────────────────────────── */}
      <header className="hero">
        <span className="hero-badge">✦ Experiment 6 — React Props</span>
        <h1>Pearl's Furniture Emporium</h1>
        <p>
          Premium commercial furniture — demonstrating React component
          <strong> props</strong> and <strong>default values</strong>.
        </p>
      </header>

      {/* ── Full-prop products ───────────── */}
      <section>
        <div className="section-heading">
          <h2>Featured Collection</h2>
          <p>Products rendered with all props supplied</p>
        </div>

        <div className="product-grid">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      {/* ── Default-prop products ────────── */}
      <section>
        <div className="section-heading">
          <h2>Default Values Demo</h2>
          <p>These cards have missing props — watch the defaults fill in</p>
        </div>

        <div className="product-grid">
          {productsWithDefaults.map((p, i) => (
            <ProductCard key={`def-${i}`} {...p} />
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────── */}
      <footer className="footer">
        © 2026 Pearl's Furniture Emporium · Advanced Web Technologies Lab
      </footer>
    </div>
  );
}

export default App;
