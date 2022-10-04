exports.allShops=allShops;        

function allShops() {
    
    let arr=[];
    const fshop1={
        Haircut:60,
        Shave:50
    };

    const shop1={
        city:"jabalpur",
        locality:"gokalpur",
        pincode:482051,
        name:"JL Men's Saloon",
        visitingHours:"9:30am to 9:30pm",
        location:"#",
        services:fshop1
    };

    arr.push(shop1);
    return arr;
}


