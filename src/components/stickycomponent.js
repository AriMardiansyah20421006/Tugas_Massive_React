import React from 'react';
import '../styles/styles.css'; 

class StickyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  }

  render() {
    const { isSticky } = this.state;

    return (
      <div className={`sticky-component ${isSticky ? 'sticky' : ''}`}>
        <h2>This is a sticky component</h2>
        <p>Scroll down to see it in action.</p>
      </div>
    );
  }
}

export default StickyComponent;
