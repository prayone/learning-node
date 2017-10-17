1.mongoimport --db test --collection wpp --drop --file info.json
    导入数据   db test：要导入的数据库名字   --collection wpp：要导入的集合名字
    --drop  要删除的东西    --file info.json要导入的名字为info.json的数据的路径
   这样就可以随便创建一个json文件用mongoimport导入进去了