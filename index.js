// jais code
//50th street to 42nd st is 8 blocks/////////////1 block = 264
function distanceFromHqInBlocks(location){
    const distance = Math.abs(location-42)
        return distance;
}
//returns a distance in blocks, returns a distance in blocks, calculates distances below 42nd street

function distanceFromHqInFeet (location){
     return distanceFromHqInBlocks(location) * 264 ;
}
//returns a distance in feet, returns a distance in feet, calculates distances below 42nd street

function distanceTravelledInFeet(start ,destination ){
     return Math.abs(destination-start)*264 ;
}
//number of feet traveled in relation to distance solves = returns the distance travelled in feet, returns a distance in feet, returns distance when destination is below distance
function calculatesFarePrice(start, destination){
    const FeetTravelled = Math.abs(distanceTravelledInFeet(start ,destination ));
        if(FeetTravelled<=400){
            return 0 ;
    }
        else if (400<FeetTravelled && FeetTravelled<2000){
            return  ( FeetTravelled-400)*2/100;
    }
        else if (2000<=FeetTravelled && FeetTravelled<2500){
            return 25 ;
    }
        else {
            return 'cannot travel that far' ;
    }
}
// gives customers a free sample, charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!), charges 25 dollars for a distance over 2000 feet, does not allow rides over 2500 feet