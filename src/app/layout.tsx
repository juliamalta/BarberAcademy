import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Space_Grotesk, Inter, Manrope } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/sections/Footer'
import { configs } from '@/configs'
import { cn } from '@/lib/utils'

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
                <Footer rights="© 2026 Code Creative. Todos os direitos reservados." />
            </body>
        </html>
    )
}
