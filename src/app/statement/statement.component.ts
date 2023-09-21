import { Component, OnInit } from '@angular/core';
import { ServService } from '../BankServices/serv.service';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';
@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit{
accno:any=""
transactionArray:any=[]
spinner:any=true
date:any=""
searchTerm:any=""
constructor(private service:ServService){

}

  ngOnInit(): void {
    if (localStorage.getItem("currentacno")) {
      this.accno = JSON.parse(localStorage.getItem("currentacno") || "")
      console.log(this.accno);
      
    }
    this.service.accountStatementApi(this.accno).subscribe({
      next:(result:any)=>{
        this.transactionArray=result.message
        console.log(this.transactionArray);
        
      }
    })
    setTimeout(()=>{
      this.spinner=false

    },2000)
    this.date=new Date()
    }
    filterData(search:any){
      this.searchTerm=search
    }
    pdfexport(){
      var pdf = new jsPDF()
      // set colums
      var col=["Method","Amount","Account Number","Date"]
      // set row
      let row =[]
      // styl
      pdf.setFontSize(16)
      pdf.text("Account Statement",15,10)
      pdf.setFontSize(12)
      pdf.setTextColor("blue")
      //array of array nested array
      var allDataArray = this.transactionArray
      for(let i of allDataArray){
        let rowData=[i.method,i.Amount,i.tAcno,i.Date]
        row.push(rowData)
        

      }
      // converted to pdf as table
      (pdf as any).autoTable(col,row,{startY:15})
      //pdf in new window
      pdf.output("dataurlnewwindow")
      // save pdf
      pdf.save("Account statement.pdf")
    }



}
