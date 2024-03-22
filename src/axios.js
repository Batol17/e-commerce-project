import axios from 'axios'

const axiosIns = axios.create({
// You can add your headers here
// ================================
  baseURL: '###'
})
export default axiosIns