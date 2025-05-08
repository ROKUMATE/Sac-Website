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
        photo: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 2,
        name: "Dr. Priya Sharma",
        position: "Faculty Coordinator - Cultural",
        department: "Humanities and Social Sciences",
        photo: "https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 3,
        name: "Dr. Alok Verma",
        position: "Faculty Coordinator - Technical",
        department: "Information Technology",
        photo: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 4,
        name: "Dr. Sanjay Gupta",
        position: "Faculty Coordinator - Welfare",
        department: "Management Studies",
        photo: "https://images.pexels.com/photos/8363149/pexels-photo-8363149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 5,
        name: "Dr. Meena Patel",
        position: "Faculty Coordinator - Sports",
        department: "Physical Education",
        photo: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];
