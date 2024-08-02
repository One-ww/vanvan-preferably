import vanRquest from "../request";

export function getEntireRoomlist(offset = 0, size = 20) {
  return vanRquest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
