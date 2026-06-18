import type { ImageMetadata } from 'astro';

import coachChung from '../assets/images/coach-kwangsuk-chung.webp';
import coachKim from '../assets/images/coach-jisun-kim.webp';
import coachTobias from '../assets/images/coach-tobias-lee.webp';
import coachAndy from '../assets/images/coach-andrew-glynn.webp';
import coachBill from '../assets/images/coach-bill-sterling.webp';
import coachYeongbin from '../assets/images/coach-yeongbin-chung.webp';
import coachGabey from '../assets/images/coach-gabey-guerra.webp';
import coachChris from '../assets/images/coach-christopher-lee.webp';
import coachYukiko from '../assets/images/coach-yukiko-lee.webp';
import coachAlex from '../assets/images/coach-alex-juarez.webp';

export interface Coach {
  name: string;
  title: string;
  weapons: string[];
  bio: string;
  image: ImageMetadata;
  imageAlt: string;
  bookable?: boolean;
}

export const coaches: Coach[] = [
  {
    name: 'Kwangsuk Chung',
    title: 'Head Foil Coach',
    weapons: ['Maître · Foil'],
    bio: "Coach Chung leads MTFC's coaching program with decades of experience in Olympic-style sport fencing. A USA Fencing certified instructor, he has guided athletes of all levels to competitive success across regional, divisional, and national tournaments.",
    image: coachChung,
    imageAlt: 'Coach Chung, Head Coach',
    bookable: true,
  },
  {
    name: 'Jisun Kim',
    title: 'Head Épée Coach',
    weapons: ['Maître · Épée', 'Maître · Foil', 'Prévôt · Sabre'],
    bio: "Coach Kim is MTFC's Head Épée Coach, bringing deep technical expertise and competitive experience to every session. Her patient, detail-oriented approach has developed fencers from their first touch to the national competition circuit.",
    image: coachKim,
    imageAlt: 'Coach Kim, Head Épée Coach',
    bookable: true,
  },
  {
    name: 'Tobias Lee',
    title: 'Coach',
    weapons: ['Maître · Épée', 'Prévôt · Foil'],
    bio: 'Tobias brings energy and precision to his coaching at MTFC, working with competitive and recreational fencers alike. A USA Fencing certified coach, he specializes in developing footwork fundamentals and tactical awareness.',
    image: coachTobias,
    imageAlt: 'Tobias Lee, Coach',
  },
  {
    name: 'Andrew Glynn',
    title: 'Coach',
    weapons: ['Moniteur · Foil', 'Moniteur · Épée'],
    bio: 'Andrew coaches at MTFC with a focus on technical refinement and competitive preparation. He works across age groups and skill levels, helping athletes build the consistency that translates to strong tournament performances.',
    image: coachAndy,
    imageAlt: 'Andrew Glynn, Coach',
  },
  {
    name: 'Bill Sterling',
    title: 'Coach',
    weapons: ['Moniteur · Foil', 'Moniteur · Sabre'],
    bio: 'Bill Sterling brings a wealth of fencing knowledge to MTFC, coaching with an emphasis on tactical intelligence and adaptability. He has supported athletes through every stage of competitive development at the club.',
    image: coachBill,
    imageAlt: 'Bill Sterling, Coach',
  },
  {
    name: 'Yeongbin Chung',
    title: 'Assistant Coach',
    weapons: ['Asst. Moniteur · Foil', 'Asst. Moniteur · Épée'],
    bio: "Coach Yeongbin assists with training sessions at MTFC, supporting athletes in group classes and open fencing. A competitive fencer himself, he brings an athlete's perspective to his coaching work.",
    image: coachYeongbin,
    imageAlt: 'Coach Yeongbin, Assistant Coach',
  },
  {
    name: 'Gabey Guerra',
    title: 'Assistant Coach',
    weapons: ['Asst. Moniteur · Foil'],
    bio: 'Gabey is an assistant coach at MTFC, contributing to group sessions and helping newer fencers develop their foundational skills. Her enthusiasm and approachability make her a great resource for beginners.',
    image: coachGabey,
    imageAlt: 'Gabey Guerra, Assistant Coach',
  },
  {
    name: 'Christopher Lee',
    title: 'Assistant Coach',
    weapons: ['Asst. Moniteur · Foil', 'Asst. Moniteur · Épée'],
    bio: 'Christopher assists with coaching at MTFC, working alongside the senior coaching staff to support athletes across all skill levels. He is passionate about developing the next generation of competitive fencers.',
    image: coachChris,
    imageAlt: 'Christopher Lee, Assistant Coach',
  },
  {
    name: 'Yukiko Lee',
    title: 'Administrator',
    weapons: [],
    bio: 'Yukiko keeps MTFC running behind the scenes, managing club administration and supporting members with enrollment, scheduling, and day-to-day operations. She is the friendly face members encounter when navigating club logistics.',
    image: coachYukiko,
    imageAlt: 'Yukiko Lee, Administrator',
  },
  {
    name: 'Alex Juarez',
    title: 'Club Manager',
    weapons: [],
    bio: 'Alex manages club operations at MTFC, overseeing facility coordination, member services, and event logistics. He works to ensure the club runs smoothly so coaches and athletes can focus on training.',
    image: coachAlex,
    imageAlt: 'Alex Juarez, Club Manager',
  },
];
