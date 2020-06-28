export const totalOrdersPrice = "select sum(price) from orders where executor = $1;";
export const avgExecTime = "select avg(exec_time) from orders where executor = $1;";
export const ordersCount = "select count(*) from orders where executor = $1;";
export const oftenDelivered = "select count(address), address from orders where executor =$1 group by address order by count(address) DESC;";