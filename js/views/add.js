import React from 'react';

export default React.createClass({

  goHomeView() {
    console.log('Home clicked');
    this.props.onHomeClick();
  },

  addRecord() {
    console.log('Add clicked');
    this.props.onSubmitClick();
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
        
        <div className="addRecord" id="addDiv">
          <h2><i className="fa fa-music"></i> Add Record</h2>
          
          <form>
            <ul id="addForm">
              <li>Video URL: <input type="text" size="50" placeholder="video URL" className="video"/></li> 
              <li>Record Sleeve: <input type="text" size="50" placeholder="record sleeve URL" className="image"/></li> 
              <li>Song Title: <input type="text" size="50" placeholder="song title" className="title"/></li> 
              <li>Artist: <input type="text" size="50" placeholder="artist name" className="artist"/></li> 
              <li>Year Released: <input type="text" size="50" placeholder="year released" className="year"/></li> 
              <li>Highest UK Chart Position: <input type="text" size="50" placeholder="highest UK chart position" className="chart"/></li>
              <li>Information: <textarea rows="4" cols="50" placeholder="information about the song" className="info"></textarea></li>
            </ul>
            <button onClick={this.addRecord}>Add</button>
          </form>
        
        </div>

        <div id="footer">
          <h5>&copy; 2015 Viacom International Inc. All Rights Reserved. MTV and all related titles and logos are trademarks of Viacom International Inc. </h5>
        </div>
      
      </div>
    );

  }

});