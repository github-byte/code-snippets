const updateBifurcationPrice = (amount = 0, type = '', bifurcationObj = {}, taxes = {}, setListing = () => { }, listingData = () => { }) => {
  let totalAmount = 0

  const { } = bifurcationObj;
  if (type == 'land') {
  }
  else if (type == 'hotel') {

  }
  const {} = taxes
  const finalAmount = calculateTax()
}
  
const updateNonBifurcationPrice = (amount = 0, totalNetPrice = 0, taxes = {}, setListing = () => { }, listingData = () => { }) => {
  let totalAmount = 0
  totalAmount = amount + totalNetPrice;
  const {} = taxes
  const finalAmount = calculateTax()
  //update listing
}