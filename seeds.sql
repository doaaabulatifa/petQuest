-- Create Users Table
CREATE TABLE Users2 (
    id SERIAL PRIMARY KEY,
    clerk_id TEXT,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    location VARCHAR(255),
    profile_picture VARCHAR(255),
    bio TEXT
);

-- Create Pets Table
CREATE TABLE Pets (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(255) NOT NULL,
    breed VARCHAR(255),
    age INT NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255),
    status text DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Comments Table
CREATE TABLE Comments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users2(id) ON DELETE CASCADE,
    pet_id INT REFERENCES Pets(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Saved_Pets Table
CREATE TABLE Saved_Pets (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users2(id) ON DELETE CASCADE,
    pet_id INT REFERENCES Pets(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, pet_id)
);


-- Create Favourite Table
CREATE TABLE Likes (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users2(id) ON DELETE CASCADE,
    pet_id INT REFERENCES Pets(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, pet_id)
);

-- Create Adoption_Requests Table
CREATE TABLE Adoption_Requests (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users2(id) ON DELETE CASCADE,
    pet_id INT REFERENCES Pets(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'pending',
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);