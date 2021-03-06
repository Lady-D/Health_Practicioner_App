import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Table, TableBody,
TableHeader, TableHeaderColumn,
TableRow, TableRowColumn} from 'material-ui/Table'


//Table listing doctor information and their specialties/services they provide

//Initialize state

class DocInfoTable extends Component {
  constructor(props) {
  super(props);
this.state ={
      docinfo:{},
      docinfoLoaded: false
    }
     this.fetchDocinfo = this.fetchDocinfo.bind(this);
     this.renderDocinfo= this.renderDocinfo.bind(this);
  }

//fetch all information stored in the Docinfo databse table

  fetchDocinfo() {
    fetch('/docinfo')
    .then((resp) => {
      console.log('doctest',resp);
      if(!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then((respBody) => {
      this.setState({
        docinfo: respBody.data,
        docinfoLoaded: true
      })
console.log('docinfo',this.state)
    })
  }

//make the information available as soon as the view loads or mounts
  componentDidMount() {
    console.log('test this docinfo componentdidmount');
    this.fetchDocinfo();
  }

  // map through the information to create MUI table rows for each data set

    renderDocinfo() {
    if(this.state.docinfoLoaded) {
      return (this.state.docinfo.map((docinfotext) => {
        return (
         <div key= {docinfotext.id}>
          <MuiThemeProvider>
              <Table>
                <TableHeader>
                  <TableRow>
                      <TableHeaderColumn>First Name</TableHeaderColumn>
                      <TableHeaderColumn>Last Name</TableHeaderColumn>
                      <TableHeaderColumn>Specialty</TableHeaderColumn>
                      <TableHeaderColumn>Affiliations</TableHeaderColumn>
                      <TableHeaderColumn>Board Certifications</TableHeaderColumn>
                  </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableRowColumn>{docinfotext.doc_fname}</TableRowColumn>
                  <TableRowColumn>{docinfotext.doc_lname}</TableRowColumn>
                  <TableRowColumn>{docinfotext.specialty}</TableRowColumn>
                  <TableRowColumn>{docinfotext.affiliations}</TableRowColumn>
                  <TableRowColumn>{docinfotext.board_certs}</TableRowColumn>
                </TableRow>
              </TableBody>
             </Table>
            </MuiThemeProvider>
            </div>
        )
      }))

      } else {
      return (<h2>* Loading * </h2>)
    }
  }

//display the title and table

    render(){
      return (
        <div className ="docservicesTable">
          <h1 className ="title">Physician Information and Medical Services</h1>
            { this.renderDocinfo() }
        </div>
      )

  }
}

export default DocInfoTable

