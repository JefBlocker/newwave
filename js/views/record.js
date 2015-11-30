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
          <img src="http://2.bp.blogspot.com/-11siAcQNJw0/Tfx7Qo9j3LI/AAAAAAAABmM/8j9EqyaHjHU/s500/MTV+International+logo+2009.png" id="mtvLogo"/>
          <p>Classic Music Videos</p>
          <button onClick={() => this.editRecordView()}><i className="fa fa-pencil-square-o"></i>Update</button>
          <button onClick={() => this.addRecordView}><i className="fa fa-plus-circle"></i>Add</button>
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i>Home</button>
          
          
        </div>

        <div className="record-view" id={this.props.newWave.id}>
          <iframe width="420" height="315" src="http://www.youtube.com/embed/{this.props.newWave.video}?html5=1">
</iframe>
          // <img src={this.props.newWave.image}/>
          <p><span className="title">{this.props.newWave.title}</span> by {this.props.newWave.artist}</p>

        </div>
      </div>
    );

  }

});