import { useState } from "react";
import { Product } from "../../../../types";
import { Button } from "../../atoms/Button";
import DiscountInfo from "./DiscountInfo";
import EditProductForm from "./EditProductForm";

interface ProductListProps {
  products: Product[];
  onProductUpdate: (updatedProduct: Product) => void;
}

// 단일 책임 원칙에 따라 분리 가능한 부분:
// 1. 상태 관리 (useState 훅들)
// 2. 제품 아코디언 토글 로직
// 3. 제품 수정 관련 핸들러 함수들
// 4. 할인 관리 관련 핸들러 함수들
// 5. 렌더링 로직

const ProductList = ({ products, onProductUpdate }: ProductListProps) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [openProductIds, setOpenProductIds] = useState<Set<string>>(new Set());

  const toggleProductAccordion = (productId: string) => {
    setOpenProductIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct({ ...product });
  };

  return (
    <div className="space-y-2">
      {products.map((product, index) => (
        <div
          key={product.id}
          data-testid={`product-${index + 1}`}
          className="bg-white p-4 rounded shadow"
        >
          <button
            data-testid="toggle-button"
            onClick={() => toggleProductAccordion(product.id)}
            className="w-full text-left font-semibold"
          >
            {product.name} - {product.price}원 (재고: {product.stock})
          </button>
          {openProductIds.has(product.id) && (
            <div className="mt-2">
              {editingProduct && editingProduct.id === product.id ? (
                <EditProductForm
                  product={product}
                  products={products}
                  onProductUpdate={onProductUpdate}
                  editingProduct={editingProduct}
                  setEditingProduct={setEditingProduct}
                />
              ) : (
                <div>
                  <DiscountInfo product={product} />
                  <Button
                    variant="add"
                    data-testid="modify-button"
                    onClick={() => handleEditProduct(product)}
                  >
                    수정
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
