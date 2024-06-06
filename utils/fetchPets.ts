// utils/fetchPets.ts
import pool from './db';
import { FilterProps } from '../types';
import { petSpecies } from '../constants';

export async function fetchPets(filters: FilterProps) {
  const { breed, colour, age, sex, location, limit = 10, offset = 0 } = filters;

  const query = `
    SELECT user_id, name, species, breed, age, location, description, image_url, status, created_at, updated_at
    FROM pets
    WHERE ($1::text IS NULL OR breed ILIKE $1)
      AND ($2::text IS NULL OR colour ILIKE $2)
      AND ($3::text IS NULL OR age::text ILIKE $3)
      AND ($4::text IS NULL OR sex ILIKE $4)
      AND ($5::text IS NULL OR location ILIKE $5)
    LIMIT $6 OFFSET $7;
  `;

  const values = [
    breed ? `%${breed}%` : null,
    colour ? `%${colour}%` : null,
    age ? `${age}` : null,
    sex ? `%${sex}%` : null,
    location ? `%${location}%` : null,
    limit,
    offset,
  ];

  try {
    const { rows } = await pool.query(query, values);
    return rows;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
}
