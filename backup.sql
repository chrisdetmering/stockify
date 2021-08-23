CREATE DATABASE guidance_requests;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id uuid DEFAULT uuid_generate_v4(), 
    email VARCHAR NOT NULL, 
    password VARCHAR NOT NULL
)

CREATE TABLE users (
    id uuid DEFAULT uuid_generate_v4(), 
    username VARCHAR NOT NULL,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL, 
    password_digest VARCHAR NOT NULL,
    cash bigint DEFAULT 100000
)