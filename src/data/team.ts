export interface TeamMember {
  name: string;
  role: string;
  unit: "Group" | "Digital" | "Event" | "Agency";
  photo: string;
}

// Dummy team data — silakan ganti nama, jabatan, dan foto sesuai kebutuhan.
export const leadership: TeamMember[] = [
  {
    name: "Nama Founder",
    role: "Founder & CEO",
    unit: "Group",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
  },
  {
    name: "Nama Co-Founder",
    role: "Co-Founder & COO",
    unit: "Group",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop",
  },
];

export const heads: TeamMember[] = [
  {
    name: "Nama Direktur Digital",
    role: "Managing Director",
    unit: "Digital",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop",
  },
  {
    name: "Nama Direktur Event",
    role: "Managing Director",
    unit: "Event",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop",
  },
  {
    name: "Nama Direktur Agency",
    role: "Managing Director",
    unit: "Agency",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
  },
];
