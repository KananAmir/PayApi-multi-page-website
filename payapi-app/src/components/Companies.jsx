import React, { Component } from 'react'
import '../styles/companies.css'
import tesla from '../assets/shared/desktop/tesla.svg'
import microsoft from '../assets/shared/desktop/microsoft.svg'
import hewlettPackard from '../assets/shared/desktop/hewlett-packard.svg'
import oracle from '../assets/shared/desktop/oracle.svg'
import nvidia from '../assets/shared/desktop/nvidia.svg'
import google from '../assets/shared/desktop/google.svg'

export default class Companies extends Component {
    render() {
        return (
            <div className="companies">
                <div className="row mb-5 partners">
                    <div className="col-6 col-md-4 mb-4"><img style={{filter: this.props.filter}} className="company-logo" src={tesla} alt="tesla" /></div>
                    <div className="col-6 col-md-4 mb-4"><img style={{filter: this.props.filter}} className="company-logo" src={microsoft} alt="mocrosoft" /></div>
               
                
                    <div className="col-6 col-md-4 mb-4"><img style={{filter: this.props.filter}} className="company-logo" src={hewlettPackard} alt="tesla" /></div>
                    <div className="col-6 col-md-4 mb-4"><img style={{filter: this.props.filter}} className="company-logo" src={oracle} alt="mocrosoft" /></div>
                
                
                    <div className="col-6 col-md-4 mb-4"><img style={{filter: this.props.filter}} className="company-logo" src={google} alt="mocrosoft" /></div>
                    <div className="col-6 col-md-4 mb-4"><img style={{filter: this.props.filter}} className="company-logo" src={nvidia} alt="tesla" /></div>
                </div>             
            </div>
        )
    }
}
