CREATE DATABASE guidance_requests;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id uuid DEFAULT uuid_generate_v4(), 
    email VARCHAR NOT NULL, 
    password VARCHAR NOT NULL
)