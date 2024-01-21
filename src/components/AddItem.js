import React from "react";

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            price : 0,
            quantity : 0,
          }
    }
    render() {
        return (
            <form className="row mb-4" onSubmit={(e) => { e.preventDefault(); this.props.AddItems(this.state.name,Number(this.state.price)) }}>
                <div className="mb-3 col-4" >
                    <label htmlFor="exampleInputName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" name="name" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="exampleInputPrice" className="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPrice" name="price" onChange={(e) => this.setState({ price: e.target.value })} value={this.state.price}/>
                </div>
                <div className="mb-3 col-4 d-flex justify-content-center align-items-end">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        );
    }
}

export default AddItem;