import { MapPin, Phone, Building2, Hash, FileText, User } from "lucide-react"

const requisites = [
  { icon: Building2, label: "Полное наименование", value: 'ООО "Альянс ДШ"' },
  { icon: Hash, label: "ИНН", value: "2700000793" },
  { icon: FileText, label: "ОГРН", value: "1222700017396" },
  { icon: Hash, label: "КПП", value: "270001001" },
  { icon: Hash, label: "ОКПО", value: "78414530" },
  { icon: User, label: "Генеральный директор", value: "Дьяченко Руслан Юрьевич" },
  { icon: MapPin, label: "Юридический адрес", value: "680000, Хабаровский край, г. Хабаровск, ул. Фрунзе, д. 22, офис 307" },
  { icon: FileText, label: "Дата регистрации", value: "9 ноября 2022 года" },
]

const contacts = [
  { icon: Phone, label: "Телефон", value: "+7 (4212) 00-00-00", href: "tel:+74212000000" },
  { icon: MapPin, label: "Адрес офиса", value: "г. Хабаровск, ул. Фрунзе, д. 22, офис 307", href: null },
]

export function RequisitesSection() {
  return (
    <section id="requisites" className="relative py-20 md:py-32 px-4 animate-on-scroll bg-[#0B0C0F]">
      <div className="max-w-[1120px] w-full mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            РЕКВИЗИТЫ И КОНТАКТЫ
          </div>
          <h2 className="font-serif text-[32px] leading-[1.15] md:text-[48px] md:leading-[1.1] font-medium mb-6 text-balance">
            Данные{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #fde68a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              компании
            </span>
          </h2>
          <p className="text-[#A7ABB3] text-sm md:text-base max-w-[600px] mx-auto leading-relaxed">
            Официальные реквизиты ООО «Альянс ДШ» для оформления договоров и первичных документов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Реквизиты */}
          <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors duration-300">
            <div className="text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Юридические реквизиты
            </div>
            <div className="space-y-5">
              {requisites.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-amber-400/70 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.12em] text-[#A7ABB3] mb-0.5">{item.label}</div>
                    <div className="text-sm text-[#F2F3F5] leading-relaxed">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div className="flex flex-col gap-6">
            <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors duration-300">
              <div className="text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Контакты
              </div>
              <div className="space-y-5">
                {contacts.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-amber-400/70 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.12em] text-[#A7ABB3] mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-[#F2F3F5] hover:text-amber-400 transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm text-[#F2F3F5] leading-relaxed">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors duration-300 flex-1">
              <div className="text-xs uppercase tracking-[0.15em] text-[#A7ABB3] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Режим работы
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#A7ABB3]">Пн — Пт</span>
                  <span className="text-[#F2F3F5]">09:00 — 18:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#A7ABB3]">Сб — Вс</span>
                  <span className="text-[#A7ABB3]">Выходной</span>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-white/5">
                <p className="text-xs text-[#A7ABB3] leading-relaxed">
                  Принимаем заявки на поставку пиломатериалов. Ответим на запрос в течение рабочего дня.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
