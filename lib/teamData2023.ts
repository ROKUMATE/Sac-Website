export type Member = {
    id: number;
    name: string;
    position: string;
    Batch: string;
    PhoneNo?: string;
    committee?: string;
    photo: string;
};

export const overallMembers: Member[] = [
    // ----- OVERALL -----
    {
        id: 1,
        name: 'Kunal Vardani',
        position: 'President',
        Batch: '2022IMG032 ',
        PhoneNo: '9929646997',
        photo: '/assets/2023-24/Student/Overall/Kunal_sir_2.jpeg',
    },
    {
        id: 2,
        name: 'Abhishek Gangwar',
        position: 'President (Elect)',
        Batch: '2022BCS001',
        PhoneNo: '7906850094',
        photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 3,
        name: 'Saumya Seetha',
        position: 'Secretary',
        Batch: '2021IMT087',
        PhoneNo: '8817953093',
        photo: '/assets/2023-24/Student/Overall/Overall_Saumya.jpeg',
    },
    {
        id: 4,
        name: 'Arijit Konar',
        position: 'Secretary (Elect)',
        Batch: '2022IMT019',
        PhoneNo: '8269728373',
        photo: '/assets/2023-24/Student/Overall/Overall_Arijit.jpeg',
    },
];

export const committeeMembers: Member[] = [
    // Cultural Committee
    {
        id: 5,
        name: 'Indresh Patel',
        position: 'Secretary',
        Batch: '2022BCS032',
        committee: 'Cultural',
        PhoneNo: '9305461497',
        photo: '/assets/2023-24/Student/Cultural/Cultural_Indresh.jpeg',
    },
    {
        id: 6,
        name: 'Aayush Dhakad',
        position: 'Joint Secretary',
        Batch: '2022IMT002',
        committee: 'Cultural',
        PhoneNo: '9111257709',
        photo: '/assets/2023-24/Student/Cultural/Cultural_Dhakad.jpeg',
    },
    {
        id: 7,
        name: 'Kamna',
        position: 'Joint Secretary',
        Batch: '2022IMG',
        committee: 'Cultural',
        PhoneNo: '7015426388',
        photo: '/assets/2023-24/Student/Cultural/Cultural_Kamna.jpeg',
    },
    // Technical Committee
    {
        id: 8,
        name: 'Harshith Mente',
        position: 'Secretary',
        Batch: '2021IMT063',
        committee: 'Technical',
        PhoneNo: '6300722698',
        photo: '/assets/2023-24/Student/Technical/Tech_Harshit.jpeg',
    },
    {
        id: 10,
        name: 'Uajjawal Sharma',
        position: 'Secretary',
        Batch: '2022IMG064',
        committee: 'Technical',
        PhoneNo: '8769445541',
        photo: '/assets/2023-24/Student/Technical/Uajjawal_Sir.jpg',
    },
    {
        id: 9,
        name: 'Rishabh Agarwal',
        position: 'Joint Secretary',
        Batch: '2022BCS079',
        committee: 'Technical',
        PhoneNo: '9163430474',
        photo: '/assets/2023-24/Student/Technical/Tech_Rishabh.jpeg',
    },

    // Welfare Committee
    {
        id: 11,
        name: 'Ujjwal Jain',
        position: 'Secretary',
        Batch: '2021IMT105',
        committee: 'Welfare',
        PhoneNo: '7073123161',
        photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 12,
        name: 'Rithvika Mullapudi',
        position: 'Joint Secretary',
        Batch: '2022BCS048',
        committee: 'Welfare',
        PhoneNo: '9121857355',
        photo: '/assets/2023-24/Student/Welfare/Welfare_Rithvika.jpeg',
    },
    {
        id: 13,
        name: 'Paras Agarwal',
        position: 'Joint Secretary',
        Batch: '2022BCS078',
        committee: 'Welfare',
        PhoneNo: '7310633088',
        photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },

    // Sports Committee
    {
        id: 14,
        name: 'Purav Saluja',
        position: 'Secretary',
        Batch: '2022IMT091',
        committee: 'Sports',
        PhoneNo: '7888519807',
        photo: '/assets/2023-24/Student/Sports/Sports_Purav.jpeg',
    },
    {
        id: 15,
        name: 'Jasleen Kaur',
        position: 'Joint Secretary',
        Batch: '2022IMG025',
        PhoneNo: '9991964475',
        committee: 'Sports',
        photo: '/assets/2023-24/Student/Sports/Sports_Jasleen.jpeg',
    },
    {
        id: 16,
        name: 'Bhukya Madhu Naik',
        position: 'Joint Secretary',
        Batch: '2022BCS014',
        committee: 'Sports',
        PhoneNo: '9398027670',
        photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
];
