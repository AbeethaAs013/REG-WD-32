import React,{ PureComponent } from "react";
import jsPDF from 'jspdf';
import "jspdf-autotable";

export default class pdfGenerate extends PureComponent {

    constructor(props){
        super(props)
        this.state={

        }

}
jsPdfGenerator = () => {
    var doc = new jsPDF('p','pt');

     doc.autoTable({html:'#table'});
     let finalY=doc.lastAutoTable.finalY;
     doc.text(20,finalY,"hello")


    doc.save("my.pdf")
}

render(){
    return( <button type="button" className="btn btn-primary btn-lg mb-2 mr-3"onClick={this.jsPdfGenerator}>Generate PDF</button>)

}
}