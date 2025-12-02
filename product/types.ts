export interface Product {
  id: number
  name: string
  price: number
  discount: number | null
  media: string | null
  description: string | null
  count: number
}