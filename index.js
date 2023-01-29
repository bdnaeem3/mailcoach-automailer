const express = require('express')
const { addList, addSubscriber, addCampaign, sendCampaign } = require('./utils/mailCoachAPIs');
const app = express()
const port = 3000

const subscriberList = ['bdnaeem3@gmail.com', 'muinaeem@gmail.com', 'naeem.ahmed@wanderly.com']

const sendPeriscopeData = async () => {
    const list = await addList('test mail 2')
    subscriberList.forEach(async item => {
        await addSubscriber(item, list.data.uuid)
    });
    const campaign = await addCampaign('test campaign 2', list.data.uuid)
    const done = sendCampaign(campaign.data.uuid)

    console.log('list', list);
    console.log('campaign', campaign);
    console.log('done', done);
};

sendPeriscopeData()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})