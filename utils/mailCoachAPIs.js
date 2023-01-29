const axios = require('../config/axios');

const addList = (name, defaultEmail="saidur@tanimapparels.com") => {
  return axios.post('/email-lists', {
    "name": `Periscope email for ${name}`, 
    "default_from_email": defaultEmail
  }).then(res=>{
    return res.data
  }).catch(err=>{
    console.log('err', err)
  })
}

const addSubscriber = (email, listUUID) => {
  return axios.post(`/email-lists/${listUUID}/subscribers`, {
    "email": email,
    "skip_confirmation": true
  }).then(res=>{
    return res.data
  }).catch(err=>{
    console.log('err', err)
  })
}

const addCampaign = (name, listUUID) => {
  return axios.post('/campaigns', {
    "name": `Periscope campaign for ${name}`,
    "email_list_uuid": listUUID,
  }).then(res=>{
    return res.data
  }).catch(err=>{
    console.log('err', err)
  })
}

const sendCampaign = (campaignUUID) => {
  return axios.post(`/campaigns/${campaignUUID}/send`).then(res=>{
    return res.data
  }).catch(err=>{
    console.log('err', err)
  })
}

module.exports = {
  addList,
  addSubscriber,
  addCampaign,
  sendCampaign
}