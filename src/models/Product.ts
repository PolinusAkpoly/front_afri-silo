import { Category } from "./Category"

export interface Product {
    _id?: string
    name: string 
    slug?: string
    imageUrl: string
    description?: string 
    category: Category
    updated_at: Date | string | null
    created_at: Date | string | null
}