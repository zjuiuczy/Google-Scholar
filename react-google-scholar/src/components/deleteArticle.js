import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Mutation, graphql } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

const DELETE_ARTICLE_QUERY = gql`
    mutation deleteArticle($article_id: ID!){
        deleteArticle(
            article_id: $article_id
        )
    }
`;

class deleteArticle extends Component{
    deleteArticle(mutation){
        if(window.confirm('Are you sure to delete?')){
            mutation()
        }
    }
    render(){
        let {article_id} = this.props.match.params;
        return(
            <div className="edit-btn-container">
                <Mutation 
                mutation = { DELETE_ARTICLE_QUERY } 
                variables = { { article_id } } 
                onCompleted = { () => window.location.replace("../")}>
                {postMutation => <button onClick={ () => this.deleteArticle(postMutation)}>DELETE</button>}               
                </Mutation> 
            </div>
        )
    }
}
export default deleteArticle;