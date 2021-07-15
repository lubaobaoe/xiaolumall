import {request} from 'network/request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeMsgDate() {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}