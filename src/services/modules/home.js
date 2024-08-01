import vanRquest from "..";

export function getHomeGoodsPriceData() {
  return vanRquest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return vanRquest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return vanRquest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return vanRquest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData() {
  return vanRquest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return vanRquest.get({
    url: "/home/plus",
  });
}
