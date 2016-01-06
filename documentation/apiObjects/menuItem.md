#MenuItem
Represents any item (usually food or beverage) for sale by a restaurant.

*status*
 - Needs implementation
 
#Object - MenuItem

| Fields        | Type    | Description
| ------------- | ------- | ------------|
| name          | String  | Name of the item - office use |
| Description   | String  | Description of the item - office use |
| Title         | String  | Name of the item - menu use |
| Subtitle      | String  | Description of item -menu use |
| notes         | String  | additional info about item |
| category     | String  | Type of food/beverage |
| Linkeditems   | array   | collection of variations on base item (e.g. sauces, preps) |

##Other Notes
- This structure will almost definitley need a redesign in the future.
- How do we solve the chicken shnitzel problem? (multiple similar items). Is the Linkeditems array addressing this issue effectivley?

