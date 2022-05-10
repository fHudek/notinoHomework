import React from 'react';

export class Todo extends React.PureComponent<any> {
    handleOnClick() {
        window.location.href = '/detail';
    }

    render() {
        return (
            <div>
                <div onClick={this.handleOnClick}>{this.props.todo.title}</div>
            </div>
        );
    }
}
