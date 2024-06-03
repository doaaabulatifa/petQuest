"use client";

import { useState } from "react";
import Image from "next/image";

import { generatePetImageUrl } from "../utils";
import { PetCardProps, PetProps } from "../types";
import CustomButton from "./CustomButton";
import PetDetails from "./PetDetails";

interface PetCardProps {
  pet: PetProps;
}

const PetCard = ({ pet }: PetCardProps) => {
  const { name, breed, age, location, size, colour, sex } = pet;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pet-card group">
      <div className="pet-card__content">
        <h2 className="pet-card__content-title">
          {name} - {breed}
        </h2>
      </div>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={generatePetImageUrl(pet)} alt='pet breed' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>
              Age: {age} years
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>
              Location: {location}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <p className='text-[14px] leading-[17px]'>
              Size: {size}
            </p>
          </div>
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
