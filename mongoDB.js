     mongo就是没有格式的数据库
1.配置环境变量之后，可以在任意盘符：启动mongo数据库，命令如下
 mongod --dbpath c:\mongo      --dbpath就是选择数据库文档所在的文件夹。也就是说，mongoDB中，真的有物理文件，对应一个个数据库。U盘可以拷走
2.一定要保持开机这个CMD不动，不能ctrl+c
3.直接使用mongo命令连接数据库，运行环境就是mongo语法了
4.show dbs    			  					列出所有数据库
5.use 数据库名字     						使用数据库
6.use 没有的数据库名字    					新建这个数据库
7.db                     					查看当前在那个数据库
8.db.student.insert({"name":"xiaoming","age":10,"sex":"男"});     student就是所谓的集合。集合中存储很多json
     db一个未知的集合名字，这个集合将自动创建
9.show collections           查看当前数据库有哪些集合
10.db.student.find();        查看当前集合中有哪些json
11.db.student.find("name":"xiaoming");  查看name是xiaoming的json
12.db.dropDatabase();               删除数据库