import axios from 'axios'
const baseURL = `https://us-central1-nft-cloud-functions.cloudfunctions.net`

async function getNFTS() {
    try {
      const res = await axios.get(`${baseURL}/hotCollections`);
      return res // Return the data directly from the response
    } catch (error) {
      return error;
    }
  }
async function getNewItems(){
  try {
    const res = await axios.get(`${baseURL}/newItems`);
    return res  // Return the data directly from the response
  } catch (error) {
    return error;
  }
}
async function getTopSellers(){
  try {
    const res = await axios.get(`${baseURL}/topSellers`);
    return res  // Return the data directly from the response
  } catch (error) {
    return error;
  }
}
async function getExplore(){
  try {
    const res = await axios.get(`${baseURL}/explore`);
    return res  // Return the data directly from the response
  } catch (error) {
    return error;
  }
}
  

export { getNFTS, getNewItems, getTopSellers, getExplore }

