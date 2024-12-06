import ExcelJS from 'exceljs';

// Function to display orders (this part remains the same)
function displayOrders() {
  let orders = JSON.parse(localStorage.getItem("pedidos"));

  if (orders && orders.length > 0) {
    let orderList = document.getElementById("order-list");
    let orderListHtml = "";

    orders.forEach((order) => {
      orderListHtml += `
            <li class="order-card">
              <h3>Pedido: ${order.id}</h3>
              <p>Endereço:</p>
              <ul>
                <li>Cliente: ${order.address.name} ${order.address.surname}</li>
                <li>Rua: ${order.address.address}, ${order.address.address_2}</li>
                <li>Cidade: ${order.address.city}</li>
                <li>UF: ${order.address.UF}</li>
                <li>CEP: ${order.address.zip}</li>
              </ul>
              <p>Itens:</p>
              <ul>
          `;

      order.items.forEach((item) => {
        orderListHtml += `
              <li>
                <p>Codigo Produto: ${item.codigoProduto}</p>
                <p>Produto: ${item.tituloProduto}</p>
                <p>Quantidade: ${item.quantity}</p>
                <p>Preço: R$ ${item.preco}</p>
              </li>
            `;
      });

      orderListHtml += `
              </ul>
              <p>Valor Total do Pedido: R$ ${order.totalValue}</p>
            </li>
          `;
    });

    orderList.innerHTML = orderListHtml;
  } else {
    console.log("No orders found");
  }
}

// Call the displayOrders function
displayOrders();

// Function to export orders to Excel using ExcelJS
function exportToExcel() {
  const pedidos = JSON.parse(localStorage.getItem("pedidos"));
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Orders');

  // Add headers
  worksheet.addRow(["ID", "E-mail", "Name", "Surname", "Phone", "CPF", "Address", "Zip", "Number", "Address 2", "Neighborhood", "City", "UF", "Item Code", "Item Title", "Item Price", "Item Description", "Item Category", "Item Classification", "Item Home Display", "Item Quantity", "Total Value"]);

  // Add data rows
  pedidos.forEach((pedido) => {
    pedido.items.forEach((item) => {
      worksheet.addRow([
        pedido.id,
        pedido.address["e-mail"],
        pedido.address.name,
        pedido.address.surname,
        pedido.address.phone,
        pedido.address.CPF,
        pedido.address.address,
        pedido.address.zip,
        pedido.address.number,
        pedido.address.address_2,
        pedido.address.neighborhood,
        pedido.address.city,
        pedido.address.UF,
        item.codigoProduto,
        item.tituloProduto,
        item.preco,
        item.descricao,
        item.categoriaProduto,
        item.classificacaoProduto,
        item.exibirHome,
        item.quantity,
        pedido.totalValue,
      ]);
    });
  });

  // Save the Excel file
  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "orders.xlsx";
    link.click();
  }).catch((err) => {
    console.error("Error saving Excel file", err);
  });
}

// Add an event listener to the button to trigger the export
const exportButton = document.getElementById("export-button");
exportButton.addEventListener("click", exportToExcel);
