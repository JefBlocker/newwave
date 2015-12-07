import React from 'react';

export default React.createClass({

  getInitialState() {
    return ({
      objectId: this.props.stored.objectId,
      video: this.props.stored.video,
      image: this.props.stored.image,
      title: this.props.stored.title,
      artist: this.props.stored.artist,
      year: this.props.stored.year,
      chart: this.props.stored.chart,
      info: this.props.stored.info
    });
  },

  submitHandler(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.video, this.state.image, this.state.title, this.state.artist, this.state.year, this.state.chart, this.state.info);
  },

  setId(event) {
    let newId = event.currentTarget.value;

    this.setState({objectId: newId});
  },

  update(event) {
    let newVideo = event.currentTarget.value;

    this.setState({video: newVideo});
  },

  update(event) {
    let newImage = event.currentTarget.value;

    this.setState({image: newImage});
  },

  updateTitle(event) {
    let newTitle = event.currentTarget.value;

    this.setState({title: newTitle});
  },

  update(event) {
    let newArtist = event.currentTarget.value;

    this.setState({artist: newArtist});
  },

  update(event) {
    let newYear = event.currentTarget.value;

    this.setState({year: newYear});
  },

  update(event) {
    let newChart = event.currentTarget.value;

    this.setState({chart: newChart});
  },

  update(event) {
    let newInfo = event.currentTarget.value;

    this.setState({info: newInfo});
  },

  goHomeView() {
    this.props.onHomeClick();
  },

  addRecordView() {
    this.props.onAddClick();
  },

  addChanges(event) {
    event.preventDefault();
    this.props.onSubmitChangesClick(
      this.state.objectId,
      this.state.video,
      this.state.image,
      this.state.title,
      this.state.artist,
      this.state.year,
      this.state.chart,
      this.state.info
    );
  },

  goBackView() {
    this.props.onBackClick();
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

        <div className="edit-record" id="editDiv">
          <h2>Update Record</h2>
          
          <form onSubmit={this.submitHandler}>
            <ul id="editForm">
              <li>Id: <input onChange={this.setId} type="text" className="id" value={this.state.objectId}/></li>
              <li>Video URL: <input onChange={this.updateVideo} type="text" className="video" placeholder="video URL" value={this.state.video}/></li>
              <li>Image URL: <input onChange={this.updateImage} type="text" className="image" placeholder="image URL" value={this.state.image}/></li>
              <li>Title: <input onChange={this.updateTitle} type="text" className="title" placeholder="song title" value={this.state.title}/></li>
              <li>Artist: <input onChange={this.updateArtist} type="text" className="artist" placeholder="artist name" value={this.state.artist}/></li>
              <li>Year: <input onChange={this.updateYear} type="text" className="year" placeholder="year released" value={this.state.year}/></li>
              <li>Highest UK Chart Position: <input onChange={this.updateChart} type="text" className="chart" placeholder="highest UK chart position" value={this.state.chart}/></li>
              <li>About This Song: <input onChange={this.updateInfo} type="text" className="info" placeholder="information about the song" value={this.state.info}/></li>
            </ul>
            <button onClick={this.submitHandler}>Update</button>
            // <button onClick={this.addChanges}>Update</button>
          </form>

        </div>

        <div id="footer">
          <h5>&copy; 2015 Viacom International Inc. All Rights Reserved. MTV and all related titles and logos are trademarks of Viacom International Inc. </h5>
        </div>

      </div>
    );
  }


});
