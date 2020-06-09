	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 1.99,
        source: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/full-frame-shot-of-broccoli-royalty-free-image-571248799-1532377854.jpg"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
        organic: false,
		price: 2.35,
        source: "https://bakingamoment.com/wp-content/uploads/2020/01/IMG_7173-white-bread-2.jpg"
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
        organic: true,
		price: 10.00,
        source: "https://www.cookingclassy.com/wp-content/uploads/2019/06/brown-sugar-lime-baked-salmon-22.jpg"
	},
	{
		name: "Beef",
		vegetarian: false,
		glutenFree: true,
        organic: true,
		price: 12.00,
        source: "https://www.thespruceeats.com/thmb/tDWJzDYBuRqGuQIRuEr4yRMVGzQ=/2696x2696/smart/filters:no_upscale()/marinated-rump-roast-3058682-hero-01-0977a498722f47debaa7034c13053048.jpg"
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
        organic: true,
		price: 8.00,
        source: "https://diabetesstrong.com/wp-content/uploads/2018/01/how-to-cook-perfect-chicken-breast-featured.jpg"
	},
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 2.00,
        source: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg?w=1155&h=1528"
	},
	{
		name: "Orange",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 2.00,
        source: "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg?w=1155&h=1444"
	},
	{
		name: "Banana",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 3.00,
        source: "https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920-1200x800.jpg"
	},
	{
		name: "Plant based bagel",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 5.00,
        source: "https://www.mamaknowsglutenfree.com/wp-content/uploads/2019/03/gluten-free-bagels-1a.jpg"
	},
	{
		name: "Radish",
		vegetarian: true,
		glutenFree: true,
        organic: true,
		price: 3.00,
        source: "https://www.tasteofhome.com/wp-content/uploads/2019/05/radish-shutterstock_1010435131.jpg"
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	var product_names = [];
    var restrictions = restriction.split(',');
//    console.log(restrictions);
	for (let i=0; i<prods.length; i+=1) {
        var productVegetarian = prods[i].vegetarian;
        var productGlutenFree = prods[i].glutenFree;
        var productOrganic = prods[i].organic;
        var restrictVeg = false;
        var restrictGlu = false;
        var restrictOrg = false;
        var None = false;
//        console.log(restrictions.length);
        
        if(restrictions.length >= 2){
            for(let j = 0; j < restrictions.length; j++){
                if(restrictions[j] == "Vegetarian") restrictVeg = true;
                if(restrictions[j] == "GlutenFree") restrictGlu = true;
                if(restrictions[j] == "Organic") restrictOrg = true;
            }
            if ((restrictVeg && restrictOrg && restrictGlu) && (productVegetarian && productOrganic && productGlutenFree)){
			     product_names.push(products[i]);
            }else if ((restrictGlu && restrictVeg && !restrictOrg) && (productVegetarian && productGlutenFree)){
			     pproduct_names.push(products[i]);
		    }else if ((restrictGlu && restrictOrg && !restrictVeg) && (productGlutenFree&& productOrganic)){
			     product_names.push(products[i]);;
            }else if ((restrictVeg && restrictOrg && !restrictGlu) && (productVegetarian && productOrganic)){
			     product_names.push(products[i]);
            }
        }else{
            if ((restrictions[0] == "Vegetarian") && (productVegetarian)){
                product_names.push(products[i]);
            }else if ((restrictions[0] == "GlutenFree") && (productGlutenFree)){
                product_names.push(products[i]);
            }else if ((restrictions[0] == "Organic") && (productOrganic)){
                product_names.push(products[i]);
            }else if (restrictions[0] == "None"){
                product_names.push(products[i]);
            }
        }
        

	}
	return product_names;
}

function formatText(productName, productPrice){
    var finalOut = productName;
    var len = finalOut.length;
        
    for(j = 0; j < (30 - len);j++){
        finalOut = finalOut + '—';
    }
    
    finalOut = finalOut + productPrice;
    return finalOut;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
