import React from 'react';

const ProductList = () => {
    return (
        <div>
            <table className="table is-stripped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Title</td>
                        <td>999</td>
                        <td>
                            <button className="button is-small is-info">Edit</button>
                            <button className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default ProductList;