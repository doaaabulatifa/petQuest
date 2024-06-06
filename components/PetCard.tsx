// components/PetCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { PetProps } from "../types";
import CustomButton from "./CustomButton";
import PetDetails from "./PetDetails";

interface PetCardProps {
  pet: PetProps;
}

const PetCard = ({ pet }: PetCardProps) => {
  const { name, breed, age, location, size, colour, sex, image_url, description, status, species, user_id } = pet;

  const [isOpen, setIsOpen] = useState(false);

  // Fallback image URL in case image_url is invalid or null
  const validImageUrl = image_url || "/path/to/fallback/image.jpg";

  return (
    <div className="pet-card group">
      <div className="pet-card__content">
        <h2 className="pet-card__content-title">
          {name} - {breed}
        </h2>
      </div>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={image_url} alt='pet breed' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>
              Age: {age} years
            </p>
            <p className='text-[14px] leading-[17px]'>
              Location: {location}
            </p>
          </div>
          {/* <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>
              Location: {location}
            </p>
            <p className='text-[14px] leading-[17px]'>
              Colour: {colour}
            </p>
          </div> */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>
              Species: {species}
            </p>
            <p className='text-[14px] leading-[17px]'>
              Sex: {sex}
            </p>
          </div>
          {/* <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>
              Description: {description}
            </p>
            <p className='text-[14px] leading-[17px]'>
              Status: {status}
            </p>
          </div> */}
        </div>

        <div className="pet-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <PetDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} pet={pet} />
    </div>
  );
};

export default PetCard;
