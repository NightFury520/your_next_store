import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice : number
}

export const computerProductTotalPrice = ( product : Product) : ProductWithTotalPrice => {
  const basePrice = Number(product.basePrice)
  const discountPercentage = product.discountPercentage
  const totalPrice = 
    discountPercentage ===0?basePrice:basePrice-basePrice*(discountPercentage/100)
  return {
    ...product,
    totalPrice
  }
}