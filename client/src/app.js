const BucketList = require('./models/bucket_list.js');
const ListView = require('./views/list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const bucketList = new BucketList;
  bucketList.getData();

  const bucketListContainer = document.querySelector('.list');

  const bucketListView = new ListView(bucketListContainer);
  bucketListView.bindEvents();

});
