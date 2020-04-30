import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Mutation, graphql } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import {DELETE_ARTICLE_QUERY} from './queries/ArticleQueries';