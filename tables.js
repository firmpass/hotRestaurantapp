

// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
    {
      customerName: "Eric Thornton",
      customerEmail: "et@email.com",
      customerID: "etGreat3",
      phoneNumber: "000-000-0000"
    }
  ];

  console.log(tableArray);
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = tableArray;