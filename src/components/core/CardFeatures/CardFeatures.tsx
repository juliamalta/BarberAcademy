import Image from 'next/image'

import { CardFeaturesProps } from '@/components/core/CardFeatures/CardFeatures.types'
import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'
import { Verifcy } from '@/components/core/Icons/verifcy'

import imgWork from '../../../../public/images/img2.png'
function CardFeatures({ title }: CardFeaturesProps) {
    return (
        <div className="border-color-shady flex items-center border-b-2 pb-3 2xl:pb-5">
            <Verifcy />
            <p className="text-md text-color-shady ml-6 2xl:text-xl">{title}</p>
        </div>
    )
}

export default CardFeatures
