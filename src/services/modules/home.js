import vanRquest from '..'

export function getHomeGoodsPriceData() {
  return vanRquest.get({
    url: '/home/goodprice'
  })
}

export default getHomeGoodsPriceData
