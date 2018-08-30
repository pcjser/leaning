import { promisify } from 'util'
import { resolve as r } from 'path'
import { readFile, writeFileSync as wfs } from 'fs'
import * as qs from 'querystring'

promisify(readFile)(r(__dirname, '../package.json'))
  .then(data => {
    data = JSON.parse(data)

    console.log(data)

    wfs(r(__dirname, './name.txt'), String(data.name), 'utf-8')
  })