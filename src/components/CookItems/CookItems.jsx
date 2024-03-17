const CookItems = (props) => {

    const { cookItems } = props;

    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl font-semibold">Want to cook: {cookItems.length}</h1>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-2xl font-semibold">Currently cooking: </h1>
            </div>
        </div>
    );
};

export default CookItems;