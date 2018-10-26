export default class ToolService {
  constructor () {
    this.save = 'save'
    this.batchSave = 'batch_save'
    this.update = 'update'
    this.batchUpdate = 'batch_update'
    this.remove = 'remove'
    this.batchRemove = 'batch_remove'
    this.getByPk = 'get_by_pk'
    this.getAll = 'get_all'
    this.paging = 'paging'
    this.getVOByPk = 'get_vo_by_pk'
    this.getAllVO = 'get_all_vo'
    this.pagingVO = 'paging_vo'
  }
  getConfig (data) {
    if (data) {
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }
    } else {
      return {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }
  }
  getUrl (parameter) {
    let url = '?pro=' + parameter.pro
    if (parameter.action && parameter.action !== '') {
      url = url + '&action=' + parameter.action
    }
    if (parameter.primaryKey && parameter.primaryKey !== '') {
      url = url + '&primaryKey=' + parameter.primaryKey
    }
    if (parameter.rows && parameter.rows != null) {
      url = url + '&rows=' + parameter.rows
    }
    if (parameter.page && parameter.page != null) {
      url = url + '&page=' + parameter.page
    }
    if (parameter.token && parameter.token !== '') {
      url = url + '&token=' + parameter.token
    }
    return url
  }
  getPagingUrl (parameter, rows, page) {
    let url = '?pro=' + parameter.pro
    if (parameter.action && parameter.action !== '') {
      url = url + '&action=' + parameter.action
    }
    if (parameter.primaryKey && parameter.primaryKey !== '') {
      url = url + '&primaryKey=' + parameter.primaryKey
    }
    if (parameter.rows && parameter.rows != null) {
      if (rows > 0) {
        parameter.rows = rows
      }
      url = url + '&rows=' + parameter.rows
    }
    if (parameter.page && parameter.page != null) {
      if (page > 0) {
        parameter.page = page
      }
      url = url + '&page=' + parameter.page
    }
    if (parameter.token && parameter.token !== '') {
      url = url + '&token=' + parameter.token
    }
    return url
  }
}
