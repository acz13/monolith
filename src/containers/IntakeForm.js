import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import Spinner from 'react-spinkit'
import './IntakeForm.css'

class IntakeForm extends Component {
  render() {
    const { isSubmitting, submissionError, didSucceed, handleSubmit } = this.props

    let submitButtonContents = null

    if (isSubmitting) {
      submitButtonContents = <Spinner spinnerName="three-bounce"
      className="IntakeForm-spinner"
      noFadeIn />
    } else if (didSucceed) {
      submitButtonContents = <span>👍</span>
    } else if (submissionError) {
      submitButtonContents = <span>👎</span>
    } else {
      submitButtonContents = <span>Submit →</span>
    }

    return (
      <form className="IntakeForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">First and last name</label>
          <Field name="name" component="input" type="text"
                 placeholder="Zaphod Beeblebrox" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Preferred email</label>
          <Field name="email" component="input" type="text"
                 placeholder="zaphod@beeblebrox.com" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <Field name="gender" component="select">
            <option></option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </Field>
        </div>
        <div className="form-group">
          <label htmlFor="year">Year you'll graduate from high school</label>
          <Field name="year" component="select">
            <option></option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="Teacher">I'm a teacher</option>
          </Field>
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone number</label>
          <Field name="phone_number" component="input" type="text"
                 placeholder="+1 (424) 424-4242" />
        </div>
        <div className="form-group">
          <label htmlFor="slack_username">Slack username</label>
          <Field name="slack_username" component="input" type="text"
                 placeholder="zaphod"/>
        </div>
        <div className="form-group">
          <label htmlFor="github_username">GitHub username</label>
          <Field name="github_username" component="input" type="text"
                 placeholder="zbeeblebrox" />
        </div>
        <div className="form-group">
          <label htmlFor="twitter_username">Twitter username (if you have one)</label>
          <Field name="twitter_username" component="input" type="text"
                 placeholder="bigzaphod" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Full address (include state and zip code)</label>
          <Field name="address" component="textarea"
                 placeholder="4301 Beeblebrox Way, Galaxy City, CA 90210" />
        </div>
        <div className="form-group">
          <button type="submit" disabled={isSubmitting || didSucceed}>
            {submitButtonContents}
          </button>
        </div>
      </form>
    )
  }
}

IntakeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  submissionError: PropTypes.string,
  didSucceed: PropTypes.bool
}

IntakeForm = reduxForm({
  form: 'intake'
})(IntakeForm)

export default IntakeForm
