function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence){
        if(!isTired && isSober){
            return "You can drive"
        }
        else if(!isSober){
            return "You shouldn't drive"
        }
    }
    return "You cannot drive"
}

module.exports = CanDrive;
