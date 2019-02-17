import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
/*import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button"; */
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import UpdateForm from "./UpdateForm";
//https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Basic%20Table&selectedStory=basic%20table&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
const defaultSorted = [
  {
    dataField: "id",
    order: "asc"
  }
];
/* const selectRow = {
  mode: "checkbox",
  clickToSelect: true
}; */
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
);

class Crud extends Component {
  state = {
    user: [],
    columns: [
      {
        dataField: "id",
        text: "Product ID",
        sort: true /* ,
        headerStyle: {
          backgroundColor: "#c8e6c9"
        } */
      },
      {
        dataField: "title",
        text:
          "Product Name" /* ,
        headerStyle: {
          backgroundColor: "#c8e6c9"
        } */
      },
      {
        dataField: "description",
        text:
          "Product Description" /* ,
        headerStyle: {
          backgroundColor: "#c8e6c9"
        } */
      },
      {
        dataField: "url",
        text:
          "Product Url" /* ,
        formatter: (cellContent, row, event) => (
          <div>
            <a href={this.onClick.bind(this, row.url)} key={row.url} />
          </div>
        ) https://github.com/reactjs/react-modal*/

        /* ,
        headerStyle: {
          backgroundColor: "#c8e6c9"
        } */
      },
      {
        dataField: "Delet Product",
        text: "Delete",
        formatter: (cellContent, row, event) => (
          <div>
            <button
              onClick={this.handleDelete.bind(this, row)}
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </div>
        )

        /* ,
        headerStyle: {
          backgroundColor: "#c8e6c9"
        } */
      },
      ,
      {
        dataField: "Update Product",
        text: "Update",
        formatter: (cellContent, row, event) => (
          <div onClick={this.handleEdit.bind(this, row)}>
            {/* <button
              onClick={this.handleEdit.bind(this, row)}
              className="btn btn-sm btn-primary"
            > */}
            <EditProduct className="btn btn-sm " />
          </div>
        )
      }
    ]
  };
  /* triggerFoo() {
    this.foo.toggle();
  } */
  componentWillMount = () => {
    const url = `http://127.0.0.1:8086/JAXRS-RESTEasyCruds/rest/records/getAll/Records`;
    fetch(url)
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({ user: data });
      });
  };

  handleDelete = row => {
    // event.preventDefault();https://www.roytuts.com/reactjs-rest-api-put-example/
    const index = row.id;
    const dlt = `http://localhost:8086/JAXRS-RESTEasyCruds/rest/records/delete/${index}`;
    fetch(dlt, {
      method: "DELETE"
    });
    window.location.reload();
    alert("Deleted " + row.id);
  };
  handleEdit = row => {
    // event.preventDefault();https://www.roytuts.com/reactjs-rest-api-put-example/
    /* const index = row.id;
    const dlt = `http://localhost:8086/JAXRS-RESTEasyCrudMysql/rest/records/delete/${index}`;
    fetch(dlt, {
      method: "DELETE"
    });
    window.location.reload(); */
    return <UpdateForm />;

    alert("Clicked" + row.id);
  };
  /* handleProduct = () => {
    alert("clicked");
    return <AddProduct />;
  }; */
  render() {
    const CaptionElement = () => (
      <h3
        style={{
          borderRadius: "0.25em",
          textAlign: "center",
          color: "purple",
          border: "1px solid purple",
          padding: "0.5em"
        }}
      >
        Component as Header
      </h3>
    );
    const options = {
      paginationSize: 4,
      pageStartIndex: 1,
      // alwaysShowAllBtns: true, // Always show next and previous button
      //  withFirstAndLast: false, // Hide the going to First and Last page button
      // hideSizePerPage: true, // Hide the sizePerPage dropdown always
      // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      paginationTotalRenderer: customTotal,
      sizePerPageList: [
        {
          text: "5",
          value: 5
        },
        {
          text: "10",
          value: 10
        },
        {
          text: "All",
          value: this.state.user.length
        }
      ]
    };

    return (
      <div className="container" style={{ marginTop: 50 }}>
        {/*  {this.state.user.map(users => (
          <ul key={users.id}>
            <li>{users.title}</li>
            <li>{users.description}</li>
            <li>{users.url}</li>
          </ul>
        ))} https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/
        https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html?selectedKind=Footer&selectedStory=Footer%20Class&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel
        */}
        <div style={{ textAlign: "left" }}>
          <AddProduct />
        </div>
        <div style={{ paddingBottom: "10px" }} />
        <BootstrapTable
          //stripped
          hover
          condensed
          keyField="id"
          data={this.state.user}
          //caption={<CaptionElement />}
          columns={this.state.columns}
          defaultSorted={defaultSorted}
          //selectRow={selectRow}

          noDataIndication="Data not found"
          pagination={paginationFactory(options)}
          //rowStyle={{ backgroundColor: "Lightgray" }}
          // footerClasses="footer-class"
          // headerStyle="header-class"
        />
      </div>
    );
  }
}

export default Crud;
