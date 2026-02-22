'use client'

import { withAnimation } from '@/common/hocs'
import { AboutProps } from '@/components/sections/AboutUs/AboutUs.types'

function AboutUs1({ title, text1, text2 }: AboutProps) {
    return (
        <section className="relative overflow-hidden" id="sobre">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row 2xl:gap-16">
                <div className="flex flex-col gap-10 lg:w-2/3">
                    <div className="flex flex-col items-center gap-6">
                        <div className="w-full 2xl:w-2/4">
                            <p className="text-center text-4xl font-semibold text-white">{title}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <p className="text-center text-base font-normal text-color-shady">{text1}</p>
                        <p className="text-base font-normal text-color-storm">{text2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withAnimation(AboutUs1, 'fade-up')
