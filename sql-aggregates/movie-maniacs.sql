select "firstName",
       "lastName",
       "customerId",
       sum("amount") as "rentalSum"
from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "rentalSum" desc
