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
        name: 'Samyak Choudhary',
        position: 'President',
        Batch: '2023IMG044',
        PhoneNo: '9993148060',
        photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 2,
        name: 'Shashank Gour',
        position: 'President (Elect)',
        Batch: '2023IMG047',
        PhoneNo: '9303332369',
        photo: '/assets/2024-25/Student/Overall/shanky.jpeg',
    },
    {
        id: 3,
        name: 'Krish Kedia',
        position: 'Secretary',
        Batch: '2023IMT043',
        PhoneNo: '9647736900',
        photo: '/assets/2024-25/Student/Overall/kedia.jpeg',
    },
    {
        id: 4,
        name: 'Kumawat Rohit Suhas',
        position: 'Secretary (Elect)',
        Batch: '2023IMT045',
        PhoneNo: '9130660628',
        photo: '/assets/2024-25/Student/Overall/rokum.jpeg',
    },
];

export const committeeMembers: Member[] = [
    // Cultural Committee
    {
        id: 5,
        name: 'Rhythm Singh',
        position: 'Secretary',
        Batch: '2023IMT063',
        committee: 'Cultural',
        PhoneNo: '9529797872',
        photo: '/assets/2024-25/Student/Cultural/Cultural_Rhythm.jpeg',
    },
    {
        id: 6,
        name: 'G. Yashwant',
        position: 'Joint Secretary',
        Batch: '2023BCS022',
        committee: 'Cultural',
        PhoneNo: '7997882456',
        photo: '/assets/2024-25/Student/Cultural/Cultural_Yashwant.jpeg',
    },
    {
        id: 7,
        name: 'Belana Biswajeet Patro',
        position: 'Joint Secretary',
        Batch: '2023BEE011',
        committee: 'Cultural',
        PhoneNo: '6300573973',
        photo: '/assets/2024-25/Student/Cultural/Cultural_Biswajeet.jpg',
    },
    {
        id: 17,
        name: 'Sneha Rathod',
        position: 'Joint Secretary',
        Batch: '2023IMT079',
        committee: 'Cultural',
        PhoneNo: '8688099353',
        photo: '/assets/2024-25/Student/Cultural/Cultural_Sneha.jpeg',
    },

    // Technical Committee
    {
        id: 8,
        name: 'Mradul Tiwari',
        position: 'Secretary',
        Batch: '2023IMG034',
        committee: 'Technical',
        PhoneNo: '8881132265',
        photo: '/assets/2024-25/Student/Tech/Tech_Mridal.jpeg',
    },
    {
        id: 9,
        name: 'Anisha Khairnar',
        position: 'Joint Secretary',
        Batch: '2023IMT012',
        committee: 'Technical',
        PhoneNo: '7387797094',
        photo: '/assets/2024-25/Student/Tech/Tech_Anuu.jpeg',
    },
    {
        id: 10,
        name: 'Ansh Saxena',
        position: 'Joint Secretary',
        Batch: '2023BMS001',
        committee: 'Technical',
        PhoneNo: '9913188186',
        photo: '/assets/2024-25/Student/Tech/Tech_Ansh.jpeg',
    },

    // Welfare Committee
    {
        id: 11,
        name: 'Yash Mahesh Wani',
        position: 'Secretary',
        Batch: '2023IMT087',
        committee: 'Welfare',
        PhoneNo: '9850681144',
        photo: '/assets/2024-25/Student/Welfare/Welfare_Yash.jpeg',
    },
    {
        id: 12,
        name: 'Jaipreeth Tiruvaipati',
        position: 'Joint Secretary',
        Batch: '2023BMS029',
        committee: 'Welfare',
        PhoneNo: '9652131725',
        photo: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
        id: 13,
        name: 'Khoshang Ajaykumar Kashyap',
        position: 'Joint Secretary',
        Batch: '2023IMT042',
        committee: 'Welfare',
        photo: '/assets/2024-25/Student/Welfare/Welfare_Khoshang.jpeg',
    },

    // Sports Committee
    {
        id: 14,
        name: 'Narain Varma',
        position: 'Secretary',
        Batch: '2023IMT501',
        committee: 'Sports',
        PhoneNo: '8106289898',
        photo: '/assets/2024-25/Student/Sports/Sports_Narain.jpeg',
    },
    {
        id: 15,
        name: 'Advait Surendra Mulmule',
        position: 'Joint Secretary',
        Batch: '2023IMT006',
        PhoneNo: '7620672917',
        committee: 'Sports',
        photo: '/assets/2024-25/Student/Sports/Sports_Advait.jpeg',
    },
    {
        id: 16,
        name: 'P.Veditha Keerti Rani',
        position: 'Joint Secretary',
        Batch: '2024IMG030',
        committee: 'Sports',
        PhoneNo: '7893455768',
        photo: '/assets/2024-25/Student/Sports/Sports_Veditha.jpg',
    },
];
