import React, { Component } from 'react'

export default class StudentProfileForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Enter Remarks</label>
                    <input name="remarks"></input>
                   <div>
                   <label>Evaluate</label>
                   <button type="button" class="btn btn-danger"></button>
                   <button type="button" class="btn btn-warning"></button>
                   <button type="button" class="btn btn-success"></button>
                   </div><br></br>
                   <button type="button" class="btn btn-primary">Save</button>
                   <button type="button" class="btn btn-primary">Save and Next</button>
                </form>
            </div>
        )
    }
}
