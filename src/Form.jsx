import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", desc: "", url: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    fetch(`http://localhost:8086/JAXRS-RESTEasyCruds/rest/records/userw`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.name,
        description: this.state.desc,
        url: this.state.url
      })
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    window.location.reload();
    alert("Record saved successfully");
  }
  render() {
    return (
      <div className="col-sm-12">
        <form
          name="blog_post"
          className="form-horizontal"
          onSubmit={this.handleSubmit}
        >
          <div id="blog_post">
            <div className="form-group">
              <label
                className="col-sm-4 control-label required"
                htmlFor="blog_post_title"
              >
                Product Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onChange={e => this.setState({ name: e.target.value })}
                  required="required"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="col-sm-6 control-label required"
                htmlFor="blog_post_body"
              >
                Product Description
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onChange={e => this.setState({ desc: e.target.value })}
                  required="required"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="col-sm-4 control-label required"
                htmlFor="blog_post_body"
              >
                Product URL
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onChange={e => this.setState({ url: e.target.value })}
                  required="required"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2" />
              <div className="col-sm-10">
                <button
                  type="submit"
                  id="blog_post_submit"
                  className="btn-primary btn"
                >
                  Save Product
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
