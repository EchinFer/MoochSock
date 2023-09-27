export interface User {
    id: number;
    email: string;
    is_admin: number;
}
export interface Session {
    id: string;
    socketIds: string[];
}

export interface UserDataSession {
    user: User;
    sessionData: Session
}