import React from 'react'
import { Route } from 'react-router-dom'
import NotFound404 from './Components/root/NotFound404';

function AdminRoute() {
    return (
        <>
            <Route path="*" component={NotFound404} />
        </>
    )
}

export default AdminRoute
