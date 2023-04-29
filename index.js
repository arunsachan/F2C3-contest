// Function to get menu from the server
function getMenu() {
    fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
      .then((response) => response.json())
      .then((data) => {
        const menuList = document.getElementById("menu-list");
        data.forEach((item) => {
          const menuItem = document.createElement("li");
          menuItem.innerHTML = `${item.name} - ${item.price}`;
          menuList.appendChild(menuItem);
        });
      });
  }
  
  // Function to take order from the user
  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const burgers = ["Cheese Burger", "Veggie Burger", "Chicken Burger"];
        const order = {
          items: [],
        };
        for (let i = 0; i < 3; i++) {
          const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
          order.items.push(randomBurger);
        }
        console.log("Order Taken: ", order);
        resolve(order);
      }, 2500);
    });
  }
  
  // Function to prepare the order
  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Order Prepared");
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // Function to pay for the order
  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Order Paid");
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  // Function to show thank you message
  function thankyouFnc() {
    alert("Thank you for eating with us today!");
  }
  
  // Calling the functions in sequence using async/await
  async function restaurantWorkflow() {
    await getMenu();
    const order = await takeOrder();
    const orderStatus = await orderPrep();
    const paymentStatus = await payOrder();
    if (paymentStatus.paid) {
      thankyouFnc();
    }
  }
  
  // Run the restaurant workflow when the page is loaded
  window.onload = restaurantWorkflow;