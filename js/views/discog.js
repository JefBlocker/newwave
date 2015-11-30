import React from 'react';

export default React.createClass({

  viewRecord(id) {
    this.props.onClick(id); 
  },

  goHomeView() {
    this.props.onHomeClick();
  },

  addRecordView() {
    this.props.onAddClick();
  },

  processData(data) {
    return (
      <div key={data.objectId}>
        <img id={data.objectId} onClick={() => this.viewRecord(data.objectId)} src={data.image}/>
      </div>
    );
  },

  render() {
    return (
      <div>
        <div id={this.props.newWave.id} className="nav">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONZwJK1jtcjjMLc7J7BygFxAvo2kYeksq_DTaUSq6a1bVQKwGMWMFLGw5" id="mtvLogo"/>
          <p>Classic Music Videos</p>
          <button onClick={this.addRecordView}><i className="fa fa-plus-circle"></i>Add</button>
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i>Home</button>
        </div>      

        <div className="discography">{this.props.newWave.map(this.processData)}</div>
      </div>
    );
  }

});
