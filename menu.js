///////////////welcome to the world famous record store where you can find the latest records.Today we are really busy please let us know if you wnat to create,delete,view,display your spot in line./////
class record {
    constructor(name, position){
        this.name = name;
        this.position = position;
    }
  
    describe(){
        return  `${this.record} plays ${this.position}`;
    }
  }
         ////////////////there are two classes with one array class & record are the classes with spot holding an array 
  class spot{
    constructor(name){
        this.name = name;
        this.record = [];
    }
  
    addRecord(record){
        if(record instanceof record){
            this.record.push(record);
        } else {
            throw new Error(`You can only add current record, Argument is not an record ${record}`)
        }
    }
    describe(){
        return ` ${this.name} has ${this.record.length} record.`;
    }
  }   
  
  class Menu{                                       //////setting up possible menu options
    constructor(){
        this.spot = [];
        this.selectedspot = null;
    }
    start(){                                          /////////show what possible options the customer may want to pick from 
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch(selection){
                case "1":
                    this.createspot();
                    break;
                case "2":
                    this.viewspot();
                    break;
                case "3":
                    this.deletespot();
                    break;
                case "4":
                    this.viewAllspots();
                    break;
            default:
                selection = 0;
            }
        selection = this.showMainMenuOptions();
        }
        alert("Goodbye, now");
    }
      
    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Create New spot
        2) View Spot
        3) Delete spot
        4) View All spot
        `);
    }
  
    showDepartmentMenuOptions(spotInfo){
        return prompt(`
        0) Back
        1) Create New spot
        2) Delete Existing spot
        ---------------------------
            ${spotInfo}
        `);
    }
    
    viewAllspots(){
        let spotString = "";
        for(let i = 0; i < this.spot.length; i++){
            spotString += i + ") " + this.spot[i].name + "\n";
        }
        alert(spotString);
    }
  
    createspot(){
        let name = prompt ("Enter Name of New spot");
        this.spot.push(new spot(name));
    }
  
    viewspot(){
        let index = prompt("Enter the Index of the spot you wish to View:");
        if(index > -1 && index < this.spot.length){
            this.selectedspot = this.spot[index];
            let decription = "spot Name: " + this.selectedspot.name + "\n";
  
            for(let i = 0; i < this.selectedspot.record.length; i++){
                decription += i + ") " + this.selectedspot.record[i].name
                 + " - " + this.selectedspot.record[i].position + "\n";
            }
  
            let selection = this.showspotMenuOptions(decription);
            switch(selection){
                case "1":
                    this.createNewrecord();
                    break;
                case "2":
                    this.deleteExistingrecord();
                    break;
            }
        }
    }
  
    deletespot(){
        let index = prompt("Enter the Index of the record you wish to Delete:");
        if(index > -1 && index < this.spots.length){
            this.spot.splice(index, 1);
        }
    }
  
    createNewSpot(){
        let name = prompt("Enter name of new record:");
        let position = prompt("Enter Position for New record:");
        this.selectedspot.record.push(new record(name, position));
    }
  
    deleteExistingSpot(){
        let index = prompt("Enter the Index of the record you wish to Delete:");
        if(index > -1 && index < this.selectedspot.record.length){
            this.selectedspot.record.splice(index, 1);
        }
    }
  }
  
  let menu = new Menu();
  menu.start();
  
  
  ////////thank you for being a customer at the world famous record store.////////
    
  
  