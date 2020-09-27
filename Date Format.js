//Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

function formatDate(date) {
    let splitDate = date.split("/");
    let reverseDateArray = splitDate.reverse();
    return reverseDateArray.join("");
};

formatDate("11/12/2019")