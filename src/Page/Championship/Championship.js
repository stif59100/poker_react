


const Championship = () => {
  return (
    <section className="row">
      <div className="col-12 col-lg-6 offset-3 championship">
        <table className="table my-3 bg-grey-dark color-gold-light border-gold-light my-3 w-100">
          <tbody>
            <tr colSpan="3"><th colSpan={3}><select><option>Sélectionnez le championnat</option></select></th></tr>
            <tr>
              <th>Place</th>
              <th>Joueurs</th>
              <th>Points</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Laurent</td>
              <td>68.5</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mickey</td>
              <td>54.5</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sébastien</td>
              <td>52.5</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Steeve</td>
              <td>51</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Samir</td>
              <td>37</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Olivier</td>
              <td>35.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>)
};
export default Championship;