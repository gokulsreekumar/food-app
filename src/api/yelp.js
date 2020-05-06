import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer BPsFDh10T0D7oDSB1jzvGFGesnzXHO1eSdlDvDKyL7emlo55Y7UVLuIQZgkyOv1xjwHCMIOzQQbE-sRPaFUHs-zwzNrCNx0JlC6lPhe9oSb8lSZA5OPjcV30r6mxXnYx'
    }
})