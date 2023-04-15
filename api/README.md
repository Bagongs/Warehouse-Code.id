# API

## Script

'''bash

npx sequelize-cli model:generate --name user --attributes username:string,email:string,password:string,photo:string,status:string

npx sequelize-cli model:generate --name item --attributes name:string,image:string,receiving:string,category:string,userId:integer,brandId:integer,editRequest:string

npx sequelize-cli model:generate --name brand --attributes name:string

npx sequelize-cli model:generate --name historyItem --attributes itemId:integer,methodRequest:string,oldValue:string,newValue:string

'''