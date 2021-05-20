import fetch from '../http'

export function getUser(data) {
  return fetch({
    url: '/articleApi/getArticlePageListNew',
    method: 'post',
    data: data
  })
}

export function getHtml() {
  return fetch({
    // url: 'http://39.103.182.193/webroot/decision/view/report?viewlet=bin.cpt&id=1',
    url: 'https://blog.csdn.net/qq_42249896/article/details/86550731',
    method: 'get'
  })
}
