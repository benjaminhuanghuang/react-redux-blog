import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
//


class PostNew extends Component {
  renderTitleField(field)
  {

  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderTitleField}/>
      </form>
    );
  }
}

export default reduxForm({form: 'PostNewForm'})(PostNew);
·