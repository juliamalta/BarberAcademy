'use client'

import { Link } from 'lucide-react'

import { withAnimation } from '@/common/hocs'
import { AnimatedTechBackground } from '@/components/animations/background/AnimatedTechBackground'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { AboutProps } from '@/components/sections/AboutUs/AboutUs.types'
import { Button } from '@/components/ui/button'

import FeaturesImg1 from '../../../../public/images/barber.png'

function AboutUs2({ title, text1, text2, about, titlePrimary }: AboutProps) {
    return (
        <section className="relative overflow-hidden py-24" id="sobre">
            <div className="container flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-col justify-center gap-12 sm:w-full md:w-full lg:w-2/3 2xl:w-2/5">
                    <div className="flex flex-col gap-4">
                        <p className="">{titlePrimary}</p>
                        <p className="text-5xl">{title}</p>
                    </div>
                    <div>
                        <p className="text-xl">{text1}</p>
                    </div>
                </div>
                <div className="flex">
                    <img src={FeaturesImg1.src} alt="img" className="w-full rounded-2xl bg-cover" />
                </div>
            </div>
        </section>
    )
}

export default withAnimation(AboutUs2, 'fade-up')
