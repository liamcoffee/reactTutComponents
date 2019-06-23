import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 2:15PM" image={faker.image.avatar()} commentTxt={faker.lorem.text()} />
            <CommentDetail author="Jim" timeAgo="Today at 6:15PM"  image={faker.image.avatar()} commentTxt={faker.lorem.text()}/>
            <CommentDetail author="Chuck" timeAgo="Today at 5:15PM"  image={faker.image.avatar()} commentTxt={faker.lorem.text()}/>
            <CommentDetail author="Bill" timeAgo="Today at 9:15AM"  image={faker.image.avatar()} commentTxt={faker.lorem.text()}/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));