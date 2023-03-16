import React from 'react'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <div className={styles.menu}>
        <p>Menu Prices Included All Taxes</p>
        <hr />
      <div className={styles.foodmenu}>
        <h1>Our Food Menu</h1>
        <div className={styles.soup}>
          <h2>Soup</h2>
          <div className={styles.soupmenu}>
            <div className={styles.left}>
                <li>Sweet Corn Soup --------(Rs.550)
                    <h3>(Coarsely Chopped Corn in Creamy Style)</h3>
                </li>
                <li>Mushroom Veloute ------- (Rs. 450)
                    <h3>(Fresh Bottom Mushroom Sautéed with Herbs & Pureed)</h3>
                </li>
                <li>Hot & Sour Soup (Veg & Non Veg) ------- (Rs. 450/550)
                    <h3>(Delicious Chinese Broth with Vegetables/Chicken)</h3>
                </li>
            </div>
            <div className={styles.right}>
                <li>Multi Grain Orzo Garbanzo & Kale Tuscan Soup ------- (Rs. 550)
                    <h3>(Heavy Cream with Italian Sausage and Chicken Broth)</h3>
                </li>
                <li>Tum Yum Soup (Kung/Gai/Pak) ----- (Rs. 850/700/600)
                    <h3>(Thai Soup Flavored with Lemongrass & Galangal)</h3>
                </li>
            </div>
          </div>
         </div>
         <div className={styles.salad}>
          <h2>Salad</h2>
          <div className={styles.saladmenu}>
            <div className={styles.left}>
                <li>Seasonal Fresh Fruits Salad ----- (Rs. 600)
                    <h3>(Different Seasonally Available Fresh Fruits Cuts)</h3>
                </li>
                <li>Spanish Potato Salad ------ (Rs. 500)
                    <h3>(Creamy Cubed Potato Topped with Tuna Flex)</h3>
                </li>
                <li>Special Salad ------ (Rs. 850)
                    <h3>(Lettuce Topped With Bacon, Cheese, Chicken, Boiled Egg, Tomato & Chef’s dressing)</h3>
                </li>
            </div>
            <div className={styles.right}>
                <li>Mexican Style Corn Salad ----- (Rs. 400)
                    <h3>(Sweet Corn Toss With Freshly Chopped Herbs, Spies & Lemon)</h3>
                </li>
                <li>Nepali Salad -------- (Rs. 400)
                    <h3>(Local Crudities served With Spicy Chutney)</h3>
                </li>
            </div>
          </div>
         </div>
         <div className={styles.momo}>
          <h2>Momo</h2>
          <div className={styles.momomenu}>
            <div className={styles.left}>
                <li>CHICKEN MO:MO -------- (Rs. 400 / 450 / 450 / 500)
                    <h3>Steamed/Fried/C/Kothey</h3>
                </li>
            </div>
            <div className={styles.right}>
                <li>Veg MO:MO ----- (Rs. 300 / 350 /400 / 450)
                    <h3>Steamed/Fried/C/Kothey</h3>
                </li>
                
            </div>
          </div>
         </div>
         <div className={styles.pizza}>
          <h2>Pizza</h2>
          <div className={styles.pizzamenu}>
            <div className={styles.left}>
                <li>Overloaded Veggies ------ (Rs. 1050)
                    <h3>(All kinds of Fresh Veggies)</h3>
                </li>
                <li>Margherita Pizza --------- (Rs. 1000)
                    <h3>(tomatoes, mozzarella cheese, garlic, fresh basil, and extra-virgin olive oil.)</h3>
                </li>
                <li>Hawaiian Pizza ----------- (Rs. 1200)
                    <h3>(pizza sauce, cheese, cooked ham, and pineapple.)</h3>
                </li>
            </div>
            <div className={styles.right}>
                <li>Pepperoni Pizza ---------- (Rs. 1250)
                    <h3>(Pepperoni, Mozzarella Cheese)</h3>
                </li>
                <li>Tandoori Pizza ----------- (Rs. 1300)
                    <h3>(Cunks of Tender, Tandoori Marinated Chicken )</h3>
                </li>
            </div>
          </div>
         </div>
      </div>
      <div className={styles.foodmenu}>
        <h1>Our Breakfast Menu</h1>
        <div className={styles.soup}>
          <div className={styles.soupmenu}>
            <div className={styles.left}>
                <li>SIMPLE BREAKFAST ----- (Rs. 395)
                    <h3>(Toast with Jam & Butter, Choice of Egg Served With Tea or Coffee or Juice.)</h3>
                </li>
                <li>FULL ENGLISH BREAKFAST ----- (Rs. 495)
                    <h3>(Two eggs (fried or scrambled), Bacon, Sausage, Grill Tomatoes, and Mushroom, Served with Toast and Tea or Coffee or Juice.)</h3>
                </li>
                <li>CLASSIC AMERICAN BREAKFAST ----- (Rs. 525)
                    <h3>(Two eggs (Scrambled, Fried, or Poached), Bacon or Sausage, Hash Brow and a Pancake Served with Tea or Coffee or Juice.)</h3>
                </li>
                <li>
                BREAKFAST BURRITO ----- (Rs. 525)
                <h3>Scrambled Eggs, Diced Ham or Bacon, Cheese, Peppers and Onions Wrapped in Tortilla.</h3>
                </li>
                <li>
                CHOICE OF PANCAKE ----- (Rs. 225 / 265 / 275)
                <h3>Plain Pancake, Banana Pancake or Mix Fruits Pancake.</h3>
                </li>
                <li>CORN FLAKES ----- (Rs. 300)
                    <h3>Serve With Hot and Cold Milk.</h3>
                </li>
                <li>FRESH JUICE BY GLASS --- (Rs. 500)
                    <h3>Orange / Apple / Pineapple / Watermelon.</h3>
                </li>
            </div>
            <div className={styles.right}>
                <li>CLASSIC FRENCH TOAST ----- (Rs. 395)
                    <h3>(A simple breakfast Dish Where Slices of Bread are soaked in a Mixture of Eggs, Milk, Sugar and Vanilla and then Fried in Butter or Oil.)</h3>
                </li>
                <li>EGG BENEDICT ----- (Rs. 525)
                    <h3>(Bread topped with bacon, poached egg and hollandaise sauce.)</h3>
                </li>
                <li>CHOICE OF EGG ----- (Rs. 295)
                    <h3>Scrambled Egg or Omelet or Fried Egg or Boiled Egg or Poached Egg.</h3>
                </li>
                <li>GRILLED CHICKEN S/W ----- (Rs. 575)
                    <h3>Serve With Fresh Fruits and Lyonnais Potatoes.</h3>
                </li>
                <li>FRESH FRUITS PLATTER ----- (Rs. 495)
                    <h3>Assorted Seasonal Fruits Served With Yoghurt and Honey for Dipping.</h3>
                </li>
                <li>PORRIDGE ----- (Rs. 300)
                    <h3>Serve With Milk and Honey.</h3>
                </li>
                <li>HOT BEVERAGES ----- (Rs. 200 / 250 / 325 / 225 / 325 / 325)
                    <h3>Espresso, Americano, Cappuccino, Hot Lemon Honey, Cafe Latté Hot Chocolate.</h3>
                </li>
            </div>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Menu
