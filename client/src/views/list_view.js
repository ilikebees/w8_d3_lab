const PubSub = require('../helpers/pub_sub.js');

const ListView = function(container){
  this.container = container;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (evt) => {
    const bucketList = evt.detail;
    this.banana(bucketList);
  });
};

ListView.prototype.banana = function (apples) {
  apples.forEach((listItem) => {
    let heading = document.createElement('h2');
    heading.textContent = listItem.name;
    this.container.appendChild(heading);

  });
};

module.exports = ListView;
