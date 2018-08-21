import React, { Component } from "react";

export class HomeComponent extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            products: [
                {productId:1, productName: "rr310", unitPrice: 250000, unitsInStock: 2},
                {productId:1, productName: "R15 v3", unitPrice: 140000, unitsInStock :43}
            ]
        };
    }
    render(){
        var myStyle = {
            backgroundColor: "deepskyblue",
            margin: 5, padding: 5, color:"white"
        };
        return(
            <div className="container">
                <h1>welcome to REACT JS</h1>
                <button style={myStyle} > save </button>
                <span> {this.state.products[0].productName}</span>
                <span> {this.state.products[1].productName}</span>
            </div>
        );
    }
}