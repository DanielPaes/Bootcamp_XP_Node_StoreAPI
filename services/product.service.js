import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from "../repositories/sale.repository.js";

async function createProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.inserProduct(product);
  }
  throw new Error("O supplier não existe.");
}

async function getProducts() {
  return ProductRepository.getProducts();
}

async function getProduct(id) {
  return ProductRepository.getProduct(id);
}

async function deleteProduct(id) {
  const sales = await SaleRepository.getSaleByProductId(id);
  if (sales.length > 0) {
    throw new Error("Não é possível excluir o produto pois ele já foi vendido");
  }
  await ProductRepository.deleteProduct(id);
}

async function updateProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.updateProduct(product);
  }
  throw new Error("O supplier não existe.");
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};
