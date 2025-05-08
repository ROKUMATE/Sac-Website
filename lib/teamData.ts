export type Member = {
  id: number;
  name: string;
  position: string;
  batch: string;
  committee?: string;
  photo: string;
};

export const overallMembers: Member[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    position: "President",
    batch: "2022IMT025",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 2,
    name: "Ananya Patel",
    position: "Elect President",
    batch: "2022IMT010",
    photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 3,
    name: "Varun Nair",
    position: "Secretary",
    batch: "2022BCS045",
    photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 4,
    name: "Ishita Gupta",
    position: "Elect Secretary",
    batch: "2022BCS030",
    photo: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

export const committeeMembers: Member[] = [
  // Cultural Committee
  {
    id: 5,
    name: "Arjun Mehta",
    position: "Secretary",
    batch: "2022IPG015",
    committee: "Cultural",
    photo: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 6,
    name: "Neha Singh",
    position: "Joint Secretary",
    batch: "2023BCS028",
    committee: "Cultural",
    photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 7,
    name: "Rohit Kapoor",
    position: "Joint Secretary",
    batch: "2023BCS042",
    committee: "Cultural",
    photo: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  
  // Technical Committee
  {
    id: 8,
    name: "Priya Desai",
    position: "Secretary",
    batch: "2022BCS035",
    committee: "Technical",
    photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 9,
    name: "Aditya Verma",
    position: "Joint Secretary",
    batch: "2023IMT008",
    committee: "Technical",
    photo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 10,
    name: "Shweta Kumar",
    position: "Joint Secretary",
    batch: "2023IMT040",
    committee: "Technical",
    photo: "https://images.pexels.com/photos/3762802/pexels-photo-3762802.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  
  // Welfare Committee
  {
    id: 11,
    name: "Karan Malhotra",
    position: "Secretary",
    batch: "2022BCS022",
    committee: "Welfare",
    photo: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 12,
    name: "Sangeeta Reddy",
    position: "Joint Secretary",
    batch: "2023BCS033",
    committee: "Welfare",
    photo: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 13,
    name: "Vikram Singh",
    position: "Joint Secretary",
    batch: "2023IMT050",
    committee: "Welfare",
    photo: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  
  // Sports Committee
  {
    id: 14,
    name: "Ravi Prakash",
    position: "Secretary",
    batch: "2022IMT032",
    committee: "Sports",
    photo: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 15,
    name: "Meera Joshi",
    position: "Joint Secretary",
    batch: "2023BCS025",
    committee: "Sports",
    photo: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 16,
    name: "Aryan Shah",
    position: "Joint Secretary",
    batch: "2023BCS012",
    committee: "Sports",
    photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

export type Faculty = {
  id: number;
  name: string;
  position: string;
  department: string;
  photo: string;
};

export const facultyCoordinators: Faculty[] = [
  {
    id: 1,
    name: "Dr. Rajiv Mishra",
    position: "Chief Faculty Coordinator",
    department: "Computer Science and Engineering",
    photo: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    position: "Faculty Coordinator - Cultural",
    department: "Humanities and Social Sciences",
    photo: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 3,
    name: "Dr. Alok Verma",
    position: "Faculty Coordinator - Technical",
    department: "Information Technology",
    photo: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 4,
    name: "Dr. Sanjay Gupta",
    position: "Faculty Coordinator - Welfare",
    department: "Management Studies",
    photo: "https://images.pexels.com/photos/8363149/pexels-photo-8363149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 5,
    name: "Dr. Meena Patel",
    position: "Faculty Coordinator - Sports",
    department: "Physical Education",
    photo: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];