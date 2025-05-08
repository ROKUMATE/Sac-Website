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
        name: "Dr. Ashok Kumar",
        position: "Chief Faculty Coordinator",
        department: "Computer Science and Engineering",
        photo: "https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 2,
        name: "Dr. Nandini Iyer",
        position: "Faculty Coordinator - Cultural",
        department: "Humanities and Social Sciences",
        photo: "https://images.pexels.com/photos/7821485/pexels-photo-7821485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 3,
        name: "Dr. Kamal Joshi",
        position: "Faculty Coordinator - Technical",
        department: "Information Technology",
        photo: "https://images.pexels.com/photos/8617940/pexels-photo-8617940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 4,
        name: "Dr. Pooja Malhotra",
        position: "Faculty Coordinator - Welfare",
        department: "Management Studies",
        photo: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 5,
        name: "Dr. Sanjay Rawat",
        position: "Faculty Coordinator - Sports",
        department: "Physical Education",
        photo: "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];
