select "films"."releaseYear",
       "films"."title",
       "categories"."name"
from "films"
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "films"."title" = 'Boogie Amelie';
