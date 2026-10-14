import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, icon, title }: CardProps) {
    return (
        <div className="h-90 rounded-xl bg-black bg-opacity-25 shadow-sm transition-transform hover:scale-105 hover:border-color-flamingo">
            <div>
                <div className="flex w-full flex-col items-center gap-5 rounded-lg p-8 2xl:p-12">
                    <div className="flex size-11 rounded-xl">{icon}</div>
                    <div>
                        <h1 className="text-sm font-semibold text-white 2xl:text-base">{title}</h1>
                    </div>
                    <div className="w-full">
                        <p className="text-sm font-normal text-color-shady">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPrimary
