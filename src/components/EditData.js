import React from 'react'
import Button from '../components/Button'
import '../styles/EditForm.css'

export default class EditData extends React.Component {
  render() {
    if(this.props.edit){
        return (
            <div className="formContainer">
                <form className="form">
                    <h3 className="form--title">Edit Task</h3>
                    <input type="text" className='form--input' value={this.props.editData} onChange={this.props.change}/>
                    <div className="buttons">
                        <Button text="Save" variant="success" action={this.props.save}></Button>
                        <Button text="Cancel" variant="danger" action={this.props.close}></Button>
                    </div>
                </form>
            </div>
        )       
    }
  }
}
