import { MouseEventHandler } from "react";

export interface PetProps {
  name: string;
  species: string;
  breed: string;
  age: number;
  colour: string;
  sex: string;
  location: string;
  size: string; // e.g., small, medium, large
}

export interface FilterProps {
  breed?: string;
  species?: string;
  colour?: string;
  age?: string;
  sex?: string;
  location?: string;
  limit?: number;
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
  title: string;
  value: string;
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
