import React, { Component } from 'react';

class Validation extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }
    }

    processInput = (obj) => {
        let fields = this.state.fields;
        fields[obj.target.name] = obj.target.value;
        this.setState({
            fields
        })

    }

    save = (obj) => {
        //it's block a action(prevent from refresh).
        obj.preventDefault();
        let status=true;    
        let errors=this.state.errors;
        let fields=this.state.fields;

        if( (!fields["fname"]) || (fields["fname"].length==0) )
        {
            status=false;
            errors["nameerror"]="please enter the name";
        }
        else
        {
            errors["nameerror"]="";
        }

    //mobile validation start here
        let mpattern= /^[6-9]\d{9}$/;

        if( (!fields["mobile"]) || (! mpattern.test(fields["mobile"])) )
        {
            status=false;
            errors["mobileerror"]="please enter valid number";
        }
        else
        {
            errors["mobileerror"]="";
        }
    
    //email validation start here
        let epattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if( (!fields["email"]) || (! epattern.test(fields["email"])) )
        {
            status=false;
            errors["emailerror"]="please enter valid email Id";
        }
        else
        {
            errors["emailerror"]="";
        }

    //textarea validation
        if( (!fields["message"]) || (fields["message"].length==0) )
        {
            status=false;
            errors["messageerror"]="minimum 20 characters required";
        }
        else
        {
            errors["messageerror"]="";
        }

        this.setState({
            errors:errors
        })

        if(status==true)
        {
            alert("form sucess ! please wait processing")
        }

    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2 className="text-success text-center">Form Validation</h2>
                        <form action="#" method="POST" onSubmit={this.save}>

                            <div className="form-group">
                                <label>FullName</label>
                                <input type="text"
                                    className="form-control"
                                    name="fname"
                                    onChange={this.processInput}
                                />
                                <i className="text-danger">{this.state.errors.nameerror}</i>
                            </div>

                            <div className="form-group">
                                <label>Mobile No</label>
                                <input type="text"
                                    className="form-control"
                                    name="mobile"
                                    onChange={this.processInput}
                                />
                                   <i className="text-danger">{this.state.errors.mobileerror}</i>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={this.processInput}
                                />
                                  <i className="text-danger">{this.state.errors.emailerror}</i>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control"
                                    name="message"
                                    onChange={this.processInput}>
                                </textarea>
                                <i className="text-danger">{this.state.errors.messageerror}</i>
                            </div>

                            <div className="text-center">
                                <button className="btn btn-primary">Send message</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }
}

export default Validation;