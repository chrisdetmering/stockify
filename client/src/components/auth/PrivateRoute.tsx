import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ children, isAuth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() =>
                isAuth ? (
                    children
                ) : (
                    <Redirect to="/" />
                )
            }
        />

    )
}