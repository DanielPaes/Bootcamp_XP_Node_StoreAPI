import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";

async function createProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplier_id)) {
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
  await ProductRepository.deleteProduct(id);
}

async function updateProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplier_id)) {
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
