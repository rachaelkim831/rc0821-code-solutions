select "customers"."firstName" as c_fn,
        "customers"."lastName" as c_ln,
        "p"."amount" as paymentAmount
from "customers"
join "payments" as "p" using ("customerId")
order by "amount" desc
limit 10;
