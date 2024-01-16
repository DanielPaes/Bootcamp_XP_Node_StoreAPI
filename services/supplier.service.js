import SupplierRepository from "../repositories/supplier.repository.js";

async function createSupplier(supplier) {
  return await SupplierRepository.inserSupplier(supplier);
}

async function getSuppliers() {
  return SupplierRepository.getSuppliers();
}

async function getSupplier(id) {
  return SupplierRepository.getSupplier(id);
}

async function deleteSupplier(id) {
  await SupplierRepository.deleteSupplier(id);
}

async function updateSupplier(supplier) {
  return await SupplierRepository.updateSupplier(supplier);
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  deleteSupplier,
  updateSupplier,
};
