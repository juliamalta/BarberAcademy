import { CardProps } from '@/components/core/CardPrimary/Card.types'

function CardPrimary({ text, icon, title }: CardProps) {
    return (
        <div className="h-90 hover:border-color-flamingo rounded-xl bg-black bg-opacity-25 shadow-sm transition-transform hover:scale-105">
            <div>
                <div className="flex w-full flex-col items-center gap-5 rounded-lg p-12">
                    <div className="flex size-11 items-center justify-center rounded-xl">{icon}</div>
                    <div>
                        <h1 className="text-lg font-semibold text-white">{title}</h1>
                    </div>
                    <div className="w-full">
                        <p className="text-sm font-normal text-white">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPrimary
