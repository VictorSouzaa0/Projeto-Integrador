import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        adm: 'adm.html',
        checkout: 'checkout.html',
        payment: 'payment.html',
        product: 'product.html',
        products: 'products.html',
        aboutme: 'aboutme.html',
        contato: 'contato.html'
      }
    }
  }
});
