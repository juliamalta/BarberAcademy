import { CardWorkProps } from '@/components/core/CardPrimary/Card.types'

import imgWork from '../../../../public/images/img2.png'
import Image from 'next/image'
import { CardFeaturesProps } from '@/components/core/CardFeatures/CardFeatures.types'
import { Verifcy } from '@/components/core/Icons/verifcy'
function CardFeatures({ title }: CardFeaturesProps) {
    return (
        <div className="border-color-shady flex items-center border-b-2 pb-3 2xl:pb-5">
            <Verifcy />
            <p className="text-color-shady text-md ml-6 2xl:text-xl">{title}</p>
        </div>
    )
}

export default CardFeatures
