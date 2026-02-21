import Link from 'next/link'

import logo from '../../../../public/images/logo.png'
import { FooterProps } from './Footer.types'
import Image from 'next/image'

function Footer({ rights }: FooterProps) {
    return (
        <section id="footer" className="overflow-hidden bg-color-wood">
            {/* Copyright and Social Media Links */}
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="py-12">
                        <div className="items-center text-center">
                            <p className='text-center items-center text-white'>navalha acadamy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
