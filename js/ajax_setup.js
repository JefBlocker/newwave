import $ from 'jquery';

const APP_ID = '24uFlaA9GrHN8mSP3Inp4K7JPYNhr1NoIVd0tgTE';
const API_KEY = 'E06HyxN5m0cUB9nT6ADplkEJaomN4mTSaLg9mlQH';
const APP_URL = 'https://api.parse.com/1/classes/newWave';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});