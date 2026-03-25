export interface Experience {
  id: string
  title: string
  company: string
  location: {
    city: string
    country: string
    lat: number
    lng: number
    isRemote: boolean
  }
  startDate: string
  endDate: string
  color: "pink" | "yellow" | "green" | "blue"
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Поставка доски обрезной",
    company: "Строительная компания",
    location: {
      city: "Хабаровск",
      country: "Россия",
      lat: 48.4827,
      lng: 135.0840,
      isRemote: false,
    },
    startDate: "2023-01-15",
    endDate: "2024-12-27",
    color: "green",
  },
  {
    id: "2",
    title: "Брус для каркасного строительства",
    company: "Девелопер ДВ",
    location: {
      city: "Владивосток",
      country: "Россия",
      lat: 43.1332,
      lng: 131.9113,
      isRemote: false,
    },
    startDate: "2023-04-20",
    endDate: "2024-12-27",
    color: "yellow",
  },
  {
    id: "3",
    title: "Поставка хвойного пиломатериала",
    company: "Производственный цех",
    location: {
      city: "Комсомольск-на-Амуре",
      country: "Россия",
      lat: 50.5500,
      lng: 137.0089,
      isRemote: false,
    },
    startDate: "2023-06-10",
    endDate: "2024-12-27",
    color: "blue",
  },
  {
    id: "4",
    title: "Бруски и рейки для отделки",
    company: "Мебельное производство",
    location: {
      city: "Биробиджан",
      country: "Россия",
      lat: 48.7952,
      lng: 132.9216,
      isRemote: false,
    },
    startDate: "2023-09-05",
    endDate: "2024-12-27",
    color: "pink",
  },
  {
    id: "5",
    title: "Несущие конструкции из бруса",
    company: "Строительный холдинг",
    location: {
      city: "Благовещенск",
      country: "Россия",
      lat: 50.2906,
      lng: 127.5272,
      isRemote: false,
    },
    startDate: "2024-02-18",
    endDate: "2024-12-27",
    color: "green",
  },
]