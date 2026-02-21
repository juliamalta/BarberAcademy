import AboutUs1 from '@/components/sections/AboutUs/AboutUs1'
import { Cards1 } from '@/components/sections/Cards'
import Contact from '@/components/sections/Contact/Contact'
import { HeroSection } from '@/components/sections/hero-section'
import AboutUs2 from '@/components/sections/AboutUs/AboutUs2'
import { Graphic } from '@/components/core/Icons/graphic'
import { School } from '@/components/core/Icons/school'
import { Evolution } from '@/components/core/Icons/evolution'

export default function Home() {
    return (
        <>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/bg1.png')" }}>
                <HeroSection
                    titlePrimary="NAVALHA ACADEMY"
                    title={<>Aprenda absolutamente tudo para se tornar um Barbeiro Profissional</>}
                    desc="O curso que transforma iniciantes em barbeiros requisitados sem precisar de anos de salão pra provar seu valor."
                    button1text="Solicitar Orçamento"
                    button2text="Quero entrar no curso"
                />

                <AboutUs1
                    titlePrimary="Sobre o Code Creative"
                    title="Tudo que você precisa pra virar referência no corte."
                    text1="Venha se tornar um grande profissional"
                />
                <Cards1
                    title="Nossos serviços"
                    desc="Oferecemos soluções completas em tecnologia e design para impulsionar seu negócio"
                    cards={[
                        {
                            icon: <Graphic />,
                            title: 'Alta demanda por serviços especializados',
                            text: 'Com o retorno da cultura da barba, a demanda por serviços de barbearia de alta qualidade aumentou. Os clientes buscam cortes personalizados e precisos, valorizando a habilidade dos barbeiros.',
                            iconBgColor: '#F15B29',
                        },
                        {
                            icon: <School />,
                            title: 'Experiencia & Especialização',
                            text: 'Barbeiros profissionais investem em aprimorar habilidades em cortes de cabelo, barba e cuidados com a pele, diferenciando-se no mercado e justificando preços mais altos.',
                            iconBgColor: '#F15B29',
                        },
                        {
                            icon: <Evolution />,
                            title: 'Crescimento do mercado de beleza masculino',
                            text: 'O mercado de beleza masculina tem crescido rapidamente nos últimos anos, impulsionado pela crescente conscientização dos homens sobre cuidados pessoais e imagem',
                            iconBgColor: '#F15B29',
                        },
                    ]}
                />
            </div>
            <AboutUs2
                titlePrimary="O mestre da navalha"
                title={
                    <>
                        Quem te ensina já viveu{' '}
                        <span className="font-bold text-color-flamingo"> o que você quer alcançar</span>
                    </>
                }
                text1="Desde 2017, na barbearia, desenvolvi habilidades de cortes simples para esculturas meticulosas, buscando elevar a autoestima dos clientes. Compartilho meu conhecimento para formar novos talentos e elevar a excelência do setor. Cada serviço oferecido é uma promessa de qualidade, profissionalismo e cuidado pessoal. Junte-se a mim nessa jornada de transformação para se tornar um grande profissional na área da barbearia."
            />

            <Contact
                title="Sua tesoura tá parada.Seu potencial não precisa estar."
                text="Vagas abertas agora. Entra antes que fechem"
                buttontext="Garantir minha vaga"
            />
        </>
    )
}
