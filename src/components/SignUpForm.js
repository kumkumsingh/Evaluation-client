import React from 'react'

export default function SignUpForm(props) {
    // console.log("props in signup", props)
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input
                name="name"
                type="text"
                onChange={props.onChange}
                value={props.value.name}
                placeholder="username">
                </input>

                <input
                name="email"
                type="email"
                onChange={props.onChange}
                value={props.value.email}
                placeholder="Email">
                </input>

                <input
                name="password"
                type="password"
                onChange={props.onChange}
                value={props.value.password}
                placeholder="Password">
                </input>

                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}