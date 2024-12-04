
// Aguarda o carregamento completo do DOM
import {shop} from "./functions.js";
let sacolaCompras = JSON.parse(localStorage.getItem("listaCompras"))
let totalValue = parseFloat(localStorage.getItem("totalValue"));
console.log(totalValue)
 
const price = document.querySelector('.total.container-flex:nth-child(1) h3:nth-child(2)');
      price.innerHTML = `R$ ${totalValue.toFixed(2)}`;
 
let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null){ /* Criando uma lista de pedidos vazia*/
    pedidos = []
}
 
const shopBtn = document.querySelector("button.checkout_btn")
shopBtn.addEventListener("click",() => {
    shop(pedidos);
})
document.addEventListener('DOMContentLoaded', () => {
    // Recupera os dados do localStorage com valores padrão se null
    const subtotal = parseFloat(localStorage.getItem('subtotal')) || 0;
    const frete = parseFloat(localStorage.getItem('frete')) || 0;
    const totalCarrinho = parseFloat(localStorage.getItem('totalCarrinho')) || subtotal;
  
    // Atualiza a interface apenas se os elementos existirem
    const subtotalElement = document.getElementById('subtotal');
    const freteElement = document.getElementById('frete');
    const totalCarrinhoElement = document.getElementById('totalCarrinho');
  
    if (subtotalElement) subtotalElement.innerText = `R$ ${subtotal.toFixed(2)}`;
    if (freteElement) freteElement.innerText = `R$ ${frete.toFixed(2)}`;
    if (totalCarrinhoElement) totalCarrinhoElement.innerText = `R$ ${(subtotal + frete).toFixed(2)}`;
  
    let pedidos = JSON.parse(localStorage.getItem("pedidos")) || []; // Lista de pedidos vazia, se não existir
  
    const shopBtn = document.querySelector("button.checkout_btn");
    if (shopBtn) {
      shopBtn.addEventListener("click", () => {
        shop(pedidos);
      });
    }
  });