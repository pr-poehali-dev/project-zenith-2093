import { Button } from "@/components/ui/button"
import { Package, Layers, TreePine, Truck, ChevronDown } from "lucide-react"
import { WorldMap } from "@/components/world-map"
import { experiences } from "@/lib/experience-data"
import type { Experience } from "@/lib/experience-data"

interface CatalogSectionProps {
  selectedExperience: Experience | null
  setSelectedExperience: (exp: Experience | null) => void
  selectedFeature: number
  setSelectedFeature: (i: number) => void
  imageFade: boolean
  setImageFade: (v: boolean) => void
  setAutoRotationKey: (fn: (prev: number) => number) => void
  openFaqIndex: number | null
  setOpenFaqIndex: (i: number | null) => void
}

export function CatalogSection({
  selectedExperience,
  setSelectedExperience,
  selectedFeature,
  setSelectedFeature,
  imageFade,
  setImageFade,
  setAutoRotationKey,
  openFaqIndex,
  setOpenFaqIndex,
}: CatalogSectionProps) {
  const features = [
    {
      title: "Хвойные породы",
      desc: "Прочные, содержат смолы — естественная защита от влаги. Для несущих конструкций и каркасов.",
      icon: TreePine,
      image: "/drone.png",
    },
    {
      title: "Лиственные породы",
      desc: "Мягкие породы для отделки, мебели и изготовления деталей интерьера.",
      icon: Layers,
      image: "/real-time-satellite.png",
    },
    {
      title: "Доски и бруски",
      desc: "Доски (толщина до 10 см) и бруски (ширина ≤ двойной толщины) — для любых задач.",
      icon: Package,
      image: "/biodiversity-tracking.png",
    },
    {
      title: "Брус строительный",
      desc: "Ширина более 10 см. Применяется в несущих конструкциях, перекрытиях, стропилах.",
      icon: Truck,
      image: "/deforestation-detect.png",
    },
  ]

  const faqs = [
    {
      question: "Какой минимальный объём для оптовой поставки?",
      answer:
        "Минимальный объём заказа — от 1 куб. м. Чем больше партия, тем выгоднее цена. Уточните нужный объём, и мы подготовим коммерческое предложение.",
    },
    {
      question: "В какие регионы вы поставляете пиломатериалы?",
      answer:
        "Мы осуществляем поставки по всей России — от Дальнего Востока до центральных регионов. Обсудим логистику и подберём оптимальный способ доставки под ваш заказ.",
    },
    {
      question: "Какие сорта и породы древесины есть в наличии?",
      answer:
        "В нашем ассортименте: хвойные (сосна, ель, лиственница) и лиственные породы. По виду продукции: доска обрезная, брус строительный, бруски. Уточняйте наличие нужной позиции — мы подберём под ваш запрос.",
    },
    {
      question: "Как оформить заказ и узнать актуальные цены?",
      answer:
        "Свяжитесь с нами по телефону или через форму на сайте. Мы уточним ваши потребности по породе, размеру, объёму и срокам, после чего подготовим коммерческое предложение или прайс-лист.",
    },
    {
      question: "Вы работаете с юридическими лицами и ИП?",
      answer:
        "Да, мы работаем с юридическими лицами, индивидуальными предпринимателями и самозанятыми. Возможна оплата по безналичному расчёту с полным пакетом закрывающих документов.",
    },
    {
      question: "Можно ли получить образцы или описание продукции?",
      answer:
        "Да, по запросу мы предоставляем описание продукции, технические характеристики и фотографии партий. Обратитесь к нашему менеджеру, и мы подготовим всю необходимую информацию.",
    },
  ]

  return (
    <>
      <section id="map" className="relative py-20 md:py-32 animate-on-scroll bg-[#0B0C0F]">
        <div className="text-center mb-12 md:mb-16 px-4">
          <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            ГЕОГРАФИЯ ПОСТАВОК
          </div>
          <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 text-balance">
            Поставки по всей России
          </h2>
          <p className="text-[#A7ABB3] text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
            Доставляем пиломатериалы в любой регион страны. Более 9 лет надёжных поставок.
          </p>
        </div>

        <WorldMap
          experiences={experiences}
          selectedExperience={selectedExperience}
          onSelectExperience={setSelectedExperience}
        />
      </section>

      <section id="narrative" className="relative py-20 md:py-32 px-4 animate-on-scroll">
        <div className="max-w-[1120px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
            <div className="max-w-[720px]">
              <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                АССОРТИМЕНТ ПРОДУКЦИИ
              </div>
              <h2 className="font-serif text-[36px] leading-[1.15] md:text-[56px] md:leading-[1.1] font-medium mb-8 text-balance">
                Каждый вид{" "}
                <span
                  className="inline-block"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b 0%, #fde68a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  пиломатериала
                </span>
              </h2>
              <p className="text-[#A7ABB3] text-base md:text-lg leading-relaxed mb-12">
                Поставляем хвойные и лиственные породы: доску обрезную, брус, бруски. Каждая партия соответствует стандартам качества. Подберём нужный размер и объём под ваши задачи.
              </p>

              <div className="md:hidden mb-8">
                <div className="rounded-[24px] p-1 w-full aspect-square overflow-hidden">
                  <img
                    src={features[selectedFeature]?.image || "/placeholder.svg"}
                    alt="Превью функции"
                    className={`w-full h-full object-cover rounded-[20px] transition-opacity duration-300 ${
                      imageFade ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-6">
                {features.map((feature, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setImageFade(false)
                      setTimeout(() => {
                        setSelectedFeature(i)
                        setImageFade(true)
                        setAutoRotationKey((prev) => prev + 1)
                      }, 300)
                    }}
                    className={`relative w-full text-left flex gap-4 items-start p-5 transition-all duration-300 rounded-xs py-4 overflow-hidden ${
                      selectedFeature === i ? "border border-white/20" : "border border-white/10"
                    }`}
                  >
                    <feature.icon
                      className={`w-6 h-6 flex-shrink-0 mt-1 transition-colors ${
                        selectedFeature === i ? "text-amber-400" : "text-amber-500/60"
                      }`}
                    />
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm md:text-base text-[#A7ABB3]">{feature.desc}</p>
                    </div>
                    {selectedFeature === i && (
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
                        <div className="h-full bg-white progress-bar" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-stretch justify-center">
              <div className="relative w-full h-full min-h-[500px]">
                {features.map((feature, i) => {
                  const positionInStack = (i - selectedFeature + 4) % 4
                  const isActive = positionInStack === 0

                  return (
                    <div
                      key={i}
                      className="absolute inset-0 p-1 transition-all duration-600 ease-out"
                      style={{
                        zIndex: 4 - positionInStack,
                        transform: `translateX(${positionInStack * 16}px) scale(${1 - positionInStack * 0.02})`,
                        opacity: isActive ? (imageFade ? 1 : 1) : 0.6 - positionInStack * 0.15,
                      }}
                    >
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative py-20 md:py-32 px-4 animate-on-scroll">
        <div className="max-w-[800px] w-full mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              ЧАСТЫЕ ВОПРОСЫ
            </div>
            <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 text-balance">
              Есть{" "}
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #d9a7c7 0%, #fffcdc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                вопросы
              </span>
              ?
            </h2>
            <p className="text-[#A7ABB3] text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
              Всё, что нужно знать о сотрудничестве с ООО «Альянс ДШ».
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-[#A7ABB3] transition-transform duration-300 ${
                      openFaqIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-sm md:text-base text-[#A7ABB3] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="relative py-24 md:py-40 px-4 animate-on-scroll overflow-hidden pt-0"
        style={{
          backgroundImage: `url('/earth-cta.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0F] via-[#0B0C0F]/60 to-transparent pointer-events-none" />
        <div className="max-w-[800px] w-full mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass-pill px-4 py-2 rounded-full mb-8 text-xs md:text-sm text-[#A7ABB3]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Альянс ДШ · Хабаровск
          </div>

          <h2 className="font-serif text-[40px] leading-[1.15] md:text-[64px] md:leading-[1.1] font-medium mb-6 text-balance">
            Готовы обсудить поставку?
          </h2>
          <p className="text-[#A7ABB3] text-base md:text-lg mb-10 leading-relaxed max-w-[560px] mx-auto">
            Свяжитесь с нами — подберём нужный пиломатериал, объём и условия отгрузки.
          </p>

          <Button className="glass-button text-base rounded-full bg-white/5 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 text-white px-8 py-6 md:text-base">
            Связаться с нами
          </Button>
        </div>
      </section>
    </>
  )
}