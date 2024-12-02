import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        adm: 'src/adm.html',
        checkout: 'src/checkout.html',
        payment: 'src/payment.html',
        product: 'src/product.html',
        products: 'src/products.html',
        aboutme: 'src/aboutme.html',
        contato: 'src/contato.html'
      }
    }
  }
});
