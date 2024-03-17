const CookItems = (props) => {

    const { cookItems, prepareItems, handlePrepareItem } = props;

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
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    cookItems.map((cookItem, index) =><tr key={cookItem.id}> <th>{index+1}</th>
                                    <td>{cookItem.title}</td>
                                    <td>{cookItem.cook_time}<br/>min</td>
                                    <td>{cookItem.calories}<br/>calories</td>
                                    <td><button onClick={() => handlePrepareItem(cookItem.id, cookItem)} className="btn rounded-full bg-[#0BE58A] font-bold">Preparing</button></td></tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-2xl font-semibold">Currently cooking: {prepareItems.length}</h1>

                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    prepareItems.map((prepareItem, index) =><tr key={prepareItem.id}> <th>{index+1}</th>
                                    <td>{prepareItem.title}</td>
                                    <td>{prepareItem.cook_time}<br/>min</td>
                                    <td>{prepareItem.calories}<br/>calories</td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookItems;