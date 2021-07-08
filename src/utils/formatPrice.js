export const formatPrice = price => {
  return typeof(price) != 'number'
    ? price
    : Math.ceil(price)
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
};

export const promoPrice = (price, discount) => {

  if(typeof(discount) !== 'number' || price <= 0 || discount <= 0){
    return null;
  }

  if(typeof(price) !== 'number' && price.includes('$')){
    const numberPrice = price.replace(/^\$\s*/, '').replace(/,/g, '');
    price = numberPrice;
  }

  const promoPrice = price-(price*(discount/100));

  return promoPrice;
};
