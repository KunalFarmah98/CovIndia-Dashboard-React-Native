class DailyData{
    state:String;
    active:String;
    recovered:String;
    deceased:String;
    total:String;
    currReported:String;
    currRecovered:String;
    currDeaths:String;
    lastUpdated:String;

    constructor(state,active,recovered,deceased,total,currReported,currRecovered,currDeaths,lastUpdated){
        this.state = state;
        this.active = active;
        this.recovered = recovered;
        this.deceased = deceased;
        this.total = total;
        this.currReported = currReported;
        this.currRecovered = currRecovered;
        this.currDeaths = currDeaths;
        this.lastUpdated = lastUpdated;
    }

}

export default DailyData;