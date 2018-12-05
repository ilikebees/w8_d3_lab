const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function () {
  this.url = 'http://localhost:3000/api/bucketlist';
  this.request = new RequestHelper(this.url);
}

BucketList.prototype.getData = function () {
  this.request.get()
    .then((bucketlist) => {
      PubSub.publish('BucketList:data-loaded', bucketlist);
    })
    .catch(console.error);
};

module.exports = BucketList;
