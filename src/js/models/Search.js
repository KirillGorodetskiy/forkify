import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'ccdaea2442f7411463ca4d7d0ff7ba05';
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search/?key=${key}&q=${this.query}`);
            this.results = res.data.recipes;
           // console.log(this.result);    
        } catch (error) {
            alert(error);
        }
    }
}

//http://food2fork.com/api/get 


