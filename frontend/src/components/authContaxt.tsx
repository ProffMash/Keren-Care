import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'patient' | 'doctor';
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => void;
    register: (name: string, email: string, _password: string, role: 'patient' | 'doctor') => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string) => {
        // Simulate authentication
        const mockUser: User = {
            id: '1',
            name: 'John Doe',
            email: email,
            role: 'patient'
        };
        console.log('User logged in:', mockUser);
        setUser(mockUser);
    };

    const register = (name: string, email: string, _password: string, role: 'patient' | 'doctor') => {
        // Simulate registration
        const mockUser: User = {
            id: Date.now().toString(),
            name,
            email,
            role
        };
        console.log('User registered:', { name, email, role });
        setUser(mockUser);
    };

    const logout = () => {
        console.log('User logged out');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
