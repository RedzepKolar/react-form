import CustomInput from "./components/CustomInput";

function App() {
  /**
   * Napraviti formu za dodavanje gradova i temperatura
   * ime grada
   * drzava
   * temperatura(broj)
   * tehnicki zahtjevi: components, state
   */

  return (
    <div className="container">
      <div className="row vh-100 d-flex justify-content align-items-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <div className="mb-3 mt-4">
                <h5 className="fw-bold text-uppercase mb-2">Weather form</h5>
                <form className="mb-3">
                  <CustomInput labelName="Ime grada" type="text" />
                  <CustomInput labelName="Ime drzave" type="text" />
                  <CustomInput labelName="Temperatura" type="number" />
                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                      Unesi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
