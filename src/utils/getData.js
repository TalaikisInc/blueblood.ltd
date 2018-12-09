import { tsvParse } from  'd3-dsv'
import { timeParse } from 'd3-time-format'

const parseData = (parse) => {
  return (d) => {
    const i = Object.values(d)[0].split(',')
    d.date = parse(i[0])
    d.open = +i[2]
    d.high = +i[3]
    d.low = +i[4]
    d.close = +i[5]
    d.volume = +i[6]
    return d
  }
}

const parseDate = timeParse('%Y.%m.%d')

const getData = (name) => {
  if (name) {
  const promise = fetch(`${process.env.REACT_APP_DATA_SRC}${name}.tsv`).then((res) => {
      return res.text()
    }).then((data) => {
      return tsvParse(data, parseData(parseDate))
    })
  return promise
  }
}

export default getData
