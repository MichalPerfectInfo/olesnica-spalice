import { Apartment } from '../types';
import karty1_2 from "../assets/karty1.jpg";
import karty3_4 from "../assets/karty2.jpg";

export const APARTMENTS_DATA: Apartment[] = [
  { 
    id: 0, 
    number: '1', 
    rooms: 6,
    floor: 0,
    area: 71.89, 
    polygonPoints: [
      "584,662,844,691,843,517,581,519"
    ],
    imageUrls: [
     karty1_2
    ]
  },
  { 
    id: 1, 
    number: '3', 
    rooms: 6,
    floor: 1,
    area: 71.58, 
    polygonPoints: [
      "841,506,841,340,939,220,728,256,623,363,584,410,584,511"
    ],
    imageUrls: [
     karty3_4
    ]
  },
  { 
    id: 2, 
    number: '2', 
    rooms: 6,
    floor: 0,
    area: 71.89, 
    polygonPoints: [
      "880,696,1263,736,1262,519,880,521"
    ],
    imageUrls: [
     karty1_2
    ]
  },
  { 
    id: 3, 
    number: '4', 
    rooms: 6,
    floor: 1,
    area: 71.58, 
    polygonPoints: [
      "1260,502,1265,357,1356,151,978,212,876,334,881,506"
    ],
    imageUrls: [
     karty3_4
    ]
  }
]
