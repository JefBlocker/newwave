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

  setId(event) {
    let newId = event.currentTarget.value;

    this.setState({objectId: newId});
  },

  update(event) {
    let newVideo = event.currentTarget.value;

    this.setState({video: Video});
  },

  update(event) {
    let newImage = event.currentTarget.value;

    this.setState({image: newImage});
  },

  updateTitle(event) {
    let newtitle = event.currentTarget.value;

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
          <img src="http://2.bp.blogspot.com/-11siAcQNJw0/Tfx7Qo9j3LI/AAAAAAAABmM/8j9EqyaHjHU/s500/MTV+International+logo+2009.png" id="mtvLogo"/>
          <p>Classic Music Videos</p>
          <button onClick={this.addRecordView}><i className="fa fa-plus-circle"></i>Add</button>
          <button onClick={() => this.goBackView()}><i className="fa fa-chevron-left"></i>Back</button>
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i>Home</button>
          
        </div> 

        <div className="edit-record">
          <h2>Update Record</h2>
          
          <form>
            <label>Id: <input onChange={this.setId} type="text" className="id" value={this.state.objectId}/></label>
            <label>Video URL: <input onChange={this.updateVideo} type="text" className="video" placeholder="video URL" value={this.state.video}/></label>
            <label>Image URL: <input onChange={this.updateImage} type="text" className="image" placeholder="image URL" value={this.state.image}/></label>
            <label>Title: <input onChange={this.updateTitle} type="text" className="title" placeholder="song title" value={this.state.title}/></label>
            <label>Artist: <input onChange={this.updateArtist} type="text" className="artist" placeholder="artist name" value={this.state.artist}/></label>
            <label>Year: <input onChange={this.updateYear} type="text" className="year" placeholder="year released" value={this.state.year}/></label>
            <label>Highest UK Chart Position: <input onChange={this.updateChart} type="text" className="chart" placeholder="highest UK chart position" value={this.state.chart}/></label>
            <label>About This Song: <input onChange={this.updateInfo} type="text" className="info" placeholder="information about the song" value={this.state.info}/></label>
            <button onClick={this.addChanges}>Update</button>
          </form>

        </div>
      </div>
    );
  }


});
