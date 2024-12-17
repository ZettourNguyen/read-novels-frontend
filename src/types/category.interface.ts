export type Category = {
    id: number
    name: string
    description: string | null
}

export interface IUpdateCategory {
    id: number
    userId: number // id check người update có thẩm quyền hay không
    name?: string
    description?: string  
}