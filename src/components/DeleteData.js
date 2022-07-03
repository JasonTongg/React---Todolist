import React from 'react'
import Button from '../components/Button'
import '../styles/DeleteForm.css'

export default function DeleteData({confirm, del, closeConfirm, data}) {

    const delbyid = (id) => {
        console.log("masuk");
        del(id);
    }

    if(confirm){
        return (
            <div className="formContainer">
                <div className="form">
                    <h3 className="form--title">Are you sure?</h3>
                    <div className="buttons">
                        <Button text="delete" variant="success" action={() => delbyid(data)}></Button>
                        <Button text="Cancel" variant="danger" action={closeConfirm}></Button>
                    </div>
                </div>
            </div>
        )
    }
}
