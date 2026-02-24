'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { AuroraText } from '@/components/magicui/aurora-text'
import { HyperText } from '@/components/magicui/hyper'
import { InteractiveHoverButton } from '@/components/magicui/Interactive-HoverButton'
import { HeroProps } from '@/components/sections/hero-section/hero-section.types'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Button } from '@/components/ui/button'
import { SpotlightBackground } from '@/components/ui/spotlight'
import Image from 'next/image'
import videoteste from '../../../../public/images/videoteste.png'
import logo from '../../../../public/images/logo.png'
export function HeroSection({ title, desc, button1text, button2text, titlePrimary }: HeroProps) {
    return (
        <>
            <section id="inicio" className="mx-auto bg-cover bg-center px-2 py-16 sm:py-24">
                <div className="container flex flex-col gap-8">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="flex flex-col items-center justify-center gap-6">
                            <div className="flex items-start">
                                <Link className="block max-w-max" href="/">
                                    <Image width={172} height={73} src={logo} alt="logo" />
                                </Link>
                            </div>

                            <h1 className="font-regular w-full text-center text-3xl text-white md:text-6xl 2xl:w-1/2">
                                {title}
                            </h1>
                            <p className="text-md text-center text-color-shady sm:text-base 2xl:w-2/5">{desc}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-full sm:w-2/3">
                                <img src={videoteste.src} alt="img" className="w-full rounded-2xl bg-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button variant="herobuttonsecondary" size="hero" asChild className="text-sm">
                                <Link href="#trabalho"> {button2text}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
