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
        <div className="nav">
          <div id="logoTag">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONZwJK1jtcjjMLc7J7BygFxAvo2kYeksq_DTaUSq6a1bVQKwGMWMFLGw5" id="mtvLogo"/>
            <p>Classic Music Videos</p>
          </div>
          <div id="navBtns">
            <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i>Home</button>
            <button onClick={this.addRecordView}><i className="fa fa-plus-circle"></i>Add</button>
          </div>  
        </div>      

        <div id="recordSleeves" className="discography">{this.props.newWave.map(this.processData)}</div>
        <div id="footer">
          <h5>&copy; 2015 Viacom International Inc. All Rights Reserved. MTV and all related titles and logos are trademarks of Viacom International Inc. </h5>
        </div>
      </div>

      

    );
  }

});
