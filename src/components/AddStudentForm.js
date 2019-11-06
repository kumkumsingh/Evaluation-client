import React from 'react'

export default function AddStudentForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <label>Full Name:</label>
                <input placeholder=' fullname' value={props.values.fullName} name="fullName" onChange={props.onChange}></input>
                <label>Image Url</label>
                <input placeholder='image url' value={props.values.imgUrl} name="imgUrl" onChange={props.onChange}></input>
                <button type="submit" className="btn btn-primary"> Add Student</button>

            </form>
        </div>
    )
}
