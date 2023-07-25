
import { Menus, MenusMappedConst } from "../Constantes/Menus"
// Fonction qui trie le menu en fonction de l'utilisateur
// authentifié et de sa proprieté Order Ou OrderLoggedIn
const MenuSorted = (user) => {
  var menu = [];

  if (user?.loggedIn) {
    menu = Menus.sort(
      // comparaison de la valeur actuelle avec la précédente valeur
      // menu valeur actuelle menu1 valeur suivante
      (menu, menu1) => {
        if (menu.orderLoggedIn < menu1.orderLoggedIn) {
          return -1;
        }
        else if (menu.orderLoggedIn > menu1.orderLoggedIn) {
          return 1;
        }
        else
          return 0;
      });
  }
  else {
    menu = Menus.sort(
      (menu, menu1) => {
        if (menu.order < menu1.order)
          return -1;
        else if (menu.order > menu1.order)
          return 1;
        else
          return 0;
      });
  }
  return menu;
}

const MenusMapped = (url, name) => {
  let mapped = false;
  MenusMappedConst.forEach((menu, index) => {
    if (menu.path === url && name === menu.menusMapped) {
      mapped = true;
    }
  })
  return mapped;
}
export {
  MenuSorted,
  MenusMapped
}
