/**
 * ProductCard — displays a single furniture product.
 *
 * Props:
 *   image        (string)  – product image URL
 *   name         (string)  – product name
 *   price        (number)  – price in USD
 *   color        (string)  – colour name / hex
 *   colorHex     (string)  – hex value for the swatch
 *   manufacturer (string)  – brand name
 *   description  (string)  – short blurb
 *
 * All props have **default values** demonstrated below.
 */

const COLOR_MAP = {
    charcoal: '#36454F',
    walnut: '#5C4033',
    'navy blue': '#001f3f',
    natural: '#C4A35A',
    white: '#F5F5F5',
    oak: '#C8AD7F',
};

function ProductCard({
    image = '/images/placeholder.svg',
    name = 'Unknown Furniture',
    price = 0,
    color = 'N/A',
    colorHex,
    manufacturer = 'Generic Co.',
    description = 'No description available.',
}) {
    const isDefault = image === '/images/placeholder.svg';
    const swatch = colorHex || COLOR_MAP[color.toLowerCase()] || '#888';

    return (
        <div className="product-card">
            {/* ── Image ─────────────────────────── */}
            <div className="product-card__img-wrap">
                <img src={image} alt={name} loading="lazy" />
                {isDefault && <span className="product-card__default-badge">Default</span>}
            </div>

            {/* ── Body ──────────────────────────── */}
            <div className="product-card__body">
                <h3 className="product-card__name">{name}</h3>
                <p className="product-card__price">
                    {price === 0 ? 'Price not set' : `$${price.toLocaleString()}`}
                </p>

                <div className="product-card__info">
                    <div className="product-card__info-row">
                        <span className="label">Color</span>
                        <span className="color-swatch" style={{ background: swatch }} />
                        {color}
                    </div>
                    <div className="product-card__info-row">
                        <span className="label">Brand</span>
                        {manufacturer}
                    </div>
                </div>

                <p className="product-card__desc">{description}</p>
            </div>
        </div>
    );
}

/* ─── Default Props (alternative syntax) ─────────────────
   The defaults above via destructuring are the primary
   mechanism, but we also define defaultProps to showcase
   the classic React pattern:                              */
ProductCard.defaultProps = {
    image: '/images/placeholder.svg',
    name: 'Unknown Furniture',
    price: 0,
    color: 'N/A',
    colorHex: undefined,
    manufacturer: 'Generic Co.',
    description: 'No description available.',
};

export default ProductCard;
