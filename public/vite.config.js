import { defineConfig } from 'vite';
import { resolve } from 'path';
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
        contato: 'contact.html',
        resolve: {
          alias: {
            xlsx: resolve(__dirname, 'node_modules/xlsx/xlsx.js'),
          },
        },
      }
    }
  }
});
