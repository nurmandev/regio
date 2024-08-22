import React, { createContext, useState, useContext, useEffect } from "react";
import productsService from "../services/product";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await productsService.getProductsList();
      setProducts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await productsService.createProduct(data);
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createFavoriteProduct = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await productsService.createFavoriteProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteFavoriteProduct = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await productsService.deleteFavoriteProduct(id);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchProduct = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await productsService.getProduct(id);
      setProduct(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProduct = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await productsService.updateProduct(id, data);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? response.data : product
        )
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const partialUpdateProduct = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await productsService.partialUpdateProduct(id, data);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? response.data : product
        )
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await productsService.deleteProduct(id);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createProductImage = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      await productsService.createProductImage(id, data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProductImage = async (id, image_pk) => {
    setLoading(true);
    setError(null);
    try {
      await productsService.deleteProductImage(id, image_pk);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        product,
        loading,
        error,
        fetchProducts,
        createProduct,
        createFavoriteProduct,
        deleteFavoriteProduct,
        fetchProduct,
        updateProduct,
        partialUpdateProduct,
        deleteProduct,
        createProductImage,
        deleteProductImage,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
