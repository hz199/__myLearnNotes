/* eslint-disable */
const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './docs'

findMarkdown(rootDir, writeComponents)

function writeComponents(dir) {
  fs.appendFile(dir, `\n \n <CommentZHU/> \n `, (err) => {
    if (err) throw err
  })
}