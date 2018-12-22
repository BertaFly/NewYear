import React from 'react';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 315,
      minHeight: 200,
      margin: '0 auto',
      padding: 30
    };

    const footerStyle = {
        display: 'flex',
        justifyContent: 'space-around'
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div className="footer" style={footerStyle}>
            <button onClick={this.props.retry}>
              Попробовать снова
            </button>
            <button onClick={this.props.goNext}>
              Дальше
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;