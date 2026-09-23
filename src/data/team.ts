import zulfaniPhoto from "@/assets/team/Zulfani.png";
import riaPhoto from "@/assets/team/Ria.jpeg";
import fakhriPhoto from "@/assets/team/Fakhri Irawan.png";
import chaniaPhoto from "@/assets/team/Chania.png";
import nabilaPhoto from "@/assets/team/Nabila Nur Aisyah.png";
import ariqahPhoto from "@/assets/team/Ariqah.jpeg";

export interface TeamMember {
  name: string;
  role: string;
  level: string;
  photo: string;
}

// 1. Executive Board
export const executiveLeadership: TeamMember[] = [
  {
    name: "Zulfani",
    role: "Founder - CEO",
    level: "Executive Board",
    photo: zulfaniPhoto,
  },
  {
    name: "Ria Pratiwi",
    role: "General Manager",
    level: "General Management",
    photo: riaPhoto,
  },
];

// 2. Managing Directors
export const managingDirectors: TeamMember[] = [
  {
    name: "Fakhri Irawan",
    role: "Managing Director Ardhana Digital",
    level: "Operational Leadership",
    photo: fakhriPhoto,
  },
  {
    name: "Chania",
    role: "Managing Director Ardhana Agency",
    level: "Operational Leadership",
    photo: chaniaPhoto,
  },
];

// 3. Division Heads
export const divisionHeads: TeamMember[] = [
  {
    name: "Nabila Aisyah",
    role: "Head of Business Development Division",
    level: "Division Leadership",
    photo: nabilaPhoto,
  },
  {
    name: "Ariqah Shabila Putri",
    role: "Head of Finance & Administration Division",
    level: "Division Leadership",
    photo: ariqahPhoto,
  },
];

// Backward compatibility exports if needed
export const leadership = executiveLeadership;
export const heads = managingDirectors;

