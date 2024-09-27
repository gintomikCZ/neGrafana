import { Controller, Tag } from 'st-ethernet-ip'

const controllerIp = '192.168.5.233'
let connected = false

const cont = new Controller()
cont.connect(controllerIp, 0).then(() => {
  connected = true
})


export default {
  // tags - array of tagNames
  getData(tags) {
    const promises = tags.map(tag => {
      const myTag = new Tag(tag)
      return cont.readTag(myTag).then(() => {
        return myTag.value
      })
      
    })
    return Promise.all(promises).then(data => {
      return data
    })
  }
}
