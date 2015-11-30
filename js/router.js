import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import React from 'react';
import ReactDom from 'react-dom';

import {Discog as DiscogCollection} from './resources';
import {Record as RecordModel} from './resources';

import {
  Discog as DiscogView, 
  Record as RecordView,
  Add as AddView,
  Edit as EditView, 
  Spinner
} from './views';

export default Backbone.Router.extend({

  routes: {
    ""              : "redirectToDiscog",
    "discog"        : "showDiscog",
    "record/:id"    : "showRecord",
    "add"           : "addRecord", 
    "edit/:id"      : "editRecord"
  },

  initialize(appElement) {
    this.el = appElement;
    this.collection = new DiscogCollection();
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  start() {
    Backbone.history.start();
    return this;
  },

  goto(route) {
    this.navigate(route, {trigger: true});
  },

  redirectToDiscog() {
    this.navigate('discog', {replace: true, trigger: true});
  },

  spinner() {
    this.render(<Spinner/>);
  },

  showDiscog() {
    this.spinner();
    this.collection.fetch().then(() => {
      this.render(<DiscogView
        id={this.collection.objectId}
        onHomeClick={() => this.goto('')}
        onAddClick={() => this.goto('addrecord')}
        onEditClick={() => this.goto('editrecord/' + id)}
        onClick={(id) => this.goto('record/' + id)}
        newWave={this.collection.toJSON()}/>);
    });
  },

  showRecord(id) {
    this.spinner();
    let record = this.collection.get(id);

    if (record) {
      this.render(<RecordView
        newWave={record.toJSON()}
        onHomeClick={() => this.goto('')}
        onAddClick={() => this.goto('addrecord')}
        onEditClick={() => this.goto('editrecord/' + id)}/>);

    } else {
      record = this.collection.add(id);
      record.fetch().then(() => {
        this.render(<RecordView
          newWave={record.toJSON()}
          onHomeClick={() => this.goto('')}
          onAddClick={() => this.goto('addrecord')}
          onEditClick={() => this.goto('editrecord/' + id)}/>);
      });
    }
  },

  addRecord() {
    this.spinner();
    this.render(<AddRecord
      newWave={this.collection.toJSON()}
      onHomeClick={() => this.goto('')}
      onAddClick={() => this.goto('addrecord')}
      onSubmitClick={() => {
        let newVideo = document.querySelector('.video').value;
        let newImage = document.querySelector('.image').value;
        let newTitle = document.querySelector('.title').value;
        let newArtist = document.querySelector('.artist').value;
        let newYear = document.querySelector('.year').value;
        let newChart = document.querySelector('.chart').value;
        let newInfo = document.querySelector('.info').value;

        let songModel = new RecordModel({
          video: video,
          image: image,
          title: title,
          artist: artist,
          song: song,
          year: year,
          chart: chart,
          info: info
        });

        songModel.save().then(() => {
          alert('You record has been added.');
          this.goto('');
        });}}/>
      );
  },

  editRecord(id) {
    this.spinner();
    let getId = this.collection.get(id);
    this.render(<EditRecord
      newWave={this.collection.toJSON()}
      stored={getId.toJSON()}
      onBackClick={() => this.goto('record/' + id)}
      onHomeClick={() => this.goto('')}
      onAddClick={() => this.goto('addrecord')}
      onSubmitChangesClick={(id, video, image, title, artist, year, chart, info) => {
        this.saveChanges(id, video, image, title, artist, year, chart, info);}}/>
    );
  },

  saveChanges(id, video, image, title, artist, year, chart, info) {
    this.collection.get(id).save({
      objectId: id,
      video: video,
      image: image,
      title: title,
      artist: artist,
      year: year,
      chart: chart,
      info: info
    }).then(() => {
      alert('Record added.');
      this.goto('');
    });
  }


});