  
const Authentication = () => {
  return (
  <section className="u-align-center u-clearfix u-image u-shading u-valign-bottom-xs u-section-1" src=""
    data-image-width="1440" data-image-height="900" id="sec-f665">
    <div className="u-clearfix u-sheet u-sheet-1">
      <form id="formulaire" className="u-text u-text-default u-title u-text-1" method="post">
        <div className="u-clearfix u-sheet u-sheet-1">
          <label>Identifiant</label>
          <input className="name" type="text" value="Votre adresse email ou pseudo"/><br/>
          <label>Mot de passe</label>
          <input className="name" type="password" placeholder="Votre mot de passe"/><br/>
          <input type="submit" value="Envoyer" />
          <div className="submitForm">Identifiant ou mot de passe oublié?</div>
        </div>
      </form>
    </div>
  </section>
  )};
  export default Authentication;