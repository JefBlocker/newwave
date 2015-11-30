import React from 'react';

export default React.createClass({

  goHomeView() {
    this.props.onHomeClick();
  },

  addRecord() {
    this.props.onSubmitClick();
  },

  render() {
    return (
      <div>
        
        <div className="nav">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONZwJK1jtcjjMLc7J7BygFxAvo2kYeksq_DTaUSq6a1bVQKwGMWMFLGw5" id="mtvLogo"/>
          <p>Classic Music Videos</p>
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i>Home</button>
        </div> 
        
        <div className="addRecord">
          <h2><i className="fa fa-music"></i>Add Record</h2>
          
          <form>
            <label>Video URL: <input type="text" placeholder="video URL" className="video"/></label> 
            <label>Record Sleeve: <input type="text" placeholder="record sleeve URL" className="image"/></label> 
            <label>Song Title: <input type="text" placeholder="song title" className="title"/></label>
            <label>Artist: <input type="text" placeholder="artist name" className="artist"/></label>
            <label>Year Released: <input type="text" placeholder="year released" className="year"/></label>
            <label>Highest UK Chart Position: <input type="text" placeholder="highest UK chart position" className="chart"/></label>
            <label>Information: <input type="text area" placeholder="information about the song" className="info"/></label>
            <button onClick={this.addRecord}>Add</button>
          </form>
        
        </div>
      
      </div>
    );

  }

});