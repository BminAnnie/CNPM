const mcps = [
    {
        name: 'MCP 1',
        location: 'Thủ Đức',
        now: 108,
        max: 150,
        Workers: ['Nguyen Van A', 'Pham Thi B'],
    },
    {
        name: 'MCP 2',
        location: 'Thủ Đức',
        now: 80,
        max: 150,
        Workers: ['Nguyen Van A', 'Pham Thi B'],
    },
    {
        name: 'MCP 3',
        location: 'Quận 1',
        now: 50,
        max: 150,
        Workers: ['Nguyen Van A', 'Pham Thi B'],
    },
    {
        name: 'MCP 4',
        location: 'Quận 3',
        now: 30,
        max: 150,
        Workers: ['Nguyen Van A', 'Pham Thi B'],
    },
];

const conversations = [
    {
        name: 'Liêm',
        conversationId: 1,
        avatar: '/images/avatar1.png',
    },
    {
        name: 'An',
        conversationId: 2,
        avatar: '/images/avatar2.png',
    },
    {
        name: 'Minh',
        conversationId: 3,
        avatar: '/images/avatar3.png',
    },
    {
        name: 'Duyen',
        conversationId: 4,
        avatar: '/images/avatar4.png',
    },
    {
        name: 'Lau',
        conversationId: 5,
        avatar: '/images/avatar5.png',
    },
];

let messages = [
    {
        id: 1,
        conversationId: 1,
        me: 0,
        message: 'Xin Chao',
    },
    { id: 2, conversationId: 2, me: 1, message: 'Xin Chao' },
    {
        id: 3,
        conversationId: 1,
        me: 1,
        message: 'Cai gi',
    },
];
export { mcps, conversations, messages };
