export interface Service {
    _id?: string
    icon: string
    imageUrl: string
    title: string
    description: string
    link: string
    slug: string
    updated_at: Date | string | null
    created_at: Date | string | null
}