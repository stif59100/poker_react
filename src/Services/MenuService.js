
import { Menus } from "../Constantes/Menus"
// Fonction qui trie le menu en fonction de l'utilisateur
// authentifié et de sa proprieté Order Ou OrderLoggedIn
export const MenuSorted = (user) => {
  var menu = [];
  console.log(user)

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
