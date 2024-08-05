let ConPri = ()=>
{
    return(
        <div>
            <h2>Consent and Privacy</h2>
            <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label className="form-check-label" for="invalidCheck2">
        I consent to recieve treatement for my health condition.
      </label>
    </div>
  </div>
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label className="form-check-label" for="invalidCheck2">
      I consent to the use and disclosure of my health information for treatment purposes.

      </label>
    </div>
  </div>

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
      <label className="form-check-label" for="invalidCheck2">
      l acknowledge that | have reviewed and agree to the privacy policy.
      </label>
    </div>
  </div>

  <div className="d-grid gap-2">
  <button className="btn btn-primary" type="button">Submit and continue</button>
  
</div>
        </div>

    )
}
export default ConPri