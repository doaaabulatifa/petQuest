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
  created_at: string;
  updated_at: string;
}

export interface FilterProps {
  breed?: string;
  species?: string;
  colour?: string;
  age?: string;
  sex?: string;
  location?: string;
  limit?: number;
  offset?: number;
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
  species: string;
  location: string;
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
