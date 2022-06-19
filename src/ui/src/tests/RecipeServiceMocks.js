import axios from 'axios';

jest.mock('axios');

export const mockGetAll = (async (data) => {
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
});

