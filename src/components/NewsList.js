import React from 'react';
import { ListItem } from './ListItem';
export class NewsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news:[],
            filter:''
        };
    }
    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=gb&q=${this.state.filter}&apiKey=926f559125244b4c88c0509968d7408a`;
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({news:data.articles}));
    }
    filterNews(){
        this.fetchData();
    }
    onFilterChange(e){
        if(e.target.value == ''){
            this.state.filter = '';
            this.fetchData();
        } else {
            this.setState({filter:e.target.value});
        }
    }
    render(){
        return(
            <div className='news-list-wrapper'>
                <div className='row'>
                    <div className='col-md-12 filter-wrapper'>
                        <input type="text" class="form-control" onChange={this.onFilterChange.bind(this)} value={this.state.filter} id="search"  placeholder="Search..." />
                        <button type='button' className="btn btn-primary" onClick={this.filterNews.bind(this)}>Go</button>
                    </div>
                    
                    {
                        this.state.news.map(newsItem => {
                            return(<div className='col-md-4'>
                                <ListItem {...newsItem} />
                            </div>)
                        })
                    }
                    {
                        this.state.news.length == 0 &&
                        <div className='col-md-12 text-center'>
                            No articles found
                        </div>
                    }
                </div>
            </div>
        );
    }
}