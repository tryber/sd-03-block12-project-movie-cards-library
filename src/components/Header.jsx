import React from 'react';

export default class Header extends React.Component {
  render() {
    const styles = {
      color: 'whitesmoke',
      fontSize: '3rem',
    };

    return (
      <header>
        <h1 style={styles}>Movie Cards Library</h1>
      </header>
    );
  }
}
