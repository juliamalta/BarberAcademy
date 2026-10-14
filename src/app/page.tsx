import { Evolution } from '@/components/core/Icons/evolution'
import { Graphic } from '@/components/core/Icons/graphic'
import { School } from '@/components/core/Icons/school'
import AboutUs1 from '@/components/sections/AboutUs/AboutUs1'
import AboutUs2 from '@/components/sections/AboutUs/AboutUs2'
import { Cards1, Cards2 } from '@/components/sections/Cards'
import Contact from '@/components/sections/Contact/Contact'
import Faq1 from '@/components/sections/Faqs/Faq1'
import Features1 from '@/components/sections/Features/Features1'
import { HeroSection } from '@/components/sections/hero-section'

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
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/bg1.png')" }}>
                <Features1
                    title="O que você vai aprender do zero"
                    text1="Cada módulo foi pensado pra te levar do começo ao corte profissional sem enrolação."
                    features={[
                        { title: 'Técnicas profissionais de cortes de cabelo e barba' },
                        { title: 'Como aplicar as técnicas e começar a ser um profissional nessa área' },
                        { title: 'Aulas presenciais com ambiente profissional' },
                        { title: 'Divididas em 15 aulas' },
                        { title: 'Certificado de Conclusão do Curso de Barbeiro Profissional' },
                        { title: 'Postura no Trabalho' },
                        { title: 'Técnicas de fidelização' },
                        { title: 'Técnicas de venda' },
                    ]}
                />
                <Cards2
                    title="O que eles dizem?"
                    cards={[
                        {
                            text: 'Entrei sem saber segurar uma máquina direito. Em três semanas já tava fazendo fade nos amigos e cobrando por isso. O método é direto, sem papo furado.',
                        },
                        {
                            text: 'Tentei aprender pelo YouTube por meses e não evoluía. No curso, tive retorno na hora. Ver o erro e corrigir com o instrutor do lado muda tudo.',
                        },
                        {
                            text: 'Já tô atendendo clientes fixos. O módulo de precificação foi o que mais me surpreendeu — não esperava aprender a parte de negócio também.',
                        },
                        {
                            text: 'Em dois meses saí de zero pra ter agenda cheia nos fins de semana. Isso mudou minha renda de verdade.',
                        },
                    ]}
                />
                <Faq1
                    title={<>Perguntas frequentes</>}
                    description="Navegue pelos tópicos para encontrar a resposta que você precisa.Se não encontrou o que busca, entre em contato com nossa equipe."
                    faqs={[
                        {
                            title: 'Quais são os tópicos principais que serão abordados nas aulas práticas do curso de barbeiro?',
                            answer: 'Nosso processo tem 5 etapas: 1) Briefing e análise, 2) Design e prototipação, 3) Desenvolvimento, 4) Testes e revisões, 5) Entrega e treinamento. O cliente acompanha todo o processo.',
                            accordion: false,
                        },
                        {
                            title: 'Quais são os tópicos principais que serão abordados nas aulas práticas do curso de barbeiro?',
                            answer: 'Sim! Atendemos presencialmente Ipatinga, Timóteo, Coronel Fabriciano, Santana do Paraíso e toda região metropolitana do Vale do Aço. Também trabalhamos de forma remota para clientes de outras cidades de Minas Gerais e Brasil.',
                            accordion: true,
                        },
                        {
                            title: 'Quais são os tópicos principais que serão abordados nas aulas práticas do curso de barbeiro?',
                            answer: 'Para aplicativos: React Native, desenvolvimento nativo iOS/Android. Para web: React, Next.js, Node.js. Design: Figma, Adobe Creative Suite. Banco de dados: Firebase e MongoDB. Mas sempre utilizamos as tecnologias mais atuais e adequadas para cada projeto.',
                            accordion: true,
                        },
                        {
                            title: 'Quais são os tópicos principais que serão abordados nas aulas práticas do curso de barbeiro?',
                            answer: 'Sim! Todo projeto inclui 30 dias de suporte gratuito após entrega. Oferecemos planos de suporte mensal incluindo: correção de bugs, atualizações de segurança, backup automático e suporte técnico prioritário via WhatsApp',
                            accordion: true,
                        },
                    ]}
                />
            </div>
        </>
    )
}
