import { Component } from 'react'
import Products from './components/products'
import Nav from './components/nav'

class App extends Component {

  state = {
    products: [
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
        value: 0
      },
      {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in white.",
        price: '$35',
        color: 'Aspen White',
        value: 0
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg',
        imageAlt: "Front of men's Basic Tee in dark gray.",
        price: '$35',
        color: 'Charcoal',
        value: 0
      },
      {
        id: 4,
        name: 'Artwork Tee',
        href: '#',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg',
        imageAlt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
        price: '$35',
        color: 'Iso Dots',
        value: 0
      },
    ]
  }

  handleAddCart = (product) => {
    const updatedProducts = this.state.products.map((p) => {
      if (p.id === product.id) {
        return { ...p, value: p.value + 1 };
      }
      return p;
    });
    this.setState({ products: updatedProducts });
  }

  handleRemoveCart = (product) => {
    const updatedProducts = this.state.products.map((p) => {
      if (p.id === product.id) {
        return { ...p, value: 0 };
      }
      return p;
    });
    this.setState({ products: updatedProducts });
  }

  render() { 
    return (
      <>
        <Nav totalAddCart={this.state.products.filter(p => p.value > 0).length} />
        <Products 
          products={this.state.products} 
          onAddCart={this.handleAddCart}
          onRemoveCart={this.handleRemoveCart}
        />
      </>
    );
  }
}
 
export default App;