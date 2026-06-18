import type { ImageMetadata } from 'astro';

import boardAndy from '../assets/images/coach-andrew-glynn.webp';
import boardTobias from '../assets/images/coach-tobias-lee.webp';
import boardBill from '../assets/images/coach-bill-sterling.webp';

export interface BoardMember {
  name: string;
  role: string;
  bio: string;
  image?: ImageMetadata;
  imageAlt?: string;
}

export const board: BoardMember[] = [
  {
    name: 'Brian Johnson',
    role: 'President',
    bio: 'Brian and his family started fencing at Metro Tacoma Fencing Club in 2024. He joined the board in 2025 and became President of the board soon after with exciting ideas for the club including more social events, more outreach, and a greater social media presence. He enjoys fencing épée and has competed in a number of tournaments at our club.',
    image: undefined,
    imageAlt: undefined,
  },
  {
    name: 'Aaron Petersen',
    role: 'Secretary',
    bio: 'Aaron is excited to be a member of the Board of Directors. He has been a board member since 2025. He has a passion for both fencing and non-profit governance. He has been on three previous non-profit boards and thoroughly enjoys helping these and MTFC navigate what it means to be a successful non-profit. He also enjoys the sport of fencing as a parent, spectator and more recently as a participant. He has been fencing épée since 2025 and has a lot to learn so you will likely see him at any number of classes and open fencing.',
    image: undefined,
    imageAlt: undefined,
  },
  {
    name: 'Andrew Glynn',
    role: 'Treasurer',
    bio: 'Andy has been involved with fencing at Metro Tacoma Fencing Club for more than 20 years. He is in charge of open fencing. Previously, he ran the Youth Fencing Program at Metro Tacoma Fencing Club. His passion is with the beginner fencers. Andy earned his certification from the United States Fencing Coaches Association (USFCA) as a Moniteur in Foil in 2011. Andy previously served on the Board of Directors as Treasurer, took a break, and returned as treasurer in 2023.',
    image: boardAndy,
    imageAlt: 'Andrew Glynn, Treasurer',
  },
  {
    name: 'Tobias Lee, MD',
    role: 'At-large',
    bio: 'Toby has been a member of Metro Tacoma Fencing Club (MTFC) since 2008 and a volunteer coach since 2009. He was president of the board from 2019 until 2025. He wants to support all our members and coaches whether they enjoy fencing for fitness and recreation or have aspirations at the highest levels of national and international competitions. He and all three of his boys Andrew, Benjamin, and Christopher fence and have earned A2025 ratings in their preferred weapon. His wife Yukiko is administrator for the club. Additional information about Toby can be found at tobylee.com.',
    image: boardTobias,
    imageAlt: 'Tobias Lee, At-large Board Member',
  },
  {
    name: 'Bill Sterling',
    role: 'At-large',
    bio: 'Bill joined the board in 2024. He is regularly seen at open fencing and is happy to fence anyone in any weapon. He entered his first fencing competition 50 years ago and continues to compete in all three weapons. In years past he has coached fencers at UNT, the IFCS club (Texas) and studied with Masters Daniel Nevot, Thomas Bickley, George Platt and Harold Hayes (Foil), Thomas Bickley (Epee), and with Maestro Emric Degal (Saber). Over his long career he has competed both Nationally and Internationally. In 2015 as a Veteran he achieved an end of season number 15 National ranking in both Foil and Saber. Bill also holds an R2 Epee referee rating.',
    image: boardBill,
    imageAlt: 'Bill Sterling, At-large Board Member',
  },
  {
    name: 'Young Guerra',
    role: 'At-large',
    bio: 'Young will be joining the board in 2023. Her children both fence at Metro Tacoma Fencing Club, earned national medals, competed internationally, and help as instructor assistants. Young has taken the beginning foil class and understands how hard all the kids work to improve their fencing. She is often seen at the club with her Shih Tzu Ellie.',
    image: undefined,
    imageAlt: undefined,
  },
];
