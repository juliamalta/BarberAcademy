import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Space_Grotesk, Inter, Manrope } from 'next/font/google'

import './globals.css'
import { Footer } from '@/components/sections/Footer'
import { configs } from '@/configs'
import { cn } from '@/lib/utils'
import Contact from '@/components/sections/Contact/Contact'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})
const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
})

export const metadata: Metadata = configs.metadata

type RootLayoutProps = React.PropsWithChildren

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn('min-h-screen bg-background antialiased', inter.className)}>
                {children}
                <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/bg1.png')" }}>
                    <Contact
                        title={
                            <>
                                <span className="font-bold text-color-flamingo"> Sua tesoura tá parada.</span>
                                Seu potencial não precisa estar.
                            </>
                        }
                        text="Vagas abertas agora. Entra antes que fechem"
                        buttontext="Garantir minha vaga"
                    />
                    <Footer rights="© 2026 Code Creative. Todos os direitos reservados." />
                </div>
            </body>
        </html>
    )
}
