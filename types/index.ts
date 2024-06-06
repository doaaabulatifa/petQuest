import { MouseEventHandler } from "react";

export interface PetProps {
  user_id: number;
  name: string;
  species: string;
  breed: string;
  colour?: string;
  size?: string;
  sex?: string;
  age: number;
  location: string;
  description: string;
  image_url: string;
  status: string;
  // created_at: string;
  // updated_at: string;
}

export interface PetMoreProps {
  name: string;
  species: string;
  breed: string;
  age: number;
  location: string;
  description: string;
  status: string;
  image_url: string;
}

export interface FilterProps {
  species?: string;
  age?: string;
  location?: string;
  limit?: number;
  offset?: number;
  breed?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface PetCardProps {
  name: string;
  breed: string;
  age: number;
  location: string;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  value: string;
  title: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchBreedProps {
  breed: string;
  setBreed: (breed: string) => void;
}
