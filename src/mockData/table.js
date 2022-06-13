export const customData = {
    totalDocs:10, 
    limit:10, 
    page:1,
    tableData: [
        {
            id: 1,
            createdOn: '17 Jul, 2021 17:32',
            ticketId: '11461083',
            issue: 'I have received wrong return',
            lastUpdated: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet elementum ipsum, quis pretium augue tristique a. Aliquam leo ipsum, cursus sit amet arcu et, tincidunt convallis augue. Suspendisse mi nisi, accumsan eu quam eu, elementum pellentesque elit. Curabitur ac felis nisi. Suspendisse ut quam ut massa f',
            status: 'Closed',
            url:"https://via.placeholder.com/350"
        },
        {
            id: 2,
            createdOn: '17 Jul, 2021 17:32',
            ticketId: '11461083',
            issue: 'I have received wrong return',
            lastUpdated: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet elementum ipsum, quis pretium augue tristique a. Aliquam leo ipsum, cursus sit amet arcu et, tincidunt convallis augue. Suspendisse mi nisi, accumsan eu quam eu, elementum pellentesque elit. Curabitur ac felis nisi. Suspendisse ut quam ut massa f',
            status: 'Closed',
            url:"https://via.placeholder.com/350"
        },
        {
            id: 3,
            createdOn: '17 Jul, 2021 17:32',
            ticketId: '11461083',
            issue: 'I have received wrong return',
            lastUpdated: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet elementum ipsum, quis pretium augue tristique a. Aliquam leo ipsum, cursus sit amet arcu et, tincidunt convallis augue. Suspendisse mi nisi, accumsan eu quam eu, elementum pellentesque elit. Curabitur ac felis nisi. Suspendisse ut quam ut massa f',
            status: 'Closed',
            url:"https://via.placeholder.com/350"
        },
        {
            id: 4,
            createdOn: '18 Jul, 2021 17:32',
            ticketId: '11465083',
            issue: 'I have received wrong return',
            lastUpdated: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet elementum ipsum, quis pretium augue tristique a. Aliquam leo ipsum, cursus sit amet arcu et, tincidunt convallis augue. Suspendisse mi nisi, accumsan eu quam eu, elementum pellentesque elit. Curabitur ac felis nisi. Suspendisse ut quam ut massa f',
            status: 'Closed',
            url:"https://via.placeholder.com/350"
        },
        {
            id: 5,
            createdOn: '19 Jul, 2021 17:32',
            ticketId: '11461063',
            issue: 'I have received wrong return',
            lastUpdated: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet elementum ipsum, quis pretium augue tristique a. Aliquam leo ipsum, cursus sit amet arcu et, tincidunt convallis augue. Suspendisse mi nisi, accumsan eu quam eu, elementum pellentesque elit. Curabitur ac felis nisi. Suspendisse ut quam ut massa f',
            status: 'Open',
            url:"https://via.placeholder.com/350"
        },

    ],
};

export const TicketHeader = [
    {
        label: 'Created On',
        name: 'createdOn',
        accessor: 'createdOn',
        linkAcc: '',
        type: 'lik',
    },
    {
        label: 'Ticket ID',
        name: 'ticketId',
        accessor: 'ticketId',
        linkAcc: 'url',
        type: 'link',
    },
    {
        label: 'Issues',
        name: 'issue',
        accessor: 'issue',
        linkAcc: 'url',
        type: 'imageLink',
    },
    {
        label: 'Last Updated',
        name: 'lastUpdated',
        accessor: 'lastUpdated',
        linkAcc: '',
        type: '',
    },
    {
        label: 'Status',
        name: 'status',
        accessor: 'status',
        linkAcc: '',
        type: 'boxed',
    },
    
];