import Backbone from 'backbone';
import Record from './record';

export default Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/newWave',

  model: Record,

  parse(data) {
    return data.results;
  }
 
});