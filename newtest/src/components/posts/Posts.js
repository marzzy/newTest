import React from 'react';

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    let queryList = this.getParams(this.props.location);
    console.log('this.props', this.props);
    console.log('queryList', queryList);
  }
  
  handleClick() {
    const newUrl = this.setParams({ query: "javascript" });
    console.log('newUrl', newUrl);
    this.props.history.push(`?${newUrl}`)
  }
  getParams(location) {
    console.log('hi');
    const searchParams = new URLSearchParams(location.search);
    return {
      query: searchParams.get('query') || '',
    };
  }

  setParams({query = ''}) {
    const searchParams = new URLSearchParams();
    searchParams.set('query', query);
    return searchParams.toString();
  }

  render () {
    return (
      <div>
        posts
        <button onClick={this.handleClick} >click to search</button>
      </div>
    );
  }
}

export default Posts;
