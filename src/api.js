import {V2_API_URL} from './env'

export async function getApiKeys(token) {
    // https://api.sendwyre.com/v2/apiKeys
    //V2_API_URL
    const data = {
      desc: 'Edge Wallet',
      type: 'ALL',
      ipWhitelist: []
    }
    const request = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer '+ token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const url = V2_API_URL + 'apiKeys'
    console.log('url', url)
    console.log('request', request)
    // window.edgeProvider.consoleLog(' API -  '+ url)
    const response = await window.fetch(url, request)
    console.log('Response ', response)
    if (response.status !== 200) {
        throw new Error('Non 200 response code:' + response.status)
    }
    return window.fetch(url, request)
  }