import Backbone from 'backbone';
import Record from './record';
// import {APP_URL} from '../parse_data';

export default Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/newWave',

  model: Record,

  parse(data) {
    return data.results;
  }
 
});