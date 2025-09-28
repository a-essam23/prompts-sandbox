// Contract definitions for Phase XXX
// This file defines interfaces without implementation

// API Request/Response contracts
export interface CreateUserRequest {
  email: string;
  password: string;
  name?: string;
}

export interface CreateUserResponse {
  id: string;
  email: string;
  name: string | null;
  createdAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string | null;
  };
  expiresIn: number; // seconds
}

// Data model contracts
export interface User {
  id: string;
  email: string;
  passwordHash: string;
  name: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  id: string;
  userId: string;
  token: string;
  refreshToken: string;
  expiresAt: Date;
  createdAt: Date;
}

// Service layer contracts
export interface UserService {
  create(data: CreateUserRequest): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  authenticate(email: string, password: string): Promise<User | null>;
  deactivate(id: string): Promise<void>;
}

export interface AuthService {
  login(credentials: LoginRequest): Promise<LoginResponse>;
  refresh(refreshToken: string): Promise<LoginResponse>;
  logout(token: string): Promise<void>;
  validateToken(token: string): Promise<User | null>;
}

// Error contracts
export interface ApiError {
  code: string;
  message: string;
  field?: string; // For validation errors
  details?: any;
}

export interface ValidationError extends ApiError {
  code: 'VALIDATION_ERROR';
  field: string;
  details: {
    expected: string;
    received: any;
  };
}

export interface AuthError extends ApiError {
  code: 'AUTH_ERROR' | 'INVALID_CREDENTIALS' | 'TOKEN_EXPIRED';
}

// Generic response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: {
    timestamp: string;
    requestId: string;
  };
}

// Database contracts
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
}

export interface Repository<T, K = string> {
  create(data: Omit<T, 'id' | 'createdAt' | 'updatedAt'>): Promise<T>;
  findById(id: K): Promise<T | null>;
  findMany(filter?: Partial<T>): Promise<T[]>;
  update(id: K, data: Partial<T>): Promise<T>;
  delete(id: K): Promise<void>;
}
