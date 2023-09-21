import { TemplateBindingParseResult } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(dataArray:any[],searchTerm:string,searchKey:string): any {
    // variable to stoe outputdata
  const result:any=[]
    if(!dataArray||!searchTerm||!searchKey){
      return dataArray
    }
    else{
      // logic to transform
      dataArray.forEach((item:any)=>{
        if(item[searchKey].includes(searchTerm)){
          result.push(item)

        }
      })

      return result
    }

  }

}
