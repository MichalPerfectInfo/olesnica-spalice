// projects.ts - Dane projektów

export interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  units: string;
  thumbnail: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Inwestycja Dąbrowa",
    location: "Dąbrowa",
    year: "2024",
    units: "6 domków",
    thumbnail: "assets/dabrowa/widok_2.jpg",
    gallery: [
      "assets/dabrowa/widok_2.jpg",
      "assets/dabrowa/widok_1.jpg",
      "assets/dabrowa/realizacja_1.jpeg",
      "assets/dabrowa/realizacja_4.jpeg",
    ]
  },
  {
    id: 2,
    title: "Oleśnica- Rataje",
    location: "Oleśnica, Rataje",
    year: "2016",
    units: "2 budynki mieszkalne",
    thumbnail: "assets/Rataje/realizacja_1.jpeg",
    gallery: [
      "assets/Rataje/realizacja_1.jpeg",
      "assets/Rataje/realizacja_2.jpeg",
    ]
  },
  {
    id: 3,
    title: "Oleśnica- ul. Ludwikowska",
    location: "Oleśnica, ul Ludwikowska",
    year: "2019/2021",
    units: "2 osiedla budynków",
    thumbnail: "assets/ludwikowska/widok_4.jpg",
    gallery: [
      "assets/ludwikowska/realizacja_1.jpg",
      "assets/ludwikowska/realizacja_2.jpg",
      "assets/ludwikowska/realizacja_3.jpg",
      "assets/ludwikowska/realizacja_4.jpg",
      "assets/ludwikowska/realizacja_5.jpg",
    ]
  },
  {
    id: 4,
    title: "Domki jednorodzinne",
    location: "Spalice",
    year: "2023",
    units: "Osiedle domów jednorodzinnych",
    thumbnail: "assets/spalice/widok_1.jpg",
    gallery: [
      "assets/spalice/widok_2.jpg",
      "assets/spalice/realizacja_1.jpeg",
      "assets/spalice/realizacja_2.jpeg",
    ]
  },
];