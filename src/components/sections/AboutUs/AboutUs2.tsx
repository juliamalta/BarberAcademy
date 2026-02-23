'use client'

import { withAnimation } from '@/common/hocs'
import { AboutProps } from '@/components/sections/AboutUs/AboutUs.types'
import { Button } from '@/components/ui/button'

import FeaturesImg1 from '../../../../public/images/barber.png'

function AboutUs2({ title, text1, titlePrimary }: AboutProps) {
    return (
        <section className="container relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" id="sobre">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
                <div className="flex flex-col justify-center gap-6 text-center sm:w-full lg:w-2/3 lg:text-left 2xl:w-2/5">
                    <p className="text-lg font-semibold text-primary">{titlePrimary}</p>
                    <p className="text-4xl font-bold sm:text-5xl">{title}</p>
                    <p className="mt-4 text-base sm:text-xl">{text1}</p>
                    <div className="mt-6">
                        <Button variant="herobuttonsecondary" size="hero" asChild className="text-sm">
                            <a href="#contato">Estou interessado</a>
                        </Button>
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
