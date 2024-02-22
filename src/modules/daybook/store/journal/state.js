
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Voluptate tempor nulla esse ipsum laborum eiusmod ullamco exercitation officia dolore laborum.',
            picture: null, 
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Dolor nostrud occaecat id velit fugiat amet veniam minim occaecat nisi exercitation voluptate pariatur commodo.',
            picture: null, 
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Sint pariatur non eu excepteur mollit in et excepteur occaecat occaecat cupidatat nostrud deserunt non.',
            picture: null, 
        },
    ]
})