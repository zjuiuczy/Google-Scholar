import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


const ARTICLE_QUERY = gql`
  query ArticleQuery($article_id: ID!){
    Article (article_id : $article_id){
          article_id,
          title, 
          citedBy, 
          citations, 
          pub_year, 
          eprint, 
          pub_number, 
          pub_publisher, 
          pub_url, 
          journal
    }
  }  
`;
export class article extends Component {
    render(){
        let {article_id} = this.props.match.params;
        return (
            <Fragment>
                <Query query={ARTICLE_QUERY} variables={{article_id}}>{
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return `Error! ${error.message}`;
                        const {title, citedBy, citations, pub_year, pub_number, pub_publisher, pub_url, journal} = data.Article;
                        return <div>
                            <h1 className="display-4 my-3">
                                <span className="text-dark">Google Scholar:</span>
                                    {title}
                            </h1>
                            <h4 className="mb-3">Scholar Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Title: {title}
                                    </li>
                                    <li className="list-group-item">
                                        CitedBy: {citedBy}
                                    </li>
                                    <li className="list-group-item">
                                        Citations: {citations}
                                    </li>
                                </ul>
                            <h4 className="mb-3">Pub Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        pub_year: {pub_year}
                                    </li>
                                    <li className="list-group-item">
                                        pub_number: {pub_number}
                                    </li>
                                    <li className="list-group-item">
                                        pub_publisher: {pub_publisher}
                                    </li>
                                    <li className="list-group-item">
                                        pub_url: {' '}
                                        <span 
                                        className={classNames({
                                            'text-success':pub_url,
                                            'text-danger':!pub_url
                                        })}>
                                       {pub_url?pub_url:"Unavailable"}
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        Journal : {journal}
                                    </li>
                                </ul>
                                <hr />
                                <Link to="/" className="btn btn-secondary">
                                Back
                                </Link>
                        </div>
                    }
                }
                </Query>
            </Fragment>
        );
    }
} 
export default article;