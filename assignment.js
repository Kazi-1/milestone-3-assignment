// https://github.com/kazi-coder/milestone-3-assignment


// Problem-1 (kilometerToMeter)

function kilometerToMeter(kiloMeter) {
    var meter = kiloMeter * 1000;
    return meter;
}


// Problem-2 (budgetCalculator)

function budgetCalculator(clock, phone, laptop) {
    var clockPrice = clock * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalCost = clockPrice + phonePrice + laptopPrice;
    return totalCost;
}


// Problem-3 (hotelCost)

function hotelCost(perNight) {
    var cost = 0;
    if (perNight <= 10) {
        cost = perNight * 100;
    }
    else if (perNight <= 20) {
        var firstTenNights = 10 * 100;
        var remaining = perNight - 10;
        var firstTwentyNights = remaining * 80;
        cost = firstTenNights + firstTwentyNights;
    }
    else {
        var firstTenNights = 10 * 100;
        var firstTwentyNights = 10 * 80;
        var remaining = perNight - 20;
        var restOfNights = remaining * 50;
        cost = firstTenNights + firstTwentyNights + restOfNights;
    }
    return cost;
}


// problem-4 (megafriend)

function megaFriend(friends){
    var largestName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element > largestName){
            largestName = element;
        }
    }
    return largestName;
}


// The End