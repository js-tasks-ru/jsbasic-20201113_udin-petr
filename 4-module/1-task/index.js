/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendsList = document.createElement("ul");
  for (elem of friends) {
    let item = document.createElement('li')
      item.innerHTML = `${elem.firstName} ${elem.lastName}`
      friendsList.append(item)
  }
return  friendsList
}
