import CardFeatures from '@/components/core/CardFeatures/CardFeatures'
import { FeaturesProps } from '@/components/sections/Features/Features.types'

import features12 from '../../../../public/images/features.png'
import { Button } from '@/components/ui/button'
import { Link } from '@radix-ui/react-navigation-menu'
function Features1({ title, text1, features }: FeaturesProps) {
    return (
        <section id="features">
            <div>
                <div className="container flex flex-col gap-12 py-24">
                    <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row 2xl:gap-16">
                        <div className="flex flex-col gap-10 lg:w-2/3">
                            <div className="flex flex-col items-center gap-6">
                                <div className="w-full">
                                    <p className="text-center text-4xl font-semibold text-white">{title}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-8">
                                <p className="text-center text-base font-normal text-color-shady">{text1}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-8 lg:flex-row">
                        <div className="mx-auto flex w-full items-center justify-center sm:w-2/3 md:w-1/2 lg:w-2/5">
                            <img src={features12.src} alt="img" className="w-full rounded-2xl bg-cover" />
                        </div>
                        <div className="flex flex-col justify-center gap-8">
                            {features.map((features, index) => (
                                <CardFeatures key={index} title={features.title} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features1
