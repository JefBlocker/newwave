import React from 'react';

export default React.createClass({

  goHomeView() {
    this.props.onHomeClick();
  },

  addRecordView() {
    this.props.onAddClick();
  },

  editRecordView() {
    this.props.onEditClick();
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
            <button onClick={this.editRecordView}><i className="fa fa-plus-pencil"></i>Edit</button>
          </div>  
        </div>

        <div className="record-view" id={this.props.newWave.id} id="recordView">
          <ul id="singleView">
            <li><iframe width="420" height="315" src={this.props.newWave.video} frameBorder="1" allowFullScreen></iframe></li>
            <li>Title: "{this.props.newWave.title}"</li>
            <li>Artist: {this.props.newWave.artist}</li>
            <li>Released: {this.props.newWave.year}</li>
            <li>Highest UK Chart Placing: {this.props.newWave.chart}</li>
            <li>Info: {this.props.newWave.info}</li>
          </ul>
        </div>

        <div id="footer">
          <h5>&copy; 2015 Viacom International Inc. All Rights Reserved. MTV and all related titles and logos are trademarks of Viacom International Inc. </h5>
        </div>
        
      </div>
    );

  }

});