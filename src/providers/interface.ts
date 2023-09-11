
export type User = {
    name: string
}
export interface UserProps{
    user: User,
    setUser: (name: User) => void,
}

export interface NameProps {
    name: string,
}

    