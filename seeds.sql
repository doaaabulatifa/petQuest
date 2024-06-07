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
CREATE TABLE adoption_requests (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users2(id),
    pet_id INTEGER REFERENCES pets(id),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT,
    telephone VARCHAR(20) NOT NULL,
    age_of_youngest_child INTEGER,
    details_of_other_pets TEXT,
    are_other_pets_neutered BOOLEAN,
    has_secure_outdoor_area BOOLEAN NOT NULL,
    where_will_animal_sleep TEXT,
    will_animal_be_left_alone BOOLEAN,
    other_details TEXT,
    previous_convictions BOOLEAN,
    terms_and_conditions BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
